import React from "react";
import { useContextGithub  } from "../../Contexts/GtiHubContext";

import {Container, Name} from './styles'
import { ProfileImage } from "../ImageProfile";
import {ButtonComponent} from '../Button'

export const Header = () => {
  const {user} = useContextGithub();

  return (
    <Container>
      <div>
        <ProfileImage source={user.avatar_url} title={user.name}/>
        <Name>{user.name}</Name>
      </div>
      <ButtonComponent/>
    </Container>    
  );
}


