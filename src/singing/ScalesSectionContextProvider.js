import React from 'react';
import SingingHabitContext from './ScalesSectionContext';
import useScalesSectionState from './useScalesSectionState';

export function ScalesSectionContextProvider({ children }) {

  const state = useScalesSectionState();

  return (
    <SingingHabitContext.Provider value={state}>
      {children}
    </SingingHabitContext.Provider>
  );
}
