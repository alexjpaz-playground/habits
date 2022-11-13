import React from 'react';

import {
  Link,
} from "react-router-dom";

const ASSET_PATH = "/singing/media/";

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

function Item(props) {

  const { name, audioUrl } = props;

  return (
    <div className="card" style={{"margin-bottom":"0.5rem"}}>
      <header className="card-header">
        <p className="card-header-title">{ name }</p>
      </header>
      <div className="card-content">
        <div className="content">
          <audio src={ `${ASSET_PATH}/${audioUrl}` } controls style={{"width": "100%"}} />
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
        <ItemList items={data.items} />
      </div>
    </section>
  )
}

export default Frame;