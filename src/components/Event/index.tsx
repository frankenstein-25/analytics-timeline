import React from 'react';
import {EventTypeAttr, MeetingDataAttr} from "../../interface";
import {ReactComponent as AlertIcon} from "../../assets/images/icons/alert-circle.svg";
import {ReactComponent as MicIcon} from "../../assets/images/icons/mic.svg";
import {ReactComponent as VideoIon} from "../../assets/images/icons/video.svg";
import {ReactComponent as ScreenShareIcon} from '../../assets/images/icons/screen-share.svg';
import styles from './event.module.scss';

interface PageProps extends EventTypeAttr {
    timeLog: any;
    meetingData: MeetingDataAttr;
}

const Event: React.FC<PageProps> = ({event, timeLog, meetingData}) => {
    const getEventIcon = () => {
        switch (event) {
            case 'mic':
                return <MicIcon className={styles.icon}/>;
            case 'webcam':
                return <VideoIon className={styles.icon}/>;
            case 'screenShare':
                return <ScreenShareIcon className={styles.icon}/>;
            case 'screenShareAudio':
                return <ScreenShareIcon className={styles.icon}/>;
            case 'errors':
                return <AlertIcon className={styles.alertIcon}/>;
            default:
                return '';
        }

    }
    return timeLog?.length > 0 && timeLog.map((time: any, index: number) =>
        <div className={styles.wrapper}
             key={index}
             style={{
                 left: `${((new Date(time.start).getTime() - meetingData.startTime) * 100) / (meetingData.endTime - meetingData.startTime)}%`
             }}>
            <div className={styles.subWrapper}>
                <div className={event === 'errors' ? styles.alertIconWrapper : styles.iconWrapper}>
                    {getEventIcon()}
                </div>
                {event === 'errors' ?
                    <div className={` ${styles.hoverWrapper} ${styles.alertBgHover}`}>
                        {event === 'errors' ? time?.message : ''}
                    </div> :
                    <div className={` ${styles.hoverWrapper} ${styles.bgHover}`}>
                        <span className="capitalize">{event}</span>{' '}
                        started at {new Date(time.start).toLocaleTimeString('en-IN', {
                        hour12: false,
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                    })}
                    </div>
                }
            </div>
        </div>)
        ;
};

export default Event;