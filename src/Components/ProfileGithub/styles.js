import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap: 15px;
  @media (max-width: 1035px){
    width: 100%;
    display:flex;
    justify-content:center;
    div:last-child{
      margin-left: 20px;
    }
    div img{
      width: 350px;
    }
  }
  @media (max-width:700px){
    width: 100%;
    display:flex;
    align-items:center;
    justify-content: center;
   
    div {
      &:first-child {
       margin-bottom: 20px;
       margin-left: 0; 
      }
    }
  }
  div {
    &:first-child {
      margin-left: 20px; 
    }
    img {
      box-shadow: 5px 5px 5px rgba(0,0,0, .6);

      &:hover {
        transform:scale(1.1);
        transition: linear .2s;
      }
      @media (max-width: 1035px){
        &:hover {
          transform: scale(1.0);
        }
      }
      @media (max-width: 700px){
        &:hover {
          transform: scale(1.0);
        }
      }
    }
  }

 
`;