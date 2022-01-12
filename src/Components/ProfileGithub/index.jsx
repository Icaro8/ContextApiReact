import React from 'react';

import {Container} from  './styles'

export const ProfileImages = () => {
  return (
    <Container>
      <div>
        <img src="http://github-readme-stats.vercel.app/api?username=Icaro8&show_icons=true&theme=ocean_dark&include_all_commits=true&count_private=true&title_color=d81b60" alt="Github Status" width={350}/>
      </div>
      <div>
        <img src="http://github-readme-stats.vercel.app/api/top-langs/?username=Icaro8&layout-compact&langs_count-16&theme=ocean_dark&title_color=d81b60" alt="Github Status" width={200}/>
      </div>
    </Container>
  );
}

