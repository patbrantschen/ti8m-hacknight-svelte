import { writable, derived } from 'svelte/store';


export const apiData = writable([]);

export const people = derived(apiData, ($apiData) => {
  if ($apiData.people) {
    return $apiData.people;
  }
  return [];
});