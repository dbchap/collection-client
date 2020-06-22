import React from 'react';

import * as styles from './form-input.module.css';

const FormInput = ({ handleChange, label, iconLeft, iconRight, ...otherProps }) => {

    return (

        <div className="field">
            {/* <label className="label">{label}</label> */}
            <div className={'control '+(iconLeft?'has-icons-left':'')+(iconRight?'has-icons-right':'')}>
                <input
                    className={`input ${styles.customInput}`}
                    placeholder={label}
                    value=""
                    onChange={handleChange}
                    {...otherProps}
                />
                {iconLeft ?
                    <span className="icon is-small is-left">
                        <i className={`fas fa-${iconRight}`}></i>
                    </span> : null}
                {iconRight ?
                    <span className="icon is-small is-right">
                        <i className={`fas fa-${iconRight}`}></i>
                    </span> : null}
            </div>
        </div>
    )
}

export default FormInput;