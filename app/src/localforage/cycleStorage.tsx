import localforage from "localforage";
localforage.config({
    name: 'OpenCycle',
    storeName: 'cycleData'
})

//we are storing mongodb database objects locally, makes things easier

type Cycle = {
  menstruationStarts: Date, //key
  menstruationEnds: Date | null,
  ovulationDate: Date | null,
  userNote: string | null,
};

// getters and setters

export function setCycle(cycle: Cycle){
  localforage.setItem(cycle.menstruationStarts.toISOString(), cycle);
}

export function getCycle(menstruationStarts: Date){
  return localforage.getItem(menstruationStarts.toISOString());
}

