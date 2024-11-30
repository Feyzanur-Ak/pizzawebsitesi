import React from 'react'
import { Link } from 'react-router-dom'
import Secenekler from './Secenekler'



const SiparisFormu = () => {
  return (
    <>
    <header>
      <h1>Teknolojik Yemekler</h1>
      <Link to="/SiparisOnayi">Sipariş Onayı</Link>
      <Secenekler/>
    </header>

    </>
  )
}

export default SiparisFormu
