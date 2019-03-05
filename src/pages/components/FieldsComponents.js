// Modulos
import React from 'react';

export const FieldHorizontal = ({type="text", label="", placeholder="", value="", change=null, icon="question"}) => {
    return (
        <div className="field is-horizontal">
            <div className="field-label">
                <label className="label">{label}</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type={type} placeholder={placeholder} value={value} onChange={(e) => change(e.target.value)}/>
                        <span className="icon is-small is-left">
                            <i className={`fas fa-${icon}`}></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}