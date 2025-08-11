import localforage from "localforage";
localforage.config({
    name: 'OpenCycle',
    storeName: 'cycleData'
})

//we are storing mongodb database objects locally, makes things easier

//additional fields can be added
type Cycle = {
  menstruationStarts: Date, //key
  menstruationEnds: Date | null,
  ovulationDate: Date | null,
  userNote: string | null,
};

function dateToString(d : Date){
  return d.toISOString().split("T")[0];
}


// getters and setters
export async function setCycle(cycle: Cycle){
  await localforage.setItem(dateToString(cycle.menstruationStarts), cycle);
}

export async function getCycle(menstruationStarts: Date){
  const cycle : Cycle | null = await localforage.getItem(dateToString(menstruationStarts));
  return cycle;
}

export async function getOvulationDate(menstruationStarts: Date){
  const cycle : Cycle | null = await localforage.getItem(dateToString(menstruationStarts));
  if(cycle == null) return null;
  return cycle.ovulationDate;
}

export async function getUserNote(menstruationStarts: Date){
  const cycle : Cycle | null = await localforage.getItem(dateToString(menstruationStarts));
  if(cycle == null) return null;
  return cycle.userNote;
}

export async function getMenstruationEnds(menstruationStarts: Date){
  const cycle : Cycle | null = await localforage.getItem(dateToString(menstruationStarts));
  if(cycle == null) return null;
  return cycle.menstruationEnds;
}

export async function setMenstruationEnds(menstruationStarts: Date, menstruationEnds: Date){
  var cycle: Cycle | null = await getCycle(menstruationStarts);
  if(cycle == null){
    cycle = {
      menstruationStarts: menstruationStarts,
      menstruationEnds: menstruationEnds,
      ovulationDate: null,
      userNote: null
    }
  }
  else{
    cycle.menstruationEnds = menstruationEnds;
  }
  setCycle(cycle);
}
export async function setOvulationDate(menstruationStarts: Date, ovulationDate : Date){
  var cycle: Cycle | null = await getCycle(menstruationStarts);
  if(cycle == null){
    cycle = {
      menstruationStarts: menstruationStarts,
      menstruationEnds: null,
      ovulationDate: ovulationDate,
      userNote: null
    }
  }
  else{
    cycle.ovulationDate = ovulationDate;
  }
  setCycle(cycle);
}

export async function setNote(menstruationStarts: Date, userNote: string){
  var cycle: Cycle | null = await getCycle(menstruationStarts);
  if(cycle == null){
    cycle = {
      menstruationStarts: menstruationStarts,
      menstruationEnds: null,
      ovulationDate: null,
      userNote: userNote
    }
  }
  else{
    cycle.userNote = userNote;
  }
  setCycle(cycle);
}