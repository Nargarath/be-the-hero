import React from 'react';
import './styles.scss';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/svg/logo.svg';
import { GenericRegisterContract } from "../../contracts/GenericRegisterContract";



export default function GenericRegister(props: GenericRegisterContract) {
    return(
     <div className="generic-register-container" id={props.componentId}>
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>

                <h1>{ props.title }</h1>
                <p>{ props.description }</p>

                <Link to={ props.link.to } className="back-link">
                    <FiArrowLeft size={20} color="#E02041"/>
                    { props.link.text }
                </Link>
            </section>
            <form onSubmit={props.onSubmit}>
                {props.children}
            </form>
        </div>
     </div>
    );
}