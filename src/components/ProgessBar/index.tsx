import React, {useEffect, useState} from 'react';
import {EventAttr, EventTypeAttr, MeetingDataAttr, TimeAttr} from '../../interface'
import {getMeetingTime} from "../../helpers/functions";
import styles from './progressBar.module.scss'
import {ReactComponent as MonitorIcon} from "../../assets/images/icons/monitor.svg";
import {ReactComponent as LogoutIcon} from "../../assets/images/icons/log-out.svg";
import Event from "../Event";

interface PageProps {
    timeLog: TimeAttr;
    meetingInfo: MeetingDataAttr;
    events: EventAttr;
}

const ProgressBar: React.FC<PageProps> = ({timeLog, meetingInfo, events}) => {
    const [startTime, setStartTime] = useState<number>(0);
    const [endTime, setEndTime] = useState<number>(0);
    const [meetingTime, setMeetingTime] = useState<number>(0);
    useEffect(() => {
        const timeData: MeetingDataAttr = getMeetingTime(timeLog.start, timeLog.end);
        setStartTime(timeData.startTime);
        setEndTime(timeData.endTime);
        setMeetingTime(timeData.totalMeetingTime);
    }, [])
    return (
        <div className={styles.wrapper}
             style={{
                 left: `${((startTime - meetingInfo.startTime) * 100) / (meetingInfo.endTime - meetingInfo.startTime)}%`,
                 width: `${((meetingTime) * 100) / meetingInfo.totalMeetingTime}%`
             }}>
            <div className={styles.joining}>
                <MonitorIcon className={styles.icon}/>
            </div>
            <div className={styles.leaving}>
                <LogoutIcon className={styles.icon}/>
            </div>
            <div className={styles.eventsWrapper}>
                {events?.webcam && events?.webcam?.length > 0 && events.webcam.map((webcam, index) => {
                    const webcamTime = getMeetingTime(webcam.start, webcam.end);
                    const width = ((webcamTime.totalMeetingTime) * 100) / meetingTime;
                    const left = ((webcamTime.startTime - startTime) * 100) / (endTime - startTime)
                    return (
                        <div className={styles.webcam} key={index}>
                            <div className={styles.webcamProgressBar}>
                                <div className={styles.activeWebcam}
                                     style={{
                                         left: `${left < 0 ? 0 : left}%`,
                                         width: `${width > 100 ? 100 : width}%`
                                     }}>
                                    <div className={styles.bar}>
                                        <div className={styles.hoverWrapper}>The webcam was on for {Math.floor(webcamTime.totalMeetingTime / 60000)} minutes</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })}
                {Object.entries(events).map(([event, timeLog], index: number) =>
                    <Event key={index} event={event as 'mic' | 'webcam' | 'screenShare' | 'screenShareAudio' | 'errors'}
                           timeLog={timeLog}
                           meetingData={{startTime, endTime, totalMeetingTime: meetingTime}}/>
                )}
            </div>
            <div className={styles.subWrapper}></div>
        </div>
    );
};

export default ProgressBar;