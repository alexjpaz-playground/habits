import React, { useEffect } from 'react';

import {
  Link,
} from "react-router-dom";

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

function Reward() {
  return (
    <div>
      <h2 className="title">
        Select a reward
      </h2>
      <a className='button is-primary' href='https://www.reddit.com/r/aww/'>See a cute animal</a>
      <a className='button is-primary' href='https://www.youtube.com/watch?v=Oc8vAvqGL_M'>Make a coffee</a>
    </div>
  )
}

function Sound({ audioUrl, onComplete = NOOP, onPlay = NOOP, onStop = NOOP }) {

  const audioRef = React.useRef(null);

  React.useEffect(() => {
    if(!audioRef) return;

    audioRef.current.onended = () => {
      onComplete();
    };

    audioRef.current.ontimeupdate = () => {
      if(audioRef.current.currentTime >= (audioRef.current.duration - 15)) {
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
  const data = {
    items: [
      { 
        name: "Long Scale (Warm-Ups: Bubble, Vvv, Puffy Cheeks & Cool Down) - Low",
        audioUrl: "Bubble.mp3"
      },
      { 
        name: "'Mum' on Descending 5 Tone Repeat (Low)",
        audioUrl: "Mum.mp3"
      },
      {
        name: '"Bub" on Octave Repeat - Low ',
        audioUrl: "Bub.mp3",
      },
      {
        name: '"Bup" on a Triple Arpeggio - Low',
        audioUrl: 'Bup.mp3',
      },
      {
        name: 'Bubble Cool Down on Reverse Single Arpeggio - Low' ,
        audioUrl: "Bubble_Cooldown.mp3",
      },
      {
        name: "Ugly Ah - Descending 5 Tone Repeat (Low Voices)",
        audioUrl: "Ugly_Ah_Low.mp3"
      },
      {
        name: "Ugly Ah - Descending 5 Tone Repeat (High Voices)",
        audioUrl: "Ugly_Ah_High.mp3"
      },
      {
        name: "Mmm - 5 Tone Scale (Low Voices)",
        audioUrl: "Mmm_Low.mp3"
      },
      {
        name: "Mmm 5 Tone Scale (High Voices)",
        audioUrl: "Mmm_High.mp3"
      },
      {
        name: "Goo-Koo Descending Arpeggio (Low Voices)",
        audioUrl: "Goo-Koo_Low.mp3"
      },
      {
        name: "Goo-Koo Descending Arpeggio (High Voices)",
        audioUrl: "Goo-Koo_High.mp3"
      },
      {
        name: "Gug Descending Arpeggio (Low Voices)",
        audioUrl: "Goo-Koo_Low.mp3"
      },
      {
        name: "Gug Descending Arpeggio (High Voices)",
        audioUrl: "Goo-Koo_High.mp3"
      },
    ]
  };

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
        <ItemList items={data.items} />
        <hr />
        <Reward />
      </div>
    </section>
  )
}

export default Frame;