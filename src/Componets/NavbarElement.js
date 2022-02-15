import styled from 'styled-components'

export const Container = styled.div`
 width: 100% ;
 height:70px;
 background-color:black;


 `;

export const Wrapper = styled.div`
 width:100%;
 max-width:1300px; 
 height:100%;
 display:felx;
 flex-wrap:wrap;
 justify-content: space-between;
 margin:auto`;

export const LogoContainer = styled.div`
 margin-left:0.5rem;
 display:flex;
 align-items:center;
 font-size:1.2rem;
 font-family:sans-serif;
 
 p{
     &:nth-child(2){
         color: #fff;
     }

     &:nth-child(3){
         font-size: 1.5rem;
         font-weight: 500;
         color: #009ef2;
     }
 }

 svg{
     fill:#009ef2;
     margin-right:0.5rem
 }
 `;

export const Menu = styled.ul`
 height: 100%;
 display: flex;
 justify-content: space-between;
 list-style: none;
 z-index: 1 ;
 

 
 @media screen and (max-width: 960px){
     background-color: black;
     position: absolute;
     top: 70px;
     left: ${({ open }) => (open ? "0" : "-100%")};
     width: 100%;
     height: 90vh;
     justify-content: center;
     flex-direction: column;
     align-items: center;
     transition: 0.5s all ease;
     position: fixed ;
     overflow: hidden;

 }`;

export const MenuIten = styled.li`
 height:100%;
 
 @media screen and (max-width: 960px){
     width: 100%;
     height: 70px;
     display: flex;
     justify-content: center;
     align-items: center;

 }`;

export const MenuItenLink = styled.a`
 display:flex;
 justify-content:center;
 height:100%;
 align-items: center;
 padding:0.5rem 2.5rem;
 color:#76777c;
 font-family:sans-serif;
 font-size:1rem;
 font-weight:300;
 cursor:pointer;
 transition: 0.5s all ease;
 
 &:hover{
     color:#fff;
     background-color:#009ef2;
     trassition:0.5s all ease
 }

 div{
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;

     svg {
         display: none;
         fill: #009ef2;
         margin-right: 0.5rem;
     }
 }
 
 @media screen and (max-width: 960px){
     width: 100%;

     div{
         width: 30%;
         justify-content: left;

         svg{
             display: flex;
        }
     }

 @media screen and (max-width: 888px){
    
   
    div{
         width: 40%;
        justify-content: left;
   
    svg{
        display: flex;
        }
    }

 @media screen and (max-width: 500px){
   
       
        div{
            width: 68%;
            justify-content: left;
       
         svg{
            display: flex;
            }
        }

 @media screen and (max-width: 260px){
  
           
        div{
            width: 100%;
            justify-content: left;
           
        svg{
            display: flex;
            }
        }
 }`;

export const MobileIcon = styled.div`
 display: none;
 
 @media screen and (max-width: 960px){
     display: flex;
     align-items: center;
     cursor: pointer;

     svg {
         fill: #009ef2;
         margin-right: 0.5rem
     }

 }`;
