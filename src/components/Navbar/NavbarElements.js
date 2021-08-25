import styled from 'styled-components'

export const Nav = styled.nav`
height : 80px;
margin-top: -80px:
display: flex;
justify-content:center;
align-items: center;
font-size: 1rem;
position: sticky;
z-index:10;
@media screen and (max-width:960 px){
    transition: 0.8s all ease;
}
`
export const NavbarContainer = styled.div`
display : flex;
justify-content: space-between;
height: 80px;
z-index:1;
width:100%;
padding:0 24px;
max-width:1100px;
`
export const NavLogo = styled.a`

justify-self:flex-start;
cursor: pointer;
font-size:1.5rem;
display: flex;
align-items:center;
margin-left:50px;
padding: 0 23px;
font-weight: bold;
text-decoration:none;
color:#3F3D56;
`

export const NavMenu = styled.ul`
display:flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;
@media screen and (max-width:768px){
    display: none;
}
`
export const NavItem = styled.li`
height:80px;
color:#000;
display:flex;
align-items:center;
text-decoration:none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-weight:500;
&:hover{
    transition:all 0.2s ease-in-out;
       border-bottom: 2px solid  #FFD8A1;
       
}
`
export const MobileIcon = styled.div`
display:none;
@media screen and (max-width:768px){
    display: block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%,60%);
    font-size:1.8rem;
    cursor: pointer;
    color:#000;
}
`