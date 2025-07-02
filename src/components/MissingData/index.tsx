import React from 'react';
import styles from './missingData.module.scss'

interface PageProps {
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end';
    fontSize?: 'small' | 'mid' | 'large' | 'xl' ;
}

const MissingData: React.FC<PageProps> = ({fontSize = 'mid', align = 'center', justify = 'center'}) => {
    return (
        <div className={styles.message} data-fontSize={fontSize} data-align={align} data-justify={justify}>
            <p>
                Data Not Found
            </p>
        </div>
    );
};

export default MissingData;