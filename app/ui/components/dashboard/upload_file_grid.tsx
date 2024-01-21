"use client";

// App.tsx (or any other component where you want to use the button and modal)
import React, { FC, useState } from 'react';
import "../../css/styling.css"
import UploadFileModal from '../files/upload_file';

const UploadFileGrid: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleFileUpload = (file: File) => {
    // Handle the file upload logic here
    console.log('Uploading file:', file);
  };

  return (
    <div>
      <button className='upload-file-button w-36 h-8 min-w-30 min-5-6 rounded' onClick={handleOpenModal}>Upload</button>
      <UploadFileModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        onFileUpload={handleFileUpload}
      />
    </div>
  );
};

export default UploadFileGrid;