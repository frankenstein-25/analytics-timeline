import React from 'react';
import {MeetingDataAttr, ParticipantAttr} from '../../interface';
import {ReactComponent as ChevronRightIcon} from '../../assets/images/icons/chevron-right.svg'
import styles from './participant.module.scss';
import ProgessBar from "../ProgessBar";
import {useGlobalContext} from "../../context/globalContext";


interface PageProps {
    participant: ParticipantAttr;
    times: string[];
    meetingInfo: MeetingDataAttr;
}

const Participant: React.FC<PageProps> = ({participant, times, meetingInfo}) => {
    const {isShowParticipant} = useGlobalContext()
    const getTimeLog = () => {
        const timeLog = participant.timelog[0]
        let totalMs = 0;
        const startTimeFormatted = new Date(timeLog.start).toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'UTC'
        });
        const startDateFormatted = new Date(timeLog.end).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timeZone: 'UTC'
        });
        participant.timelog.forEach((log, index) => {
            const startDate: any = new Date(log.start);
            const endDate: any = new Date(log.end);
            totalMs += endDate - startDate;
        });

        const totalMinutes = Math.floor(totalMs / 60000);
        return `${startDateFormatted}, ${startTimeFormatted}  |  Duration ${totalMinutes} Mins`
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.subWrapper}>
                {times.slice(0, times.length - 2).map((_, i) => (
                    <div className={styles.timeBlock} key={i}></div>
                ))}
                <div className={styles.contentWrapper}>
                    <div className={styles.participantInfo}>
                        <div className={styles.name}>
                            <span className={'capitalize'}>{participant.name}</span> ({participant.participantId})
                        </div>
                        <div className={styles.timeInfo}>{getTimeLog()}</div>
                    </div>
                    <a className={styles.Link} href={`#${participant.participantId}`}>View details <ChevronRightIcon
                        className={styles.icon}/></a>
                </div>
                {isShowParticipant && <div className={styles.progressBarWrapper}>
                    <div className={styles.progressBarSubWrapper}>
                        {participant.timelog.length > 0 && participant.timelog.map((timeLog, index) =>
                            <ProgessBar events={participant.events} meetingInfo={meetingInfo} timeLog={timeLog}
                                        key={index}/>
                        )}
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default Participant;