import React, { useContext } from 'react';

import data from './data';

import { ScaleCard } from './ScaleCard';
import { ScaleSectionPagination } from './ScaleSectionPagination';
import { ScalesSectionContextProvider } from './ScalesSectionContextProvider';
import ScalesSectionContext from './ScalesSectionContext';

export function ScalesSelect() {

  const ctx = useContext(ScalesSectionContext);

  const onChange = (e) => {
    const key = e.target.value;

    ctx.setScales(data.scales[key].scales);
    ctx.setScaleIndex(0);
  };
  
  return (
    <div class="field">
      <div class="control ">
        <div class="select is-info is-fullwidth">
          <select onChange={onChange}>
            {Object.keys(data.scales).map((scale) => (
              <option key={scale}>{scale}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export function ScalesSection() {

  const [ scales ] = React.useState(data.scales.guided);
  
  return (
    <div>
      <ScalesSectionContextProvider>
        <h2 className='subtitle'>Scales</h2>
        <ScalesSelect />
        <ScaleCard name={`${scales.label} Scales`} scales={scales.scales} />
        <br />
        <ScaleSectionPagination />
      </ScalesSectionContextProvider>
    </div>
  );
}
