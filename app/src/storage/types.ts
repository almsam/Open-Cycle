export interface fertileWindow {
    start: Date,
    end: Date
}
export interface userNote {
    userID: number,
    note: String,
    date: Date
}

export const averageCycleLength = 28 //days, global average cycle placeholder

export interface menstruationDates {
    start: Date,
    end: Date 
}

export interface cycle {
    user: number,
    userNotes: userNote[],
    averageCycleLength: 28, //days, individual average cycle placeholder
    note: userNote,
    fdates: fertileWindow,
    mdates: menstruationDates,
}

export interface gender {
    enum: 'male' | 'female' | 'non-binary' | 'other' // TODO: add more gender options
}
