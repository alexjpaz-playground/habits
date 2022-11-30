import React, { useContext, useState } from 'react';

import { Sound } from "./Sound";

import ScalesSectionContext from './ScalesSectionContext';

export function ScaleCard({ name }) {

  const ctx = useContext(ScalesSectionContext);

  let currentScale = ctx.scales[ctx.scaleIndex];

  

  const onChange = (e) => {
    ctx.setScaleIndex(e.target.selectedIndex);
  };

  return (
    <div >
      <div>
        <div>
          <div className="field">
            <div className="control">
              <div className="select is-fullwidth">
                <select onChange={onChange} value={currentScale.value}>
                  { ctx.scales.map((item) => (

                    <option key={item.label} value={ item.value } selecte>{ item.label }</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <Sound audioUrl={currentScale.value} />
        </div>
      </div>
    </div>
  );
}
