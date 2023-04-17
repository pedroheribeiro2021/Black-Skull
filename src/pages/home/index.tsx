import { HomeStyle } from "./styles"
import text from "../../assets/Text.svg"
import product1 from "../../assets/Product1.svg"
import product2 from "../../assets/Product2.svg"
import starCard from "../../assets/Star-card.svg"
import shoppingCart from "../../assets/ShoppingCart-cart.svg"
import team1 from "../../assets/Team1.svg"
import team2 from "../../assets/Team2.svg"
import team3 from "../../assets/Team3.svg"
import blog1 from "../../assets/Blog1.svg"
import blog2 from "../../assets/Blog2.svg"
import blog3 from "../../assets/Blog3.svg"
import objective1 from "../../assets/Objective1.svg"
import objective2 from "../../assets/Objective2.svg"
import objective3 from "../../assets/Objective3.svg"
import objective4 from "../../assets/Objective4.svg"
import arrowRight from "../../assets/ArrowRight.svg"
import arrowLeft from "../../assets/ArrowLeft.svg"
import packageBox from "../../assets/Package.svg"
import payment from "../../assets/CurrencyCircleDollar.svg"




export const Home = () => {

    return (
        <HomeStyle>
            <section className="principal">
                <div className="apresentation">
                    <h1>
                        AJUDANDO VOCÊ A TER <span>MAIS PERFORMANCE</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    </p>
                    <button className="confirm">
                        CONFIRA
                    </button>
                </div>
                <button className="contact-us">
                    <img src={text} alt="" />
                    Fale Conosco
                </button>
            </section>
            <section className="releases">
                <ul className="categorys">
                    <img src={arrowLeft} alt="" />
                    <li className="category">
                        <div>
                            <img src={product1} alt="PROTEÍNAS" />
                        </div>
                        <span>PROTEÍNAS</span>
                    </li>
                    <li className="category">
                        <div>
                            <img src={product1} alt="PROTEÍNAS" />
                        </div>
                        <span>HIPERCALÓRICOS</span>
                    </li>
                    <li className="category">
                        <div>
                            <img src={product1} alt="PROTEÍNAS" />
                        </div>
                        <span>CREATINA</span>
                    </li>
                    <li className="category">
                        <div>
                            <img src={product1} alt="PROTEÍNAS" />
                        </div>
                        <span>PACKS</span>
                    </li>
                    <li className="category">
                        <div>
                            <img src={product1} alt="PROTEÍNAS" />
                        </div>
                        <span>AMINOÁCIDOS</span>
                    </li>
                    <li className="category">
                        <div>
                            <img src={product1} alt="PROTEÍNAS" />
                        </div>
                        <span>SAÚDE</span>
                    </li>
                    <img src={arrowRight} alt="" />
                </ul>
                <h2>LANÇAMENTOS</h2>
                <ul>
                    <img src={arrowLeft} alt="" />
                    <li className="release">
                        <img src={product2} alt="" />
                        <div>
                            <img src={starCard} alt="favoritar" />
                            <img src={shoppingCart} alt="carrinho de compra" />
                        </div>
                        <h3>
                            WHEY ZERO (COM LACTASE) BLACK SKULL - 900G
                        </h3>
                        <span className="price">R$ 349,90</span>
                        <span className="sub-price">ou 12x de R$ 29,16</span>
                    </li>
                    <li className="release">
                        <img src={product2} alt="" />
                        <div>
                            <img src={starCard} alt="favoritar" />
                            <img src={shoppingCart} alt="carrinho de compra" />
                        </div>
                        <h3>
                            WHEY ZERO (COM LACTASE) BLACK SKULL - 900G
                        </h3>
                        <span className="price">R$ 349,90</span>
                        <span className="sub-price">ou 12x de R$ 29,16</span>
                    </li>
                    <li className="release">
                        <img src={product2} alt="" />
                        <div>
                            <img src={starCard} alt="favoritar" />
                            <img src={shoppingCart} alt="carrinho de compra" />
                        </div>
                        <h3>
                            WHEY ZERO (COM LACTASE) BLACK SKULL - 900G
                        </h3>
                        <span className="price">R$ 349,90</span>
                        <span className="sub-price">ou 12x de R$ 29,16</span>
                    </li>
                    <li className="release">
                        <img src={product2} alt="" />
                        <div>
                            <img src={starCard} alt="favoritar" />
                            <img src={shoppingCart} alt="carrinho de compra" />
                        </div>
                        <h3>
                            WHEY ZERO (COM LACTASE) BLACK SKULL - 900G
                        </h3>
                        <span className="price">R$ 349,90</span>
                        <span className="sub-price">ou 12x de R$ 29,16</span>
                    </li>
                    <img src={arrowRight} alt="" />
                </ul>
            </section>
            <section className="skull-team"> 
                <h2>CONHEÇA A TROPA <span>BLACK SKULL</span></h2>
                <ul>
                    <img src={arrowLeft} alt="" />
                    <img src={team1} alt="" />
                    <img src={team2} alt="" />
                    <img src={team3} alt="" />
                    <img src={arrowRight} alt="" />
                </ul>
                <div>
                    <button>
                        VER TODOS
                    </button>
                </div>
            </section>
            <section className="sales">
                <h2>PROMOÇÕES</h2>
                <ul>
                    <img src={arrowLeft} alt="" />
                    <li className="release">
                        <img src={product2} alt="" />
                        <div>
                            <img src={starCard} alt="favoritar" />
                            <img src={shoppingCart} alt="carrinho de compra" />
                        </div>
                        <h3>
                            WHEY ZERO (COM LACTASE) BLACK SKULL - 900G
                        </h3>
                        <span className="price">R$ 349,90</span>
                        <span className="sub-price">ou 12x de R$ 29,16</span>
                    </li>
                    <li className="release">
                        <img src={product2} alt="" />
                        <div>
                            <img src={starCard} alt="favoritar" />
                            <img src={shoppingCart} alt="carrinho de compra" />
                        </div>
                        <h3>
                            WHEY ZERO (COM LACTASE) BLACK SKULL - 900G
                        </h3>
                        <span className="price">R$ 349,90</span>
                        <span className="sub-price">ou 12x de R$ 29,16</span>
                    </li>
                    <li className="release">
                        <img src={product2} alt="" />
                        <div>
                            <img src={starCard} alt="favoritar" />
                            <img src={shoppingCart} alt="carrinho de compra" />
                        </div>
                        <h3>
                            WHEY ZERO (COM LACTASE) BLACK SKULL - 900G
                        </h3>
                        <span className="price">R$ 349,90</span>
                        <span className="sub-price">ou 12x de R$ 29,16</span>
                    </li>
                    <li className="release">
                        <img src={product2} alt="" />
                        <div>
                            <img src={starCard} alt="favoritar" />
                            <img src={shoppingCart} alt="carrinho de compra" />
                        </div>
                        <h3>
                            WHEY ZERO (COM LACTASE) BLACK SKULL - 900G
                        </h3>
                        <span className="price">R$ 349,90</span>
                        <span className="sub-price">ou 12x de R$ 29,16</span>
                    </li>
                    <img src={arrowRight} alt="" />
                </ul>
            </section>
            <section className="blogs">
                <div className="blogs-header">
                    <h2>CONFIRA O <span>NOSSO BLOG</span></h2>
                    <button>LER TODOS</button>
                </div>
                <ul>
                    <img src={arrowLeft} alt="" />
                    <li className="blog">
                        <img src={blog1} alt="" />
                        <span>03.05.21</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <button>LER MAIS</button>
                    </li>
                    <li className="blog">
                        <img src={blog2} alt="" />
                        <span>03.05.21</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <button>LER MAIS</button>
                    </li>
                    <li className="blog">
                        <img src={blog3} alt="" />
                        <span>03.05.21</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <button>LER MAIS</button>
                    </li>
                    <img src={arrowRight} alt="" />
                </ul>
            </section>
            <section className="objective">
                <h2>OBJETIVOS</h2>
                <ul className="objective-list">
                    <li>
                        <img src={objective1} alt="" />
                    </li>
                    <li>
                        <img src={objective2} alt="" />
                    </li>
                    <li>
                        <img src={objective3} alt="" />
                    </li>
                    <li>
                        <img src={objective4} alt="" />
                    </li>
                </ul>
                <div>
                    <ul className="payments-options">
                        <li>
                            <div>
                                <h3>GARANTA O <span>FRETE GRÁTIS</span></h3>
                                <button>CONSULTE</button>
                            </div>
                            <img src={packageBox} alt="" />
                        </li>                        
                        <li>
                            <div>
                                <h3>GARANTA O <span>FRETE GRÁTIS</span></h3>
                                <button>CONSULTE</button>
                            </div>
                            <img src={payment} alt="" />
                        </li>
                    </ul>
                </div>
                <div className="about">
                    <h3>SOBRE A BLACK SKULL</h3>
                    <p>
                        A Black Skull USA é uma marca de suplementos alimentares com foco em atletas de alta performance. Nossa sede no Brasil está alocada em Embu das Artes – SP, com mais de 12.000 m² de área construída, com alta capacidade produtiva. Nossos produtos trabalham com as melhores matérias-primas do mercado e tem como principal característica maior concentração de insumos, que proporcionam níveis de pureza mais altos e por consequência otimizam a qualidade de nossos produtos.
                    </p>
                </div>
            </section>
        </HomeStyle>
    )
}