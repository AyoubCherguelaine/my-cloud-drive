"use client";

import { useState, FormEvent } from 'react';
import "../../css/styling.css"
import { FC } from 'react';

import FileGrid from './file_grid';
import FileList from './file_list';

interface FileMainProps {
    type: 'list'|'grid';
    files: string[];
}

const list_main = (files:string[])=>{
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
    )
}

const grid_main = (files:string[])=>{
    
}

const FileMain : FC<FileMainProps>=({type,files})=>{
    return (
        <>
        
        </>
    )
}

export default FileMain
