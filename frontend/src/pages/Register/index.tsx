import React, {useState} from 'react';
import './styles.scss';
import GenericRegister from "../../components/GenericRegister";
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default function Register() {
    const  [name, setName] = useState('');
    const  [email, setEmail] = useState('');
    const  [whatsapp, setWhatsapp] = useState('');
    const  [city, setCity] = useState('');
    const  [uf, setUf] = useState('');
    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
          name,
          email,
          whatsapp,
          city,
          uf
        };
        const response = await api.post('ongs', data);
        clearForm();
        alert(`Seu ID de acesso: ${response.data}`);
        history.push('/');
    }

    function clearForm() {
        setName('');
        setEmail('');
        setWhatsapp('');
        setCity('');
        setUf('');
    }

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
             }
             onSubmit={handleRegister}

         >
            <input
                placeholder="ONG's Name"
                value={name}
                onChange={ e => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="email"
                value={email}
                onChange={ e => setEmail(e.target.value)}
            />
            <input
                placeholder="whatsapp"
                value={whatsapp}
                onChange={ e => setWhatsapp(e.target.value)}
            />

            <div className="input-group">
                <input
                    placeholder="city"
                    value={city}
                    onChange={ e => setCity(e.target.value)}
                />
                <input
                    placeholder="UF"
                    style={{ width: 73 }}
                    value={uf}
                    onChange={ e => setUf(e.target.value)}
                />
            </div>

            <button className="button" type="submit">Cadastrar</button>
         </GenericRegister>
    );
}