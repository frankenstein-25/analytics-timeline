export interface EventTypeAttr {
    event: 'mic' | 'webcam' | 'screenShare' | 'screenShareAudio' | 'errors'
}

export interface TimeAttr {
    start: string;
    end: string;
}

export interface EventAttr {
    mic?: TimeAttr[] | undefined;
    webcam?: TimeAttr[] | undefined;
    screenShare?: TimeAttr[] | undefined;
    screenShareAudio?: TimeAttr[] | undefined;
    errors?: { start: string, message: string }[] | [] | undefined;
}

export interface ParticipantAttr {
    participantId: string;
    name: string;
    timelog: TimeAttr[];
    events: EventAttr
}

export interface ParticipantDataAttr {
    meetingId: string;
    start: string;
    end: string;
    uniqueParticipantsCount: number;
    participantArray: ParticipantAttr[]
}

export interface MeetingDataAttr {
    startTime: number;
    endTime: number;
    totalMeetingTime: number;
}