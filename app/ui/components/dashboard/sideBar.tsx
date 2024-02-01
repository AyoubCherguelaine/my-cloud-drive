"use client"

import { Dispatch, FC, SetStateAction } from "react";
import "../../css/styling.css"
import UploadFileGrid from "./nav/upload_file_grid"

import Button from "./nav/button";

import { useState, useEffect } from "react";


interface SideBarProps {
    dashboadType:string;
    setDashboadType: Dispatch<SetStateAction<string>>;
}

const SideBar: FC<SideBarProps> = ({dashboadType,setDashboadType}) =>{


    const onFileUpload = (file: File)=>{
        console.log(file)
    }

    return (

        <div className="side-bar h-screen-main">
            <div>
                <div className="py-8 grid justify-items-center">
    
                    <UploadFileGrid/>

                    <div className="py-8 grid">
                        <Button Name="Home" setClickedButon={setDashboadType} buttonSelected={dashboadType}/>
                        <Button Name="Shared File" setClickedButon={setDashboadType} buttonSelected={dashboadType}/>
                        <Button Name="Recent" setClickedButon={setDashboadType} buttonSelected={dashboadType}/>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default SideBar;

