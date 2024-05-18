// components/ModalTrigger.tsx
import React, { useState } from 'react';
import Modal from './Modal';

const ModalTrigger: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // デフォルト動作を防ぐ
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleOpenModal}>
        鍵盤を開く
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default ModalTrigger;
