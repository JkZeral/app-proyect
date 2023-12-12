import styled from "styled-components";

export const Container = styled.div`
    whidth: 100%;
    height: 70px;
    `;


export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;

  p {
    &:nth-child(2) {
      color: #50d656;
    }
   
  }

  p:hover{
    color: white;
    font-size: 1.5rem;
    text-shadow:
      -1px -1px 3px #999,
      0 0 3px darkred,
      2px 2px 2px red,
      3px 3px 3px #555,
      4px 4px 2px #222,
      5px 5px 2px #000;
    cursor: pointer;
  }
  svg {
    width: 50px;
    height: 30px;
    fill: #ffff00;
    margin-right: 0.5rem;
  }
  svg:hover{
    cursor: pointer;
    box-shadow:
    5px 5px 10px black,
    10px 10px 10px rgb(0,0,0, 0.5) inset;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none; 
  @media Screen and (max-width:960px){
    position: absolute;
    top: 70px;
    left: 0;  
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align: items: center;
    transition: 0.5s all ease;
    background-color: #65727c; 
    
  }
`;  

export const MenuItem = styled.li`
  height:100%;
  @media Screen and (max-width:960px){
    width: 100%;
    height: 70px;
    display: flex; 
    justify-content: cen;
    align: items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: white;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;
 
 
  &:hover{
    color: black;
    background-color: yellow;
    transition: 0.5ms all ease;
  }

  @media Screen and (max-width:960px){
    width: 100%;
  }

  `;

  export const MobileIcon = styled.div`
    display: none;


    @media screen and (max-width:960px){
      display: flex;
      align-items: center;
      cursor: pointer;
      svg{
        fill: yellow;
        margin-right: 0.5rem;
      }
    }
  `;