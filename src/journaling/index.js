import React from 'react';

import {
  Link,
} from "react-router-dom";

const data = {
  prompts: {
    sentence_stems: [
      "I choose to ... because ...",
      "As I mature I begin to notice ...",
      "I am becoming aware ...",
      "I see ...",
      "I like who I am because…",
      "My friends think I have an awesome…",
      "I mean a lot to…",
      "Somewhere I feel happy is…",
      "I have always wanted to…",
      "I’m secretly afraid of…",
      "This week I would enjoy doing…",
      "I often look forward to…",
      "I feel something that the future holds for me is…",
      "I get my strength from…",
      "One person couldn’t live without is…",
      "I would never…",
      "It made me feel great when…",
      "I love when…",
      "I find it hard to…",
      "My dream is to one day that…",
      "It makes me angry when…",
      "I sometimes fear that…",
      "This week is going to be…",
      "Something I deeply desire is…",
      "I flourish when…",
      "This week I hope to…",
      "Something I do secretly…",
      "I find it hard to admit…",

    ],
  }
};

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
              <div className="content">
                  <h2>{prompt}</h2>

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
          Singing Habit
        </h1>
        <Breadcrumbs />
        <p className='content'>
          1. Sentence stems,
          2. "I choose to",
          3. Values
        </p>
        <PromptCard title={"Sentence Stem Prompt"} data={data.prompts.sentence_stems} />
        <hr />
        <Reward />
      </div>
    </section>
  )
}

export default Frame;