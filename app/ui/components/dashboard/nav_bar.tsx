"use client"

import { FC } from "react";
import "../../css/styling.css"
import UploadFileGrid from "./upload_file_grid"

const SideBar: FC = () =>{

    const onFileUpload = (file: File)=>{
        console.log(file)
    }

    const onHomeClick = ()=>{

    }

    const onRecentClick = ()=>{

    }

    const onSharedFileClick = ()=>{

    }

    return (

        <div className="side-bar h-screen-main">
            <div>
                <div className="py-8 grid justify-items-center">
    
                    <UploadFileGrid/>

                    <div className="py-8 grid">
                        <button className="row columns-1 w-44 h-7 side-button" onClick={onHomeClick} >Home</button>
                        <button className="row columns-1 w-44 h-7 side-button" onClick={onSharedFileClick}>Shared File</button>
                        <button className="row columns-1 w-44 h-7 side-button" onClick={onRecentClick}>Recent</button>

                    </div>

                    <div className="py8 grid chat-side-bar">
                        
                    </div>

                </div>
            </div>
        </div>

    )

}

export default SideBar;

