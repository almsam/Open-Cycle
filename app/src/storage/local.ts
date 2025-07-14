import type { cycle } from "./types"

export interface localUser {
    name: String,
    // gender TODO: expand gender options once framework is complete
    cyclesHistory: cycle[],
    joinDate: Date,
    userID: 1 // placeholder, unsure if needed
    age: 18 // placeholder, unsure if needed
}