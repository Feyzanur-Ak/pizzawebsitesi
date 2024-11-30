import React from 'react';
import './components/style.css'; 
import '../index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SiparisFormu from './components/SiparisFormu';
import Hero from './components/Hero';
import Header from './components/Header';
import SiparisOlustur from './components/SiparisOlustur';

function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Switch>
        <Route exact path="/" component={Hero} />
        <Route path="/SiparisFormu" component={SiparisFormu} />
        <Route path="/SiparisOlustur" component={SiparisOlustur} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
