import RegesterForm from "../ui/components/regester_form"
import NavBar from "../ui/components/nav"

export default function regester(){
    return (
        <>
        <nav><NavBar/></nav>
        <main>
            <RegesterForm/>
        </main>
        </>
    )
}