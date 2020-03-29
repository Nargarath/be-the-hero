import React from 'react';
import './styles.scss';
import GenericRegister from "../../components/GenericRegister";

export default function Register() {
    return(
         <GenericRegister
             componentId={'ong-register'}
             title={'Cadastro'}
             description={'Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.'}
             link={
                 {
                     to: '/',
                     text: 'Voltar para o logon '
                 }
             }>
            <input placeholder="ONG's Name" />
            <input type="email" placeholder="email" />
            <input placeholder="whatsapp" />

            <div className="input-group">
                <input placeholder="city" />
                <input placeholder="UF" style={{ width: 73 }} />
            </div>

            <button className="button" type="submit">Cadastrar</button>
         </GenericRegister>
    );
}