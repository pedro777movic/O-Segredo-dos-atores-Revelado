'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Check, Sparkles, Flame, Gem } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  Firestore,
} from 'firebase/firestore';
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
  Auth,
} from 'firebase/auth';
import { app } from '@/lib/firebase';
import toast from 'react-hot-toast';

const levels = [
  {
    name: 'Atração',
    icon: Sparkles,
    scrollThreshold: 0,
    messages: [
      'Você iniciou o jogo da sedução...',
      'O primeiro passo para o desejo.',
      'A jornada começa agora.',
    ],
  },
  {
    name: 'Excitação',
    icon: Flame,
    scrollThreshold: 0.3,
    messages: [
      'Está ficando quente 🔥...',
      'A tensão está aumentando.',
      'O ar está mais denso.',
    ],
  },
  {
    name: 'Clímax',
    icon: Gem,
    scrollThreshold: 0.6,
    messages: [
      'Quase no ápice...',
      'A um passo do segredo.',
      'O ponto de não retorno.',
    ],
  },
  {
    name: 'Segredo Revelado',
    icon: Check,
    scrollThreshold: 0.9,
    messages: ['Clímax atingido! 💥'],
  },
];

const getRandomMessage = (levelIndex: number) => {
  if (levelIndex < 0 || levelIndex >= levels.length) return '';
  const messages = levels[levelIndex].messages;
  return messages[Math.floor(Math.random() * messages.length)];
};

export function SeductionJourney() {
  const [userId, setUserId] = useState<string | null>(null);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [unlockedLevels, setUnlockedLevels] = useState([0]);
  const [levelMessages, setLevelMessages] = useState<string[]>([]);
  const journeyRef = useRef<HTMLDivElement>(null);
  const toastShownForLevel = useRef<Set<number>>(new Set());

  const [auth, setAuth] = useState<Auth | null>(null);
  const [db, setDb] = useState<Firestore | null>(null);

  useEffect(() => {
    const authInstance = getAuth(app);
    const dbInstance = getFirestore(app);
    setAuth(authInstance);
    setDb(dbInstance);

    const handleAuthStateChanged = onAuthStateChanged(authInstance, async (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        try {
          await signInAnonymously(authInstance);
        } catch (error) {
          console.error("Anonymous sign in failed", error);
        }
      }
    });
    return () => handleAuthStateChanged();
  }, []);

  useEffect(() => {
    if (!userId || !db) return;
    const docRef = doc(db, 'progress', userId);

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        const serverLevel = data.level || 0;
        setCurrentLevel(serverLevel);
        const newUnlocked = Array.from({ length: serverLevel + 1 }, (_, i) => i);
        setUnlockedLevels(newUnlocked);
         // Mark toasts as shown for levels already unlocked
         for (let i = 0; i <= serverLevel; i++) {
          toastShownForLevel.current.add(i);
        }
      } else {
        setDoc(docRef, { level: 0 });
      }
    });

    return () => unsubscribe();
  }, [userId, db]);
  
  useEffect(() => {
    const initialMessages = levels.map((_, index) => getRandomMessage(index));
    setLevelMessages(initialMessages);
  }, []);


  const updateUserLevel = useCallback(
    async (newLevel: number) => {
      if (!userId || newLevel <= currentLevel || !db) return;

      const previousLevel = currentLevel;
      setCurrentLevel(newLevel);
      setUnlockedLevels((prev) => Array.from(new Set([...prev, ...Array.from({length: newLevel + 1}, (_,i) => i)])));

      const docRef = doc(db, 'progress', userId);
      await setDoc(docRef, { level: newLevel }, { merge: true });
      
      // Show toast for newly unlocked levels, but not for the first one
      for (let i = previousLevel + 1; i <= newLevel; i++) {
        if (i > 0 && !toastShownForLevel.current.has(i)) {
          const levelData = levels[i];
          toast.success(`Nível Desbloqueado: ${levelData.name}`, {
            icon: <levelData.icon className="h-6 w-6 text-primary-foreground" />,
          });
          toastShownForLevel.current.add(i);
        }
      }
    },
    [userId, currentLevel, db]
  );

  const handleScroll = useCallback(() => {
    const scrollPercent =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);

    let newLevel = 0;
    for (let i = levels.length - 1; i >= 0; i--) {
      if (scrollPercent >= levels[i].scrollThreshold) {
        newLevel = i;
        break;
      }
    }
    if (newLevel > currentLevel) {
      updateUserLevel(newLevel);
    }
  }, [currentLevel, updateUserLevel]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const isLevelUnlocked = (levelIndex: number) => unlockedLevels.includes(levelIndex);
  const isLevelCompleted = (levelIndex: number) => levelIndex < currentLevel;

  return (
    <section id="seduction-journey" className="py-8" ref={journeyRef}>
      <div className="relative mx-auto w-full max-w-2xl px-4 md:px-0">
        <div className="absolute left-1/2 top-5 h-1 w-[calc(100%-4rem)] -translate-x-1/2 -translate-y-1/2 bg-border">
          <div
            className="h-1 bg-primary transition-all duration-500"
            style={{
              width: `${(currentLevel / (levels.length - 1)) * 100}%`,
            }}
          />
        </div>

        <div className="relative flex justify-between">
          {levels.map((level, index) => (
            <div key={level.name} className="z-10 flex flex-col items-center">
              <div
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full border-2 bg-background transition-all duration-300',
                  {
                    'border-primary': isLevelUnlocked(index),
                    'border-border': !isLevelUnlocked(index),
                    'animate-pulse':
                      index === currentLevel && index < levels.length - 1,
                  }
                )}
              >
                {isLevelCompleted(index) ? (
                  <Check className="h-6 w-6 text-green-500" />
                ) : (
                  <level.icon
                    className={cn('h-6 w-6', {
                      'text-primary': isLevelUnlocked(index),
                      'text-muted-foreground': !isLevelUnlocked(index),
                    })}
                  />
                )}
              </div>
              <div className="mt-2 w-20 text-center md:w-32">
                <p
                  className={cn('text-xs font-bold md:text-sm', {
                    'text-foreground': isLevelUnlocked(index),
                    'text-muted-foreground': !isLevelUnlocked(index),
                  })}
                >
                  {level.name}
                </p>
                {isLevelUnlocked(index) && (
                  <p className="hidden text-xs text-muted-foreground md:block">
                    {levelMessages[index]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentLevel >= levels.length - 1 && (
        <div className="mt-8 flex flex-col items-center px-4 text-center">
          <h3 className="text-2xl font-bold text-primary">
            {getRandomMessage(levels.length - 1)}
          </h3>
          <p className="mt-2 text-lg text-foreground">
            Você está pronto para descobrir o que os melhores guardam a sete
            chaves.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-4 w-full max-w-md animate-pulse rounded-full text-lg font-bold shadow-lg shadow-primary/30"
          >
            <a href="#pricing">Liberar o Segredo Nº1 Agora</a>
          </Button>
        </div>
      )}
    </section>
  );
}
