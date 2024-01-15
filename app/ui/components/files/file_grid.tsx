// components/FileGrid.tsx
"use client";
import { useState, FormEvent } from 'react';
import "../../css/styling.css"
import { FC } from 'react';

interface FileGridProps {
  files: string[];
}

const FileGrid: FC<FileGridProps> = ({ files }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

export default FileGrid;
