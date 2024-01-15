// use-client.ts
"use client";

// FileMain.tsx
import React, { FC, ReactNode } from 'react';
import "../../css/styling.css";
import FileGrid from './file_grid';
import FileList from './file_list';

interface FileMainProps {
    type: 'list' | 'grid';
    files: string[];
}

const renderFile = (file: string, index: string, Component: React.ComponentType<{ file: string, index: string }>): ReactNode => (
    <Component key={index} file={file} index={index} />
);

const FileMain: FC<FileMainProps> = ({ type, files }): ReactNode => {
    const RenderComponent = type === 'list' ? FileList : FileGrid;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map((file, index) => renderFile(file, String(index), RenderComponent))}
        </div>
    );
};

export default FileMain;
