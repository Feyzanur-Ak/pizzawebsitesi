import React from 'react';
import './components/style.css'; 
import '../index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer'; // Footer bileşenini import edin
import SiparisOlustur from './components/SiparisOlustur';
import SiparisOnay from './components/SiparisOnay';
import MenuSection from './components/MenuSection';
import MenuSection2 from './components/MenuSection2';



function App() {
  return (
    <BrowserRouter>
        <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <>
              <Hero />
              <MenuSection />
              <MenuSection2 />
            </>
          )}
        />
        <Route path="/MenuSection" component={MenuSection} />
        <Route path="/MenuSection2" component={MenuSection2} />
        <Route path="/SiparisOlustur" component={SiparisOlustur} />
        <Route path="/SiparisOnay" component={SiparisOnay} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
