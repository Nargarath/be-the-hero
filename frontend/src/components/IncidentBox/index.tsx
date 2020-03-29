import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {IncidentBoxContract} from "../../../../backend/src/contracts/IncidentBoxContract";



function IncidentBox({id, title, description, value}: IncidentBoxContract) {
    function formatValue() {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
    }
    return (
        <div className="incident-box">
            <div className="incident-box-section-text name">
                <p className="incident-box-section-text-title">
                    Caso:
                </p>
                <p className="incident-box-section-text-content">
                    { title }
                </p>
                <Link to="/delete/xx" className="incident-box-delete">
                    <FiTrash2 size={20} color="#A8A8B3"/>
                </Link>
            </div>
            <div className="incident-box-section-text description">
                <p className="incident-box-section-text-title">
                    Descrição:
                </p>
                <p className="incident-box-section-text-content">
                    { description }
                </p>
            </div>
            <div className="incident-box-section-text value">
                <p className="incident-box-section-text-title">
                    Valor:
                </p>
                <p className="incident-box-section-text-content">
                    { formatValue() } reais
                </p>
            </div>
        </div>
    );
}

export default IncidentBox;
