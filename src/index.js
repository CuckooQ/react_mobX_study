import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { Provider } from 'mobx-react';
import SectionStore from './stores/sectionStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const sections = new SectionStore(); 

ReactDOM.render(
  <Provider sections={sections}>
    <MuiThemeProvider>
    <App />
    </MuiThemeProvider>
  </Provider>, 
  document.getElementById('root')
);
