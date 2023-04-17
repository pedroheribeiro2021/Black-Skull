import styled from "styled-components";

export const HeaderStyle = styled.header`

    /* display: flex; */
    width: 100%;
    position: fixed;

    img {
        cursor: pointer;
    }

    div {
            height: 32px;
            background-color: var(--dark1);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 56px;

        a {
            color: var(--orange1);
        }

        p {
            color: var(--gray2);
            display: flex;
            gap: 10px;
        }
    }

    nav {
        background-color: var(--black1);
        display: flex;
        align-items: center;
        /* justify-content: space-evenly; */
        /* gap: 50px; */

        .logo {
            width: 240px;
            height: 50px;
            padding-left: 30px;
            margin-right: 32px;
        }

        ul {
            display: flex;
            width: 620px;

            li {
                color: var(--gray1);
                width: 103px;
                height: 72px;
                display: flex;
                align-items: center;
                /* gap: 55px; */
            }
        }

        form {
            background-color: var(--dark1);
            display: flex;
            align-items: center;
            border: 2px solid var(--dark3);
            border-radius: 4px;
            height: 40px;
            margin-left: 16px;

            input {
                border: none;
                height: 85%;
                width: 83%;
                padding-left: 5px;
            }

            img {
                width: 24px;
                height: 24px;
            }
        }

        .menu-buttons {
            background-color: var(--black1);
            display: flex;
            gap: 20px;


        }

    }

`