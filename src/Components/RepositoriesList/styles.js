import styled from "styled-components";

import {RiGitRepositoryFill} from 'react-icons/ri'

export const ContanerColumn= styled.div`
  display:flex;
  flex-direction: column;


  > h3{
    margin-top: -15px;
    font-family:var(--font_mont);
    text-align:center;
    padding: 10px;
    color:#cfd8dc
  }
  & > h3::after {
      content:'';
      display:block;
      width: 250px;
      height: 3px;
      margin:auto;
      background-color: #cfd8dc;
      border-radius: 10px;
  }
  @media (max-width: 1035px){
    display:flex;
    justify-content:center;
    margin-bottom: 50px;
  }
  @media (max-width:700px){
    display:flex;
    justify-content:center;
    margin-bottom: 50px;
  }
`;

export const Container= styled.ul`
  list-style-type: none;

  height: 400px;
  width: 500px;
  overflow-y:auto;
  padding: 10px;

  font-family:var(--font_mont);

  ::-webkit-scrollbar{
    width: 10px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color:#F1F7F9;    
    border-radius: 20px;      
  }
  @media (max-width:700px){
    width:100%;
    display:flex;
    flex-direction:column;
  }
`;

export const ListItem=styled.li`
  display: flex;
  justify-content:space-between;
  align-items:center;
  padding: 15px;
  .text{  
    width: 50%;
    flex-grow: 1;
  }
  
  @media (max-width:700px){
    margin:auto;
    width:100%;
    color:#Fff;
    padding: 10px;
  }

`;

export const RepositoryIcon =styled(RiGitRepositoryFill)`
  color:#cfd8dc;
`;

export const Title=styled.h3`
  text-align:left;
  margin-left: 80px;

  a{
    color:#cfd8dc;
  }
  @media (max-width:700px){
   color: #fff;
  }
`;

export const Language = styled.strong`
  color:#cfd8dc;
  font-family: var(--fonnt_fira);
    
  @media (max-width:700px){
    display:none;
  }

`;
