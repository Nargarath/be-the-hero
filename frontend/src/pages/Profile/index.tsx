import React from 'react';
import './styles.scss';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/svg/logo.svg';

export default function Profile() {
    return(
     <div className="profile-container">
         <nav>
             <div className="box-left">
                 <img src={logoImg} />
                 <p>Bem vinda,  APAD</p>
             </div>
             <div className="box-right">
                 <Link to="/register-incident" className="button" id="new-incident">
                     Cadastrar novo caso
                 </Link>
                 <Link to="/"  id="logout">
                     <FiPower size={24} color="#E02041" />
                 </Link>
             </div>
         </nav>
     </div>
    );
}