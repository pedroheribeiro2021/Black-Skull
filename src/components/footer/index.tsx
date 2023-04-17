import logo from "../../assets/Logo.svg"
import { CoFooterStyle, FooterStyle } from "./style"
import socialMedias from "../../assets/Social-medias.svg"
import paymentForm1 from "../../assets/payments-forms/Group 141.svg"
import paymentForm2 from "../../assets/payments-forms/Group 144.svg"
import paymentForm3 from "../../assets/payments-forms/Group 145.svg"
import paymentForm4 from "../../assets/payments-forms/Group 147.svg"
import paymentForm5 from "../../assets/payments-forms/Group 158.svg"
import paymentForm6 from "../../assets/payments-forms/Group 161.svg"
import paymentForm7 from "../../assets/payments-forms/Group 170.svg"
import paymentForm8 from "../../assets/payments-forms/Group 742.svg"
import paymentForm9 from "../../assets/payments-forms/Group 743.svg"
import security1 from "../../assets/security-certified/image 6.svg"
import security2 from "../../assets/security-certified/image 8.svg"
import wicomm from "../../assets/Wicomm.svg"
import vtex from "../../assets/VTEX.svg"



export const Footer = () => {

    return (
        <>
            <FooterStyle>
                <div className="logo-socialMedia">
                    <img className="logo" src={logo} alt="logo marca black skull"/>
                    <span>Nos siga:</span>
                    <img src={socialMedias} alt="redes sociais" />
                </div>
                <div className="institutional">
                    <h4>BLACKSKULL USA</h4>
                    <ul>
                        <li>Sobre Nós</li>
                        <li>Black Skull é confiável?</li>
                        <li>Atletas Black Skull</li>
                        <li>Nosso Blog</li>
                        <li>Seja um Revendedor</li>
                        <li>Entre em Contato</li>
                    </ul>
                    <div className="payments">
                        <div className="payments-forms">
                            <h4>FORMAS DE PAGAMENTO</h4>
                            <ul className="payments-list">
                                <li>
                                    <img src={paymentForm1} alt="" />
                                </li>
                                <li>
                                    <img src={paymentForm2} alt="" />
                                </li>
                                <li>
                                    <img src={paymentForm3} alt="" />
                                </li>
                                <li>
                                    <img src={paymentForm4} alt="" />
                                </li>
                                <li>
                                    <img src={paymentForm5} alt="" />
                                </li>
                                <li>
                                    <img src={paymentForm6} alt="" />
                                </li>
                                <li>
                                    <img src={paymentForm7} alt="" />
                                </li>
                                <li>
                                    <img src={paymentForm8} alt="" />
                                </li>
                                <li>
                                    <img src={paymentForm9} alt="" />
                                </li>
                            </ul>
                    </div>
                    <div className="security">
                            <h4>SEGURANÇA</h4>
                            <ul>
                                <li>
                                    <img src={security1} alt="" />
                                </li>
                                <li>
                                    <img src={security2} alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                <div className="institutional">
                    <h4>INSTITUCIONAL</h4>
                    <ul>
                        <li>Trocas e Devoluções</li>
                        <li>Política de Entregas</li>
                        <li>Política de Privacidade</li>
                        <li>Política de Cancelamentos</li>
                    </ul>
                </div>
                <div className="institutional">
                    <h4>AFILIADOS</h4>
                    <ul>
                        <li>Programa de Afiliados</li>
                        <li>Desconto para Militares</li>
                        <li>Benefícios para Profissionais da Saúde</li>
                        <li>Benefícios para Profs. de Educação Física</li>
                        <li>Assinaturas</li>
                    </ul>
                </div>
                <div id="signature" className="signature">
                    <h2 className="mix-titles">FIQUE POR <span>DENTRO</span></h2>
                    <p>Inscreva-se e seja o primeiro a saber sobre as novidades, promoções e muito mais!</p>
                    <input type="text"  placeholder="Digite seu nome"/>
                    <input type="email" placeholder="Digite seu e-mail"/>
                    <button>ENVIAR</button>
                </div>
            </FooterStyle>
            <CoFooterStyle>
                <span>Black Skull 2022. Todos os direitos reservados.</span>
                <div>
                    <img className="wicomm" src={wicomm} alt="wicomm" />
                    <img className="vtex" src={vtex} alt="vtex" />
                </div>
            </CoFooterStyle>
        </>
    )
}