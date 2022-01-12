import React from 'react';
import { Header } from '../../Components/Header';
import { WorkingTools } from '../../Components/ProfileWork';
import {ListRepositories} from '../../Components/RepositoriesList'
import {Container,ContainerRow} from './styles';
 
export const HomePage = () => {
  return (
    <Container>
      <Header/>
      <ContainerRow>
       <WorkingTools/>
       <ListRepositories/>
      </ContainerRow>
      <footer>
        <strong>&copy;Todos os diretos reservados</strong>
      </footer>
    </Container>   
  );
}

