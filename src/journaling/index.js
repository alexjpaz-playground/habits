import React from 'react';

import Rewards from '../common/rewards';

import { HabitHeader } from '../common/HabitHeader';

import data from './data';

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
        <HabitHeader title={"Journaling"} path={"/journaling"} description={`
          1. Sentence stems,
          2. "I choose to",
          3. Values`
        } />
        <div className='buttons'>
          <a href='https://www.youtube.com/watch?v=jfKfPfyJRdk' className='button'>Open Study Music</a>
        </div>
        <PromptCard title={"Six Pillars Sentence Stem Prompt"} data={data.sentence_stems.six_pillars} />
        <PromptCard title={"Sentence Stem Prompt"} data={data.sentence_stems.general} />
        <PromptCard title={"Values"} data={data.prompts.values} />
        <hr />
        <Rewards />
      </div>
    </section>
  )
}

export default Frame;