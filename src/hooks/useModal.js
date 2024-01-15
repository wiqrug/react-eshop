import { useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true)
    console.log("handle open modal")
  };

  const handleCloseModal = () => {
    setIsModalOpen(false)
    console.log("handle close modal")
  };

  return { isModalOpen, setIsModalOpen, handleCloseModal, handleOpenModal };
};
