import React from 'react';

export const useSpeech = () => {
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const ut = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(ut);
    }
  };
  return { speak };
};

export default function SpeechManager() { return null; }
