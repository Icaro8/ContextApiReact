import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import { RoutesAplication } from './routes'
import GlobalStyles  from './GlobalStyles/StylesGlobal'

ReactDOM.render(
    <BrowserRouter>
    <GlobalStyles/>
      <RoutesAplication/>
    </BrowserRouter>,
  document.getElementById('root')
);
