import React from 'react';
import styles from "./timeSlots.module.scss";

interface PageProps {
    times: string[],
}

const TimeSlots: React.FC<PageProps> = ({times}) => {
    return (
        <div className={styles.wrapper}>
            {times.slice(0, times.length - 3).map((item, i) => (
                <div className={styles.timeBlock} key={i}>
                    <div className={styles.textWrapper}>
                        <p className={styles.floatingText}>{item}</p>
                    </div>
                </div>
            ))}
            <div className={styles.timeBlock}>
                <div className={styles.textWrapper}>
                    <p className={styles.floatingText}>{times[times.length - 2]}</p>
                </div>
                <div className={styles.textWrapper}>
                    <p className={styles.floatingText}>{times[times.length - 1]}</p>
                </div>
            </div>
        </div>
    );
};

export default TimeSlots;