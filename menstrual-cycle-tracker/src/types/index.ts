export interface CycleData {
    startDate: Date;
    endDate: Date;
    cycleLength: number; // in days
    ovulationDate?: Date;
}

export interface UserSettings {
    notificationEnabled: boolean;
    cycleLength: number; // in days
    preferredView: 'calendar' | 'list';
}

export interface HistoryEntry {
    date: Date;
    cycleData: CycleData;
}

export interface Profile {
    name: string;
    email: string;
    dateOfBirth: Date;
}