import logo from "../../assets/Logo.svg"
import truck from "../../assets/Truck.svg"
import lupa from "../../assets/Lupa.svg"
import user from "../../assets/User.svg"
import star from "../../assets/Whishlist.svg"
import cart from "../../assets/ShoppingCart.svg"
import { HeaderStyle } from "./style"

export const Header = () => {

    return (
        <HeaderStyle>
            <div>
                <a href="">FALE CONOSCO</a>
                <p> <img src={truck} alt="caminhão" />  FRETE GRÁTIS A PARTIR DE R$ 199,90 PARA TODO BRASIL</p>
                <a href="https://blog.blackskullusa.com.br/">BLOG.BLACKSKULL</a>
            </div>
            <nav>
                <img className="logo" src={logo} alt="logo marca black skull" />
                <ul>
                    <li>CATEGORIAS</li>
                    <li>VESTUARIO</li>
                    <li>OBJETIVOS</li>
                    <li>PROMOÇÕES</li>
                    <li>ATLETAS</li>
                    <li>ASSINATURA</li>
                </ul>
                <form action="">
                    <input type="text" placeholder="Buscar" />
                    <img src={lupa} alt="" />
                </form>
                <div className="menu-buttons">
                    <img src={user} alt="" />
                    <img src={star} alt="" />
                    <img src={cart} alt="" />
                </div>
            </nav>
        </HeaderStyle>
    )
}