import React from 'react';

import * as styles from './form-select.module.css';

const FormSelect = ({ options, ...otherProps }) => (
    <div className="field">
        <div className="control">
            <div className="select">
                <select {...otherProps} className={styles.customInput}>
                    <option value="-1">CHOOSE COLUMN</option>
                    {options.map(option=>
                        <option key={option.value} value={option.value}>{option.name}</option>    
                    )}
                    
                </select>
            </div>
        </div>
    </div>
)

export default FormSelect;