import React from 'react';

import {Container,CredentialsContainer} from './styles'

export const ProfileImage = ( { source, title } ) => {
  return (
    <Container title={title}>
      <CredentialsContainer src={source}/>
    </Container>
  )
}

