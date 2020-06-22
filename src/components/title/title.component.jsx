import React from 'react';
import styles from './title.module.css';

const Title = ({ label }) => (
    <div className={styles.title}>
        {label}
    </div>
)

export default Title;