import LoginForm from "../ui/components/login_form"
import NavBar from "../ui/components/nav"

export default function login(){
    return (
        <>
        <nav><NavBar/></nav>
        <main>
            <LoginForm/>
        </main>
        </>
    )
}