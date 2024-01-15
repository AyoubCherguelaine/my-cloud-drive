"use client";

// UploadFileModal.tsx
import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import Modal from 'react-modal';
import "../../css/styling.css";

interface UploadFileModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onFileUpload: (file: File) => void;
}

const UploadFileModal: FC<UploadFileModalProps> = ({
  isOpen,
  onRequestClose,
  onFileUpload,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file);
  };

  const handleUpload = (event: FormEvent) => {
    event.preventDefault();
    if (selectedFile) {
      onFileUpload(selectedFile);
      setSelectedFile(null);
   
      onRequestClose();
    }
  };

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Upload File"
    className="popup-upload bg-white p-8 rounded-md flex items-center justify-center"
  >
    <form onSubmit={handleUpload} className="form-upload">
      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        className="file-input border border-gray-300 p-2 rounded-md"
      />
      <button type="submit" className="upload-button bg-blue-500 text-white px-4 py-2 rounded-md">
        Upload
      </button>
    </form>
  </Modal>
  );
};

export default UploadFileModal;