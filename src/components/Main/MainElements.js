import styled from 'styled-components'
export const Container = styled.div`
position:relative;
display:flex;
`
export const TextContainer = styled.div`
position:absolute;
padding:8px 30px;
top: 80px;
width:600px;
display:flex;
 flex-direction: column;
 align-items:center;
 @media screen and (max-width: 760px){
top: 280px;
left:10%
}

`

export const TextH1 = styled.h1`
color:#000;
font-size:48px;
text-align:center;
@media screen and (max-width: 760px){
    font-size:42px;
}
@media screen and (max-width: 480px){
    font-size:32px;
}
`
export const Textp = styled.p`
margin-top:-10px;
color:#CACACA;
font-size:24px;
text-align:center;
@media screen and (max-width: 760px){
    font-size:24px;
}
@media screen and (max-width: 480px){
    font-size:18px;
}
`
export const Button = styled.button`
   padding: 15px 50px;
    border-radius: 10px;
    background-color:#3F3D56;
    outline: none;
    color:#fff;
    font-size:18px;
    border: none;
    cursor: pointer;
`
export const SvgContainer = styled.div`
position:absolute;
height:690px;
width:650px;
padding: 0px 40px;
top:-150px;
right:10px;
z-index:-1000;
@media screen and (max-width: 760px){
   display:none; 
}

`
export const Img = styled.img`
width:100%;
height:100%;
`
