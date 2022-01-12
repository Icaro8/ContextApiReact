import React from "react";
import {Routes, Route} from 'react-router-dom';
import {ContextGitHub} from './Contexts/GtiHubContext'

import { HomePage } from "./Pages/Home";

export function RoutesAplication(){
  return(   
    <ContextGitHub>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </ContextGitHub>
  )
}
