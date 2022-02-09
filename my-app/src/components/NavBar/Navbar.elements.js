import styled from "styled-components"; 


export const NavBarContainer = styled.div`
    width: 100%;
    height: 100px;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: #EBEBF2;
 
    
`;

export const NavBarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 992px;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const LogoP = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;
    

`;

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 667px){
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 100px;
        left: ${({click}) => click ? 0 : "-100%"};
        flex-direction: column;
        transition: 0.5s all ease-in;
        background-color: #d1d1dd;
        

    }
`;

export const MenuItem = styled.li`
    height: 100%;
    padding: 0.5rem 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;

    &:hover{
        background-color: #babac7;
        border-bottom: 0.3rem solid #8d9b90;
        transition: 0.4s ease-in;
        border-radius: 10px
    }

    @media screen and (max-width: 667px){
        width: 100%;
        height: 70px;
        

    }
`;

export const MenuItemLink = styled.a`
    text-decoration: none;
    color: black;
`;

export const IconLogoMobile = styled.div`
    display: none;

    @media screen and (max-width: 667px){
        display: flex;
        color: #1f1e1d;
        font_size: 2rem;
        padding-right: 1rem;

    }
`;

export const Select = styled.select`

`;