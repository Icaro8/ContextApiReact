import styled from "styled-components";

export const Container = styled.div` 
  width: 100%;
  height: 100%;

  background-image: url("./Assets/fundo.svg");
  background-repeat: no-repeat;
  background-position: right 0 bottom 0;
  @media (max-width: 1281px){
    footer {
      display: none
    }
  }
  @media (max-width: 1035px){
    background-color:#EA80FC;
    footer {
      display:none
    }
  }
  @media (max-width: 768px) {
    background-color:#EA80FC;
    height: 100%;
    footer{
      display:none;
    }
  }
  footer{
    text-align: center;
    margin-top: 70px;
    font-family: var(--font_mont);
    font-size: 12px;
    color: #fff;
  }

 
`;
export const ContainerRow= styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 180px;
  @media (max-width: 1281px){
    display:flex;
    flex-wrap: nowrap;
    gap: 50px;
  }
  @media (max-width: 1035px) {
    background-color:#EA80FC ;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  @media (max-width:700px){
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    background-color:#EA80FC ;
  }
`;