'use client';

import { useState, useEffect, useCallback, Fragment } from 'react';
import { signInAnonymously } from 'firebase/auth';
import { doc, onSnapshot, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Flame, Rocket, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const levels = [
  {
    level: 1,
    name: 'Atração',
    message: 'Você iniciou o jogo da sedução...',
    text: 'O primeiro passo que os atores usam para despertar desejo instantâneo.',
    icon: Sparkles,
    unlockedIcon: Check,
    lockedIcon: Lock,
  },
  {
    level: 2,
    name: 'Excitação',
    message: 'Está ficando quente 🔥…',
    text: 'O detalhe secreto que aumenta a excitação da parceira sem ela perceber.',
    icon: Flame,
    unlockedIcon: Check,
    lockedIcon: Lock,
  },
  {
    level: 3,
    name: 'Clímax',
    message: 'Quase no ápice…',
    text: 'A peça-chave que leva ao ponto máximo da performance.',
    icon: Rocket,
    unlockedIcon: Check,
    lockedIcon: Lock,
  },
];

export function SeductionLevels() {
  const [userId, setUserId] = useState<string | null>(null);
  const [currentLevel, setCurrentLevel] = useState(0);
  const { toast } = useToast();

  const showToast = useCallback((message: string, level: number) => {
    if (level > currentLevel) {
        toast({
            title: 'Progresso Desbloqueado!',
            description: message,
            duration: 3000,
        });
    }
  }, [toast, currentLevel]);

  const unlockLevel = useCallback(async (level: number) => {
    if (userId && level > currentLevel) {
      await setDoc(doc(db, 'progresso', userId), { level }, { merge: true });
    }
  }, [userId, currentLevel]);


  useEffect(() => {
    const handleScroll = () => {
      if (currentLevel >= 2) return;
      
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / pageHeight) * 100;
      
      if (scrollPercentage >= 50) {
        unlockLevel(2);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [unlockLevel, currentLevel]);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserId(user.uid);
        const docRef = doc(db, 'progresso', user.uid);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          await setDoc(docRef, { level: 1 });
          setCurrentLevel(1);
        } else {
          setCurrentLevel(docSnap.data().level || 0)
        }
      } else {
        await signInAnonymously(auth);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (userId) {
      const unsub = onSnapshot(doc(db, 'progresso', userId), (doc) => {
        if (doc.exists()) {
          const newLevel = doc.data().level;
          if (newLevel > currentLevel) {
             showToast(levels[newLevel-1].message, newLevel);
             setCurrentLevel(newLevel);
          }
        }
      });
      return () => unsub();
    }
  }, [userId, currentLevel, showToast]);
  
  const allLevelsCompleted = currentLevel >= 3;

  return (
    <section id="seduction-game" className="py-2">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="rounded-lg bg-secondary/30 p-6">
          <h2 className="text-center font-headline text-2xl font-bold md:text-3xl mb-6">Os Níveis da Sedução</h2>
          {/* Stepper */}
          <div className="flex items-center justify-center mb-6">
            {levels.map((level, index) => (
              <Fragment key={level.name}>
                <div className="flex flex-col items-center">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    currentLevel >= level.level ? "bg-green-500 border-green-500 text-white animate-pulse" : "bg-gray-700 border-gray-600 text-gray-400"
                  )}>
                    {currentLevel >= level.level ? <level.unlockedIcon className="w-6 h-6" /> : <level.lockedIcon className="w-6 h-6" />}
                  </div>
                  <p className={cn(
                      "text-xs mt-2 text-center",
                      currentLevel >= level.level ? "font-bold text-primary" : "text-muted-foreground"
                  )}>{level.name}</p>
                </div>
                {index < levels.length - 1 && (
                  <div className={cn(
                      "flex-1 h-1 mx-2 transition-colors duration-500",
                      currentLevel > index + 1 ? "bg-green-500" : "bg-gray-600"
                  )}></div>
                )}
              </Fragment>
            ))}
          </div>
          
          {/* Content */}
          <div className="text-center">
            {currentLevel > 0 && currentLevel <= 3 && !allLevelsCompleted && (
                <div className="my-4">
                    <p className="text-lg font-semibold text-primary">{levels[currentLevel -1].message}</p>
                    <p className="text-muted-foreground">{levels[currentLevel - 1].text}</p>
                </div>
            )}

            {currentLevel === 2 && (
              <Button onClick={() => unlockLevel(3)} size="lg" className="mt-4 font-bold">
                Quero ir mais fundo
              </Button>
            )}
            
            {allLevelsCompleted && (
              <div className="mt-6 text-center animate-fade-in">
                 <p className="text-lg font-semibold text-primary">Clímax atingido! 💥</p>
                 <p className="text-muted-foreground mb-4">A peça-chave que leva ao ponto máximo da performance.</p>
                <Button
                  asChild
                  size="lg"
                  className="w-full max-w-md animate-pulse rounded-full bg-red-600 text-lg font-bold text-white shadow-lg shadow-red-500/50 hover:bg-red-700"
                >
                  <a href="#pricing">Liberar o Segredo Nº1 Agora</a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
