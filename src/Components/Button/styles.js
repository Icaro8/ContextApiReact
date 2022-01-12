import styled from "styled-components";

export const Container = styled.button`
  padding: 10px;
  border: none;
  background-color: #ffff;

  box-shadow: 2px 2px 5px rgba(0,0,0, 0.5);
  border-radius: 5px;

  height: 50px;

  cursor:pointer;
  transition: filter .2s;
  :hover {
    filter:brightness(.95);
    transform: scale(1.1);
    transition: linear .2s;
  }
  a{
    text-decoration: none;
    color: var(--text_color);
  }
`;