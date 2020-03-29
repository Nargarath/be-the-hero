import React from 'react';
import './styles.scss';
import GenericRegister from "../../components/GenericRegister";
import { Link } from 'react-router-dom';

export default function IncidentRegister() {
    return(
         <GenericRegister
             componentId={'incident-register'}
             title={'Cadastrar novo caso'}
             description={'Descreva o caso detalhadamente para encontrar um herói para resolver isso.'}
             link={
                 {
                     to: '/profile',
                     text: 'Voltar para home'
                 }
             }
         >
            <input type="text" placeholder="Título do caso" />
            <textarea placeholder="Descrição"></textarea>
            <input placeholder="Valor em reais" />

            <div className="button-group">
                <Link to={'/profile'} className="button outline" style={{ width: 280 }}>Cancelar</Link>
                <button className="button" type="submit">Cadastrar</button>
            </div>


         </GenericRegister>
    );
}