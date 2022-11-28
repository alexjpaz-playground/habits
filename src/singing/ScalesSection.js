import React from 'react';
import data from './data';
import { ScaleCard } from './ScaleCard';

const SCALES = {
  tenor: {
    label: "Tenor",
    scales: data.scales.tenor,
  },
  baritone: {
    label: "Baritone",
    scales: data.scales.baritone,
  },
}


export function ScalesSelect({ onChange = () => {} }) {
  
  return (
    <div class="field">
      <div class="control">
        <div class="select">
          <select onChange={onChange}>
            {Object.keys(SCALES).map((scale) => (
              <option key={scale}>{scale}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export function ScalesSection() {

  const [ scales, setScales ] = React.useState(SCALES.tenor);

  const onChange = (e) => {
    const key = e.target.value;

    setScales(SCALES[key]);
  };

  return (
    <div>
      <ScalesSelect onChange={onChange} />
      <ScaleCard name={`${scales.label} Scales`} scales={scales.scales} />
    </div>
  );
}
