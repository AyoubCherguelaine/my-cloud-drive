"use client"

import { FC } from "react";
import "../../css/styling.css"
import UploadFileGrid from "./upload_file_grid"

const SideBar: FC = () =>{

    const onFileUpload = (file: File)=>{
        console.log(file)
    }

    return (

        <div className="side-bar h-screen-main">
            <div>
                <div className="py-8 grid justify-items-center">
    
                    <UploadFileGrid/>

                    <div className="py-2 ">
                        
                    </div>

                </div>
            </div>
        </div>

    )

}

export default SideBar;

