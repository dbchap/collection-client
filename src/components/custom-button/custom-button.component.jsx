import React from 'react';

import buttonStyles from './custom-button.module.css';

const CustomButton = ({ children, customButtonClass, ...otherProps }) => (
    <button
        className={buttonStyles.customInput}
        {...otherProps}>
        {children}
    </button>
);

export default CustomButton;