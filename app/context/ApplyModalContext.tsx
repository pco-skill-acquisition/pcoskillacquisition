'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ApplyModalContextType {
  isOpen: boolean;
  prefilledSkill: string;
  openModal: (skill?: string) => void;
  closeModal: () => void;
}

const ApplyModalContext = createContext<ApplyModalContextType | undefined>(undefined);

export function ApplyModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledSkill, setPrefilledSkill] = useState('');

  const openModal = (skill: string = '') => {
    setPrefilledSkill(skill);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setPrefilledSkill(''), 300);
  };

  return (
    <ApplyModalContext.Provider value={{ isOpen, prefilledSkill, openModal, closeModal }}>
      {children}
    </ApplyModalContext.Provider>
  );
}

export function useApplyModal() {
  const context = useContext(ApplyModalContext);
  if (context === undefined) {
    throw new Error('useApplyModal must be used within an ApplyModalProvider');
  }
  return context;
}
