import React from 'react'


const Secenek = ({menu}) => {
const{name,image,price, subscribe, ratio}=menu;
  return (
    <div className='Menu-Container'> 
        <div className='Pizza-Container'>
        <img src={image}></img>
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{subscribe}</p>
        <p>{ratio}</p>
        </div>
    </div>
  )
}

export default Secenek
