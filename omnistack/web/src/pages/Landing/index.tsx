import React, { useState, useEffect } from 'react';
import LogoImg from '../../assets/images/logo.svg'
import landining from '../../assets/images/landing.svg'
import studying from '../../assets/images/icons/study.svg'
import giveClssesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import './styles.css'
import { Link } from 'react-router-dom';
import { api } from './../../services/api';


export default function Landing() {
  const [totalConnections, setTotalCOnnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => setTotalCOnnections(response.data.total))
  },[])
  
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={LogoImg} alt="proffy"/>
          <h2>Sua Plataforma de estudos onlina</h2>
        </div>

        <img src={landining} alt="" className="hero-image"/>
        
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studying} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClssesIcon} alt="Estudar"/>
            dar Aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexoes ja realizadas
          <img src={purpleHeartIcon} alt="Dar Aulas"/>
        </span>
      </div>
    </div>
  )
}