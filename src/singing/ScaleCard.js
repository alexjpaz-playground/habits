import React, { useState } from 'react';

import { Sound } from "./Sound";

export function useScaleCardContext() {

}

export function ScaleCard({ name, scales = [] }) {

  const [ scaleIndex, setScaleIndex ] = useState(0);

  const currentScale = scales[scaleIndex];

  const onChange = (e) => {
    setScaleIndex(e.target.selectedIndex);
  };

  return (
    <div >
      <header>
        <h2>{ name }</h2>
      </header>
      <div>
        <div>
          <div class="field">
            <div class="control">
              <div class="select">
                <select onChange={onChange}>
                  { scales.map((scale) => (
                    <option>{scale.replace(/nebula_scales\/(tenor|baritone)\//, "")}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <Sound audioUrl={currentScale} />
        </div>
      </div>
    </div>
  );
}
