"use client"
import FileMain from "../ui/components/files/file_main"
import SideBar from "../ui/components/dashboard/sideBar"


import { useState, useEffect, FC } from "react";

const Dashboard: FC = ()=>{

    const [dashboadType,setDashboadType] = useState<string>("Home")
    
    let files_list = ['file1.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf']
    
    return (
        <main className="h-screen-main">
            <div>Dashboard</div>
            <div className="main-dashboard">
                <div className="w-1/6" >
                    <SideBar setDashboadType={setDashboadType} dashboadType={dashboadType}/>
                </div>
                
                <div className="w-5/6" >
                    <div>{dashboadType}</div>
                    <FileMain type="list" files={files_list}/>
                </div>
            </div>
        </main>

    
    )
}

export default Dashboard;