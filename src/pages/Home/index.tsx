import React, {useEffect, useState} from 'react';
import participantData from '../../data/participant.json';
import MissingData from "../../components/MissingData";
import Header from "../../components/Header";
import TimeSlots from "../../components/TimeSlots";
import styles from './home.module.scss';
import {getMeetingTime, getTimeDiff} from "../../helpers/functions";
import Participant from "../../components/Participant";
import {MeetingDataAttr, ParticipantAttr, ParticipantDataAttr} from "../../interface";


const Home = () => {
    const [participant, setParticipant] = React.useState<ParticipantDataAttr | undefined>(participantData);
    const [times, setTimes] = useState<string[]>([]);
    const [meetingInfo, setMeetingInfo] = useState<MeetingDataAttr>({startTime: 0, endTime: 0, totalMeetingTime: 0});

    useEffect(() => {
        if (participant) {
            const TimeSlot: string[] = getTimeDiff(participant.start, participant.end);
            setTimes(TimeSlot);
            setMeetingInfo(getMeetingTime(participant.start, participant.end))
        }
    }, [])

    if (!participant) {
        return <MissingData/>;
    }
    return (
        <>
            <Header/>
            <div className={styles.wrapper}>
                <div className={styles.subWrapper}>
                    <TimeSlots times={times}/>
                    <div>
                        {participant.participantArray.map((participant: ParticipantAttr, index: number) => (
                            <Participant key={index} participant={participant} times={times} meetingInfo={meetingInfo}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;