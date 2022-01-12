import React from 'react';
import { ProfileImages } from '../ProfileGithub';

import { Container,Title,ToolsTable } from './styles'

export const WorkingTools = () => {
  return (
    <Container>
        <div>
          <Title>Ferramentas de desenvolvimento</Title>
          <ToolsTable>
            <div className='html' title='HTML5'></div>
            <div className='css' title='CSS'></div>
            <div className='js' title='JavaScript'></div>
            <div className='react' title='ReactJS'></div>
            <div className='figma' title='Figma'></div>
          </ToolsTable>
        </div>
        <ProfileImages/>
    </Container>
  );
}

