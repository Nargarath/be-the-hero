import React, {useState} from 'react';
import './styles.scss';
import GenericRegister from "../../components/GenericRegister";
import { Link } from 'react-router-dom';
import api from "../../services/api";
import { useHistory } from 'react-router-dom';

export default function IncidentRegister() {
    const  [title, setTitle] = useState('');
    const  [description, setDescription] = useState('');
    const  [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleRegisterIncident(e) {
        e.preventDefault();
        const data = {
            title,
            description,
            value,
            ong_id: ongId
        };
        const response = await api.post('incidents', data);

        history.push('/profile');
    }

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
             onSubmit={handleRegisterIncident}
         >
            <input
                type="text"
                placeholder="Título do caso"
                value={title}
                onChange={ e => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Descrição"
                value={description}
                onChange={ e => setDescription(e.target.value)}
            ></textarea>
            <input
                placeholder="Valor em reais"
                value={value}
                onChange={ e => setValue(e.target.value)}
            />

            <div className="button-group">
                <Link to={'/profile'} className="button outline" style={{ width: 280 }}>Cancelar</Link>
                <button className="button" type="submit">Cadastrar</button>
            </div>


         </GenericRegister>
    );
}