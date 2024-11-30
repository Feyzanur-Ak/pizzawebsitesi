import React from 'react'
import Menu from '../src/yemekMenu.js'
import Secenek from './Secenek';

const Secenekler = () => {

    const secenekler = Menu.map((menu) => (
      <Secenek key={menu.id} menu={menu} />
    ));
  
    return <div>{secenekler}</div>;
  };
  
  export default Secenekler;
