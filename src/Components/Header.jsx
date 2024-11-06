import global from './Header.module.css'
import ignitelogo from '../assets/ignite_logo.svg'

console.log(ignitelogo)
export function Header(){
    return(
        <header className={global.header}>
            <img src={ignitelogo} alt="Logo" />
        </header>
    )
}