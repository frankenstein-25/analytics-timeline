import {MeetingDataAttr} from "../interface";

const getTime = (time: string): string => {
    return time.split('T')[0].split('.')[0]
}
const getTimeDiff = (startTime: string, endTime: string): string[] => {
    const start = new Date(startTime);
    const end = new Date(endTime);

    const totalMs = end.getTime() - start.getTime();
    const intervalMs = totalMs / 12;

    const result = [];

    for (let i = 0; i <= 12; i++) {
        const time = new Date(start.getTime() + intervalMs * i);

        const formatted = time.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'UTC',
        });

        result.push(formatted);
    }
    return result;
}

const getMeetingTime = (startTime: string, endTime: string): MeetingDataAttr => {
    const start = new Date(startTime).getTime();
    const end = new Date(endTime).getTime();
    const totalMs = end - start;

    return {startTime: start, endTime: end, totalMeetingTime: totalMs};
}

export {getTime, getTimeDiff, getMeetingTime}