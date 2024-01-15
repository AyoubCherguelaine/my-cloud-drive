// components/files/file_list.tsx
"use client";
import { useState, FormEvent } from 'react';
import "../../css/styling.css"
import { FC } from 'react';

interface FileListProps {
  files: string[];
}

const FileList: FC<FileListProps> = ({ files }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {files.map((file, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-md">
          {/* Display file details, you can customize this part */}
          <p>{file}</p>
          <p className="text-sm text-gray-500">File Size, Date, etc.</p>
        </div>
      ))}
    </div>
  );
};

export default FileList;