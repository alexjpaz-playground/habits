

export function pickRandomItemFromArray(array = [], previousValue = null) {
    const randomElement = array[Math.floor(Math.random() * array.length)];
  
    if(previousValue && previousValue === randomElement) {
      return pickRandomItemFromArray(array, previousValue);
    }
  
    return randomElement;
  }