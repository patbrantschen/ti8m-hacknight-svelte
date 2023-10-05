import { writable, derived } from 'svelte/store';


export const apiData = writable([]);

export const issAstronauts = derived(apiData, ($apiData) => {
  if ($apiData.people) {
    return $apiData.people.filter(p => p.craft === 'ISS').map(p => p.name);
  }
  return [];
});

export const tiangongAstronauts = derived(apiData, ($apiData) => {
    if ($apiData.people) {
      return $apiData.people.filter(p => p.craft === 'Tiangong').map(p => p.name);
    }
    return [];
  });