import FileMain from "../ui/components/files/file_main"

export default function dashboard(){
    return (
        <>
        <div>dashboard</div>
        <FileMain type="list" files={['file1.pdf', 'file2.pdf']} />
        </>
    )
}