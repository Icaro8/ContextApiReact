import React from 'react';
import {useContextGithub} from '../../Contexts/GtiHubContext'

import {Container,ListItem,RepositoryIcon,Title,Language,ContanerColumn } from './styles'

export const ListRepositories = () => {
  const {repos} = useContextGithub();

  console.log(repos)
  return (
    <ContanerColumn>
      <h3>Repositórios no Github</h3>
        <Container>
        {repos?.map(repositorie => {
          return(
            <ListItem key={repositorie.id} title={repositorie.description}>
              <div><RepositoryIcon/></div>
              <div className='text'>
                <Title><a href={repositorie.html_url} target="_blank">{repositorie.name}</a></Title>
              </div>
              <div>
                <Language>{repositorie.language}</Language>
              </div>
            </ListItem>
          )
        })}
      </Container>
    </ContanerColumn>
  );
}

