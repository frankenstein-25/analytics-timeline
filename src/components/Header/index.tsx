import React from 'react';
import styles from './header.module.scss';
import {ReactComponent as ClipboardIcon} from '../../assets/images/icons/clipboard.svg'
import {useGlobalContext} from "../../context/globalContext";

const Header = () => {
    const {isShowParticipant, setIsShowParticipant} = useGlobalContext();
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.leftContent}>
                    <ClipboardIcon className={styles.icon}/>
                    <p className={styles.title}>Participants wise Session Timeline</p>
                </div>
                <button onClick={() => {
                    setIsShowParticipant((prev: boolean) => !prev)
                }} className={styles.rightContent}>
                    <p className={styles.title}>Show participant timeline</p>
                    <span className={`${styles.switch} ${isShowParticipant ? styles.active : ''}`}></span>
                </button>
            </header>
        </div>
    );
};

export default Header;