'use client';

import { useState, useEffect } from 'react';
import { generateScarcityMessage } from '@/ai/flows/dynamic-scarcity-messaging';

type Props = {
  productName: string;
};

const OFFER_DURATION_SECONDS = 3600; // 1 hour

export function DynamicScarcity({ productName }: Props) {
  const [message, setMessage] = useState('Não ficará disponível por muito tempo');
  const [timeLeft, setTimeLeft] = useState(OFFER_DURATION_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    async function updateMessage() {
      // Update message every 5 minutes or when it's about to end
      if (timeLeft > 0 && (timeLeft % 300 === 0 || timeLeft < 60)) {
        try {
          const minutes = Math.floor(timeLeft / 60);
          const seconds = timeLeft % 60;
          const timeRemaining = `${minutes}m ${seconds}s`;

          const result = await generateScarcityMessage({
            productName,
            initialQuantity: 100,
            currentQuantity: 23,
            timeRemaining,
          });
          if (result.scarcityMessage) {
            setMessage(result.scarcityMessage);
          }
        } catch (error) {
          console.error('Failed to generate scarcity message:', error);
        }
      } else if (timeLeft === 0) {
        setMessage('Oferta encerrada!');
      }
    }
    updateMessage();
  }, [timeLeft, productName]);

  return <p className="text-sm font-semibold text-primary">{message}</p>;
}
