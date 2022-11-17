import React, { useEffect } from 'react';

import {
  Link,
} from "react-router-dom";

import Rewards from '../common/rewards';

import data from './data';

import VowelSubstitutionButton from './VowelChartButton';

import VowelSubstitutionCard from './VowelSubstitutionCard';


const ASSET_PATH = "/singing/media/";
const NOOP = () => {};

function Breadcrumbs() {
  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li> <Link to="/">Habits</Link></li>
        <li className="is-active"><a href="/singing" aria-current="page">Singing</a></li>
      </ul>
    </nav>
  );
}

function Sound({ audioUrl, onComplete = NOOP, onPlay = NOOP, onStop = NOOP }) {

  const audioRef = React.useRef(null);

  React.useEffect(() => {
    if(!audioRef) return;

    audioRef.current.onended = () => {
      onComplete();
    };

    audioRef.current.ontimeupdate = () => {
      if(audioRef.current.currentTime >= (audioRef.current.duration - 3)) {
        onComplete();
      }
    };

    audioRef.current.onplay = () => {
      onPlay();
    }

    audioRef.current.onpause = () => {
      onStop();
    }

  }, [ audioRef, onComplete, onStop, onPlay ]);

  return (
    <audio ref={audioRef} src={ `${ASSET_PATH}/${audioUrl}` } controls style={{"width": "100%"}} />
  )
}

function Item(props) {

  const { name, audioUrl } = props;

  const [ completed, setCompleted ] = React.useState(false);

  const [ highlighted, setHighlighted ] = React.useState(false);

  let classes = "card ";

  if(completed) {
    classes += "has-background-primary ";
  } else {
    if(highlighted) {
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
  }, [ setHighlighted ])

  return (
    <div className={classes} style={{"margin-bottom":"0.5rem"}} >
      <header className="card-header">
        <p className="card-header-title">{ name }</p>
      </header>
      <div className="card-content">
        <div className="content">
          <Sound audioUrl={audioUrl} onComplete={onComplete} onPlay={onPlay} onStop={onStop} />
        </div>
      </div>
    </div>
  );
}


function ItemList(props) {

  const Items = props.items.map((item) => (
    <Item key={item.name} audioUrl={item.audioUrl} name={item.name} />
  ));

  return Items;
}


function Frame() {

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          Singing Habit
        </h1>
        <Breadcrumbs />
        <p className='content'>
          1. Sing arreggios,
          2. Write down lyrics / phrases,
          3. Identify vowel substitutions
        </p>
        <VowelSubstitutionButton />
        <hr />
        <ItemList items={data.practice_arpeggios} />
        <hr />
        <VowelSubstitutionCard />
        <hr />
        <Rewards />
      </div>
    </section>
  )
}

export default Frame;