import styled from "styled-components";

export const Container = styled.header`

  padding: 30px 50px;
  display: flex;
  justify-content:space-between;
  align-items:center; 
  font-family: var(--font_mont);
  > div {
    display: flex;
    align-items: center;

    gap: 10px;

    @media (max-width: 768px) {
      display: flex;
      justify-content:space-around;
    }
  }
  @media (max-width: 768px) {
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    padding: 0;
    width: 100%;
    gap: 15px;
    
  
  }  
`;

export const Name = styled.h2`
  color:var(--text_color);
  @media (max-width: 1035px){
    color:#eeee;
  }
  @media (max-width: 768px) {
    color:#eeee;
  }  
`;