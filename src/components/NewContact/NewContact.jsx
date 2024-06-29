import { useState } from 'react';
import Modal from 'react-modal';
import { ContactForm } from '../ContactForm/ContactForm';
import { ModalContrainer, ModalContrainerIcon } from './NewContact.style';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '0px',
    overflow: 'auto',
    width: 'auto',
    borderRadius: '10px',
    transform: 'translate(-50%, -50%)',
  },
};

export const NewContact = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button type="butten" onClick={openModal}>
        Add Contact
      </button>

      <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="New Contact">
        <ModalContrainer>
          <ContactForm closeModal={closeModal} />
          <ModalContrainerIcon onClick={closeModal} />
        </ModalContrainer>
      </Modal>
    </>
  );
};
