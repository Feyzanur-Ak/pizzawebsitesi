import React from 'react';
import AnaSayfa from '../components/AnaSayfa'; 
import '../components/AnaSayfa.css'; 
import '../index.css';
import SiparisOnayi from '../components/SiparisOnayi';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SiparisFormu from '../components/SiparisFormu';

function App() {
  return (
   <BrowserRouter>
   <Switch>
        <Route exact path="/" component={AnaSayfa} />
        <Route path="/SiparisFormu" component={SiparisFormu} />
        <Route path="/SiparisOnayi" component={SiparisOnayi} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
