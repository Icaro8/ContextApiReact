import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  & >div {
    flex-grow: 1;
  }
  @media (max-width: 1035px){
    display:flex;
    flex-direction: column;
    align-items:center;
    margin-top: 20px;
  }
  @media (max-width: 768px){  
    display:flex;
    flex-direction: column;
    align-items:center;
    margin-top: 20px;
  }

`;
export const Title = styled.h3`
  margin-left: 30px;
  color: var(--text_color);

  padding: 5px;
  font-family: var(--font_mont);
  @media (max-width: 1035px){
    color: #ffff;
  }
  @media (max-width: 768px){  
    color: #ffff;
  }
`;

export const ToolsTable = styled.div`

  display:flex; 
  margin-top: 10px;

  > div{
    width: 64px;
    height: 64px;
  }
  
  .html{
    background-image: url('./Assets/html.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 80px;
    height: 80px;
    :hover{
      transform:scale(1.5);
      transition: linear .2s;  
    }
  }
  .css{
    background-image: url('./Assets/css.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 80px;
    height: 80px;
    :hover{
      transform:scale(1.5);
      transition: linear .2s;
    }
  }
  .js{
    background-image: url('./Assets/js.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 80px;
    height: 80px;
    :hover{
      transform:scale(1.5);
      transition: linear .2s;
    }
  }
  .react{
    background-image: url('./Assets/react.png');
    background-repeat: no-repeat;
    background-size: cover;
    :hover{
      transform:scale(1.5);
      transition: linear .2s;
    }
  }
  .figma{
    background-image: url('./Assets/figma.png');
    background-repeat: no-repeat;
    background-size: cover;
    :hover{
      transform:scale(1.5);
      transition: linear .2s;
    }
  }
  @media (min-width: 700px){
    margin:auto;
    display:flex;
    justify-content:center;
  }
`;  