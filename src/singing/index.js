import React, { useEffect, useContext, useState } from 'react';

import { HabitHeader } from '../common/HabitHeader';

import data from './data';

import References from './References';
import { ScalesSection } from './ScalesSection';

import SingingHabitContext from './SingingHabitContext';
import { Sound } from './Sound';

export const ASSET_PATH = "/singing/media/";

export const NOOP = () => { };

function Item(props) {

  const { name, audioUrl } = props;

  const [completed, setCompleted] = React.useState(false);

  const [highlighted, setHighlighted] = React.useState(false);

  let classes = "card ";

  if (completed) {
    classes += "has-background-primary ";
  } else {
    if (highlighted) {
      classes += "has-background-success ";
    }
  }





  const onComplete = () => {
    setCompleted(true);
  };

  const onPlay = () => {
    setHighlighted(true);
  };

  const onStop = () => {
    setHighlighted(false);
  };

  useEffect(() => {
    document.addEventListener("click", () => {
      setHighlighted(false);
    });
  }, [setHighlighted])

  return (
    <div className={classes} style={{ "margin-bottom": "0.5rem" }} >
      <header className="card-header">
        <p className="card-header-title">{name}</p>
      </header>
      <div className="card-content">
        <div className="content">
          <Sound audioUrl={audioUrl} onComplete={onComplete} onPlay={onPlay} onStop={onStop} />
        </div>
      </div>
    </div>
  );
}


function ItemList({ items, index }) {
  const ctx = useContext(SingingHabitContext);

  const item = ctx.arrpegios[ctx.arrpegioIndex];

  return (
    <Item key={item.name} audioUrl={item.audioUrl} name={item.name} />
  );
}

function Pagination() {
  const ctx = useContext(SingingHabitContext);

  const { arrpegioIndex, setArrpegioIndex, arrpegios } = ctx;

  const nextPage = (e) => {
    e.stopPropagation();

    if (arrpegioIndex < arrpegios.length - 1) {
      setArrpegioIndex(arrpegioIndex + 1);
    }
  };

  const prevPage = (e) => {
    e.stopPropagation();

    
    if (arrpegioIndex !== 0) {
      setArrpegioIndex(arrpegioIndex - 1);
    }
  };

  const currentPage = arrpegioIndex + 1;
  const numberOfPages = arrpegios.length;

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <a className="pagination-previous" href="#index=1" onClick={prevPage} disabled={arrpegioIndex === 0}>Previous</a>
      <a className="pagination-next" href="#index=1" onClick={nextPage} disabled={arrpegioIndex === arrpegios.length - 1}>Next page</a>
      <ul className="pagination-list">
        <li>
          <a className="pagination-link is-current" aria-label={`Page ${arrpegioIndex}`} href={`#arrpegioIndex={arrpegioIndex}`} aria-current="page">{currentPage}</a>
        </li>
        <li>
          <a className="pagination-link" aria-label={`Page ${arrpegioIndex}`} href={`#arrpegioIndex={arrpegioIndex}`} aria-current="page">{numberOfPages}</a>
        </li>
      </ul>
    </nav>
  )
}

function useSingingHabitState(initialState = {}) {

  const [state, setState] = useState({
    ...initialState,
    arrpegioIndex: 0,
    arrpegios: data.practice_arpeggios,
  });

  state.setArrpegioIndex = (arrpegioIndex) => {
    console.log(state.arrpegioIndex);
    setState((state) => {

      return {
        ...state,
        arrpegioIndex,
      }
    })
  }


  return state;
}

function SingingHabitContextProvider({ children }) {

  const state = useSingingHabitState();

  return (
    <SingingHabitContext.Provider value={state}>
      {children}
    </SingingHabitContext.Provider>
  )
}

function Frame() {

  const SINGING_PLAYLIST_URL = 'https://music.youtube.com/playlist?list=PLBsbOw7xrqWMYUnXANFeOer-8pS2q1eU4&feature=share';

  return (
    <SingingHabitContextProvider>
      <section className="section">
        <div className="container">
          <HabitHeader title={"Singing"} path={"/singing"} description={(
            <div>
              <h4>Habit Outline</h4>
              <ol>
                <li>Sing arreggios</li>
                <li>Write down lyrics / phrases</li>
                <li>Identify vowel substitutions</li>
              </ol>
              <h4>Excercises</h4>
              <p>Bubble, VVV, Puffy cheeks, Raspberry</p>
              <p>Bub, Bup, Goo/Koo, Gug</p>
              <p>Hnng → EE → Mmm</p>
              <h4><a href='/singing/images/solfege.png'>Scales (Solfege)</a></h4>
              <p>Major Scale 1 (Doh) 2 (Re) 3 (Mi) 4 (Fa) 5 (Sol) 6 (La) 7 (Ti)</p>
              <p>Natural Minor Progression: 6 (Low La) 7 (Low Ti) 1 (Doh) 2 (Re) 3 (Mi) 4 (Fa) 5 (Sol) 6 (La)</p>
              
              <a href={SINGING_PLAYLIST_URL} className='button'>Singing playlist</a>
            </div>
          )} />
          <References />
          <hr />
          <ItemList />
          <Pagination />
          <hr />
          <ScalesSection />
        </div>
      </section>
    </SingingHabitContextProvider>
  )
}

export default Frame;
