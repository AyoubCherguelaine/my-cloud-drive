import FileList from "../ui/components/files/file_list"
import FileGrid from "../ui/components/files/file_grid"
export default function dashboard(){
    return (
        <>
        <div>dashboard</div>
        <FileList files={["!","hh.pdf"]}/>
        <FileGrid files={["!","hh.pdf"]}/>
        </>
    )
}