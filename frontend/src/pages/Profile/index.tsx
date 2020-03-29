import React from 'react';
import './styles.scss';
import { FiPower, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/svg/logo.svg';
import IncidentBox from "../../components/IncidentBox";

export default function Profile() {
    return(
     <div className="profile-container">
         <nav>
             <div className="box-left">
                 <img src={logoImg} alt={'Be the Hero'}/>
                 <p>Bem vinda,  APAD</p>
             </div>
             <div className="box-right">
                 <Link to="/register-incident" className="button" id="new-incident" >
                     <FiPlus size={24} color="#fff" />
                 </Link>
                 <Link to="/"  id="logout">
                     <FiPower size={24} color="#E02041" />
                 </Link>
             </div>
         </nav>
         <section className="profile-section">
             <h1>Casos cadastrados</h1>
             <div className="profile-content-body">
                <IncidentBox
                    id={11}
                    title={'Cadelinha atropelada'}
                    description={'A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.'}
                    value={120.00}
                />
                 <IncidentBox
                     id={12}
                     title={'Cadelinha atropelada'}
                     description={'A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.'}
                     value={120.00}
                 />
                 <IncidentBox
                     id={13}
                     title={'Cadelinha atropelada'}
                     description={'A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.'}
                     value={120.00}
                 />
                 <IncidentBox
                     id={14}
                     title={'Cadelinha atropelada'}
                     description={'A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.'}
                     value={120.00}
                 />
             </div>
         </section>
     </div>
    );
}