import styled from "styled-components";

export const FooterStyle = styled.footer`

    background-color: var(--black1);
    height: 588px;
    display: flex;
    margin-top: 64px;

    .logo-socialMedia {
        display: flex;
        flex-direction: column;
        margin: 50px 40px 0 56px;

        img {
            height: 72px;
            width: 245px;
            margin-bottom: 32px;
            cursor: pointer;
        }

        span {
            color: var(--white);
            font-size: 14px;
            text-align: center;
            margin-top: 32px;
        }
    }

    .institutional {
        margin: 64px 22px 0;

        h4 {
            color: var(--white);
            margin-bottom: 20px;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 14px;

            li {
                color: var(--gray2);
                cursor: pointer;
            }

            li:hover {
                color: gray;
                transition: 1s;
            }
        }
    }

    .payments {
        display: flex;
        margin-top: 45px;

        h4 {
            padding-bottom: 10px;
        }

        .payments-forms {
            width: 202px;

            .payments-list {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 8px;
                cursor: pointer;
            }
        }

        .security {
            position: relative;
            width: 0;
            left: 45%;

            ul {
                display: flex;
                flex-direction: row;

                li {
                    cursor: pointer;
                }
            }
        }
    }

    .signature {
        border: solid var(--dark3);
        border-top-width: 0px;
        border-right-width: 0px;
        border-bottom-width: 0px;
        border-left-width: 1px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 353px;

        h2 {
            text-align: center;
            margin-top: 64px;
            padding: 0 20%;
        }

        p {
            color: var(--gray1);
            text-align: center;
            margin-top: 16px;
            margin-bottom: 32px;
            width: 260px;
        }

        input {
            border: 2px solid var(--dark3);
            height: 56px;
            width: 266px;
            border-radius: 4px;
            padding: 13px 16px 13px 16px;
            margin-top: 16px;
            color: var(--white);
        }

        button {
            border: none;
            height: 40px;
            width: 138px;
            border-radius: 4px;
            padding: 14px 24px 14px 24px;
            margin-top: 24px;
        }
    }
`

export const CoFooterStyle = styled.div`

    background-color: var(--black1);
    border: 1px solid var(--dark3);
    border-top-width: 1px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    display: flex;
    justify-content: space-between;
    height: 88px;
    align-items: center;

    span {
        color: var(--white);
        margin-left: 56px;
    }

    .wicomm {
        margin-right: 40px;
    }

    .vtex {
        margin-right: 57px;
    }

`