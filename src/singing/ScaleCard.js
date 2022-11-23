import React, { useState } from 'react';

import { Sound } from "./Sound";

export function useScaleCardContext() {

}

export function ScaleCard({ name, scales }) {

  const [ scaleIndex, setScaleIndex ] = useState(0);

  const currentScale = scales[scaleIndex];

  const onChange = (e) => {
    setScaleIndex(e.target.selectedIndex);
  };

  return (
    <div className={"card"} style={{ "margin-bottom": "0.5rem" }}>
      <header className="card-header">
        <p className="card-header-title">{ name }</p>
      </header>
      <div className="card-content">
        <div className="content">
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
