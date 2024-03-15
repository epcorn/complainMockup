import { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-white p-8 rounded-lg">
                <button className="relative z-30 top-4 right-4 text-gray-500 hover:text-gray-700" onClick={() => onClose()}>X</button>
                {children}
            </div>
        </div>
    );
};

const ModalButton = ({ label, bg, hbg, mesg }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className='mt-3'>
            <button onClick={openModal} className={`${bg} ${hbg} text-white font-bold py-2 px-4 rounded`}>{label}</button>
            <div className='relative'>
                <Modal isOpen={isOpen} onClose={closeModal}>
                    <h2 className="text-xl font-bold mb-4">{label}</h2>
                    <p>{mesg}</p>
                </Modal>
            </div>

        </div >
    );
};

export default ModalButton;
