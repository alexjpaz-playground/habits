import { useState } from 'react';
import data from './data';

export default function useScalesSectionState(initialState = {}) {

  const [state, setState] = useState({
    ...initialState,
    scaleIndex: 0,
    scales: data.scales.guided.scales,
    arrpegioIndex: 0,
    arrpegios: data.practice_arpeggios,
  });

  state.setScales = (scales) => {
    setState((state) => {

      return {
        ...state,
        scales,
      };
    });
  };


  state.setScaleIndex = (scaleIndex) => {
    setState((state) => {

      return {
        ...state,
        scaleIndex,
      };
    });
  };

  state.setArrpegioIndex = (arrpegioIndex) => {
    setState((state) => {

      return {
        ...state,
        arrpegioIndex,
      };
    });
  };


  return state;
}
