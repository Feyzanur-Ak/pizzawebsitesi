import React from 'react';
import './components/style.css'; 
import '../index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SiparisFormu from './components/SiparisFormu';
import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer'; // Footer bileşenini import edin
import SiparisOlustur from './components/SiparisOlustur';
import SiparisOnay from './components/SiparisOnay';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route path="/SiparisFormu" component={SiparisFormu} />
        <Route path="/SiparisOlustur" component={SiparisOlustur} />
        <Route path="/SiparisOnay" component={SiparisOnay} />
      </Switch>
      <Footer/> 
    </BrowserRouter>
  );
}

export default App;
