// components/Modal.tsx
import React from 'react';
import Keyboard from './Keyboard';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center" onClick={handleBackgroundClick}>
      <div className="bg-white p-4 rounded shadow-lg max-w-lg" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">閉じる</button>
        <Keyboard />
      </div>
    </div>
  );
};

export default Modal;
