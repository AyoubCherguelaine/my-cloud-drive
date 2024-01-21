import FileMain from "../ui/components/files/file_main"
import SideBar from "../ui/components/dashboard/nav_bar"

export default function dashboard(){

    
    let files_list = ['file1.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf']
    
    return (
        <>
            <div>Dashboard</div>
            <div className="main-dashboard">
                <div className="w-1/6" >
                    <SideBar />
                </div>
                
                <div className="w-5/6" >
                    <FileMain type="list" files={files_list}/>
                </div>
            </div>
        </>

    
    )
}

{/* <div>
            <UploadFileGrid/>
        </div> */}