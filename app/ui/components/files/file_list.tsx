// components/files/file_list.tsx
"use client";
import { useState, FormEvent } from 'react';
import "../../css/styling.css"
import { FC } from 'react';

interface FileListProps {
  file: string;
  index : string;
}

const FileList: FC<FileListProps> = ({ file, index }) => {
  return (
        <div key={index} className="bg-gray-200 p-4 rounded-md">
          {/* Display file details, you can customize this part */}
          <p>{file}</p>
          <p className="text-sm text-gray-500">File Size, Date, etc.</p>
        </div>
  );
};

export default FileList;