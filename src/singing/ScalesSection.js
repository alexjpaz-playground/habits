import React from 'react';
import data from './data';
import { ScaleCard } from './ScaleCard';


export function ScalesSection() {

  const [displayModal, setDisplayModal] = React.useState(false);

  const onClick = () => {
    setDisplayModal(c => !c);
  };

  return (
    <div>
      <div className="dropdown is-active">
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={onClick}>
            <span>View More Scales</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      </div>
      {displayModal &&
        <>
          <ScaleCard name={"Baritone Scales"} scales={data.scales.baritone} />
          <ScaleCard name={"Tenor Scales"} scales={data.scales.tenor} />
        </>}
    </div>
  );
}
