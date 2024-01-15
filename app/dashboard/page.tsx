import FileMain from "../ui/components/files/file_main"
import UploadFileGrid from "../ui/components/dashboard/upload_file_grid"
export default function dashboard(){

    const onFileUpload = (file: File)=>{
        
    }
    return (
        <>
        <div>dashboard</div>
        <div>
            <UploadFileGrid/>
        </div>
        <FileMain type="list" files={['file1.pdf', 'file2.pdf', 'file3.pdf', 'file4.pdf']} />
        </>
    )
}