"use client";

// DownloadFile.tsx
import React, { FC } from 'react';
import "../../css/styling.css";

interface DownloadProps {
    file_id: string;
}

const DownloadFile: FC<DownloadProps> = ({ file_id }) => {
    const handleDownload = (event: React.FormEvent) => {
        // Add logic for handling file download here
        event.preventDefault();
        // For example, you can use the file_id to make a request to the server and trigger the download
    };

    return (
        
        <button type="submit" onClick={handleDownload} className="download-button">
            Download File
        </button>
        
    );
};

export default DownloadFile;