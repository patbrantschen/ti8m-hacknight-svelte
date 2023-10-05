import { writable, derived } from 'svelte/store';


export const apiData = writable([]);

/** Data transformation.
For our use case, we only care about the drink names, not the other information.
Here, we'll create a derived store to hold the drink names.
**/
export const people = derived(apiData, ($apiData) => {
  if ($apiData.people){
    return $apiData.people;
  }
  return [];
});