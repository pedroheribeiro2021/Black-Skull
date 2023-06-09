import styled from "styled-components";
import background1 from "../../assets/Background1.svg"
import backgroundBlog from "../../assets/Background-blog.svg"
import backgroundTeam from "../../assets/Background-team.svg"
import backgroudPayment from "../../assets/Background-payment.svg"
import backgroundSkull from "../../assets/Background-skull.svg"

export const HomeStyle = styled.main`

    padding-top: 100px;

    .principal {
        background-image: url(${background1});
        background-size: cover;
        height: 548px;

        h1 {
            font-size: 56px;
            max-width: 550px;
            padding-bottom: 16px;
        }

        p {
            font-size: 16px;
            font-weight: 400;
            color: var(--white);
            max-height: 60px;
            max-width: 349px;
            margin-bottom: 32px;
        }

        .confirm {
            height: 48px;
            width: 120px;
            border-radius: 4px;
            border: none;
            padding: 14px 24px;
        }

        .apresentation {
            padding: 130px 0 0 155px;
        }

        .contact-us {
            border: 1px solid var(--dark3);
            border-radius: 6px 6px 0px 6px;
            width: 124px;
            height: 40px;
            font-weight: 700;
            font-size: 14px;
            position: absolute;
            left: 90%;
            top: 80%;

            img {
                padding-right: 3px;
            }
        }
    }

    .releases {

        padding: 56px 40px 95px;

        h2 {
            text-align: center;
            margin-bottom: 24px;
        }

        ul {
            gap: 20px;
        }
    }

    .categorys {
        margin-bottom: 65px;
    }

    ul {
        display: flex;

        li {
            display: flex;       
        }

        .category {
            cursor: pointer;
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
            max-width: 178px;
            height: 210px;

            div {
                background: #F1F1F1;
                border-radius: 50%;
                
                img {
                    padding: 35px;
                }
            }

            span {
                font-size: 12px;
                font-weight: 700;
                width: 100%;
                text-align: center;
            }
        }
    }

    .release {
            cursor: pointer;
            flex-wrap: wrap;
            width: 277px;
            height: 341px;
            border: 1px solid #F1F1F1;
            border-radius: 4px;
            padding-left: 24px;

            img {
                margin: 0 auto;
            }

            div {
                display: flex;
                flex-direction: column;
                gap: 18px;
                margin-right: 16px;
                margin-top: 20px;

                img {
                    height: 24px;
                    width: 24px;
                }
            }

            h3 {
                width: 70%;
                font-size: 12px;
                font-weight: 600;
                text-align: left;
                color: var(--black1);
            }
        }

    .price {
            width: 100%;
            font-size: 22px;
            font-weight: 700;
            text-align: left;
            color: var(--orange1);
    }

    .sub-price {
            width: 100%;
            margin-bottom: 5%;
            font-size: 14px;
            font-weight: 400;
            text-align: left;
            color: var(--dark3);
    }

    .skull-team {
            background-image: url(${backgroundTeam});
            height: 461px;
            margin-bottom: 88px;
            
            h2 {
                font-size: 40px;
                margin-left: 19%;
                padding-top: 20px;
            }

            ul {
                justify-content: center;
                align-items: center;
                align-content: center;
                gap: 20px;
                margin-top: 30px;

                li {
                    cursor: pointer;
                    border: 1px solid transparent;
                }

                li:hover {
                    border: 1px solid white;
                }
            }

            div {
                text-align: center;

                button {
                    width: 139px;
                    height: 48px;
                    border-radius: 4px;
                    font-weight: 700;
                    font-size: 16px;
                    border: none;
                    margin-top: 45px;
                }
            }
    }

    .sales {
        padding-left: 40px;

        ul {
            gap: 20px;
        }

        h2 {
            font-family: 'Roboto Condensed', sans-serif;
            text-align: center;
            font-size: 32px;
            font-style: italic;
            font-weight: 700;
            margin-bottom: 24px;
        }
    }
        
        .blogs {
            background-image: url(${backgroundBlog});
            height: 540px;

            button {
                border-radius: 4px;
                border: none;
                padding: 14px 24px 14px 24px;
            }

            ul {

                .left {
                    margin: 0 0 0 15px;
                }

                li {
                    margin: 0 10px;
                }
            }
        }

        .blogs-header {
            display: flex;
            justify-content: space-between;
            padding: 40px 90px 24px 56px;
        }

        .blog {
            cursor: pointer;
            flex-direction: column;
            background-color: var(--dark1);
            border: 1px solid var(--dark3);

            img {
                margin-bottom: 15px;
            }

            span {
                color: var(--gray2);
                margin-bottom: 16px;
                margin-left: 24px;
                font-size: 14px;
            }

            p {
                color: var(--white);
                width: 60%;
                margin-bottom: 24px;
                margin-left: 24px;
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
            }

            button {
                width: 30%;
                margin-bottom: 24px;
                margin-left: 24px;
                font-weight: 700;
                font-size: 14px;
            }
        }

        .objective {

            h2 {
                text-align: center;
                font-family: 'Roboto Condensed', sans-serif;
                font-size: 32px;
                font-style: italic;
                font-weight: 700;
                margin-top: 64px;
                margin-bottom: 24px;
            }

            .objective-list {
                gap: 20px;
                justify-content: center;
                align-items: center;
                align-content: center;
            }
        }

        .payments-options {
            justify-content: center;
            align-items: center;
            align-content: center;
            gap: 20px;
            margin-top: 64px;

            li {
                background-image: url(${backgroudPayment});
                background-size: cover;
                width: 475px;

                div {
                    /* width: 207px; */
                    padding: 40px;

                        h3 {
                        padding-bottom: 24px;
                        font-family: 'Roboto Condensed', sans-serif;
                        font-size: 32px;
                        font-style: italic;
                        font-weight: 700;
                        color: var(--white);

                        span {
                            color: var(--orange1);
                            font-family: 'Roboto Condensed', sans-serif;
                            font-weight: 700;
                        }
                    }
                }

                img {
                    width: 150px;
                    margin-left: 10%;
                    margin-top: 84px;
                    padding-bottom: 34px;
                }

                button {
                    border-radius: 4px;
                    border: none;
                    padding: 14px 24px 14px 24px;
                }
            }
        }

        .about {
            background-image: url(${backgroundSkull});
            background-repeat: no-repeat;
            margin-top: 64px;
            background-position: right 50% bottom 100%;
            text-align: center;

            h3 {
                font-family: 'Roboto Condensed', sans-serif;
                font-size: 32px;
                font-style: italic;
                font-weight: 700;
                color: var(--dark1);
                padding-top: 91px;
                margin-bottom: 24px;
            }

            p {
                font-size: 16px;
                font-weight: 400;
                width: 643px;
                margin: 0 auto;
                /* text-align: center; */
            }
        }

`
