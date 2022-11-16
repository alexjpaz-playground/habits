import React from 'react';

import {
  Link,
} from "react-router-dom";

import data from './data';

function Breadcrumbs() {
  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li> <Link to="/">Hoe</Link></li>
        <li className="is-active"><a href="/journaling" aria-current="page">Journaling</a></li>
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

function pickRandomItemFromArray(array = [], previousValue = null) {
  const randomElement = array[Math.floor(Math.random() * array.length)];

  if(previousValue && previousValue === randomElement) {
    return pickRandomItemFromArray(array, previousValue);
  }

  return randomElement;
}

function PromptCard({ title, data }) {
  const [ prompt, setPrompt ] = React.useState(pickRandomItemFromArray(data) || []);

  const onClick = () => {    
      setPrompt(pickRandomItemFromArray(data, prompt));
  };

  return (
      <div className="card" style={{ "marginBottom": "0.5rem" }}>
          <header className="card-header">
              <p className="card-header-title">{ title }</p>
          </header>
          <div className="card-content">
              <div className="content is-large">
                  <p>{prompt}</p>
              </div>
          </div>
          <footer className="card-footer" onClick={onClick}>
              <a href="#/" aria-current="page" className="card-footer-item">Pick a prompt</a>
          </footer>
      </div>
  )
}

export function Frame() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          Journaling Habit
        </h1>
        <Breadcrumbs />
        <p className='content'>
          1. Sentence stems,
          2. "I choose to",
          3. Values
        </p>
        <div className='buttons'>
          <a href='https://www.youtube.com/watch?v=jfKfPfyJRdk' className='button'>Open Study Music</a>
        </div>
        <PromptCard title={"Six Pillars Sentence Stem Prompt"} data={data.sentence_stems.six_pillars} />
        <PromptCard title={"Sentence Stem Prompt"} data={data.sentence_stems.general} />
        <PromptCard title={"Values"} data={data.prompts.values} />
        <hr />
        <Reward />
      </div>
    </section>
  )
}

export default Frame;