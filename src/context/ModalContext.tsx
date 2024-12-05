import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  currentStep: number;
  nextStep: () => void;
  resetStep: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setCurrentStep(1); // Сбрасываем шаг при закрытии
  };
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const resetStep = () => setCurrentStep(1);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        currentStep,
        nextStep,
        resetStep,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};