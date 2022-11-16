import React from 'react';

import {
  Link,
} from "react-router-dom";

const data = {
  prompts: {
    values: [
      "Acceptance",
      "Accomplishment",
      "Accountability",
      "Accuracy",
      "Achievement",
      "Adaptability",
      "Alertness",
      "Altruism",
      "Ambition",
      "Amusement",
      "Assertiveness",
      "Attentive",
      "Awareness",
      "Balance",
      "Beauty",
      "Boldness",
      "Bravery",
      "Brilliance",
      "Calm",
      "Candor",
      "Capable",
      "Careful",
      "Certainty",
      "Challenge",
      "Charity",
      "Cleanliness",
      "Clear",
      "Clever",
      "Comfort",
      "Commitment",
      "Common sense",
      "Communication",
      "Community",
      "Compassion",
      "Competence",
      "Concentration",
      "Confidence",
      "Connection",
      "Consciousness",
      "Consistency",
      "Contentment",
      "Contribution",
      "Control",
      "Conviction",
      "Cooperation",
      "Courage",
      "Courtesy",
      "Creation",
      "Creativity",
      "Credibility",
      "Curiosity",
      "Decisive",
      "Decisiveness",
      "Dedication",
      "Dependability",
      "Determination",
      "Development",
      "Devotion",
      "Dignity",
      "Discipline",
      "Discovery",
      "Drive",
      "Effectiveness",
      "Efficiency",
      "Empathy",
      "Empower",
      "Endurance",
      "Energy",
      "Enjoyment",
      "Enthusiasm",
      "Equality",
      "Ethical",
      "Excellence",
      "Experience",
      "",
      "Exploration",
      "Expressive",
      "Fairness",
      "Family",
      "Famous",
      "Fearless",
      "Feelings",
      "Ferocious",
      "Fidelity",
      "Focus",
      "Foresight",
      "Fortitude",
      "Freedom",
      "Friendship",
      "Fun",
      "Generosity",
      "Genius",
      "Giving",
      "Goodness",
      "Grace",
      "Gratitude",
      "Greatness",
      "Growth",
      "Happiness",
      "Hard work",
      "Harmony",
      "Health",
      "Honesty",
      "Honor",
      "Hope",
      "Humility",
      "Humor",
      "Imagination",
      "Improvement",
      "Independence",
      "Individuality",
      "Innovation",
      "Inquisitive",
      "Insightful",
      "Inspiring",
      "Integrity",
      "Intelligence",
      "Intensity",
      "Intuitive",
      "Joy",
      "Justice",
      "Kindness",
      "Knowledge",
      "Lawful",
      "Leadership",
      "Learning",
      "Liberty",
      "Logic",
      "Love",
      "Loyalty",
      "Mastery",
      "Maturity",
      "Meaning",
      "Moderation",
      "Motivation",
      "Openness",
      "Optimism",
      "Order",
      "Organization",
      "Originality",
      "Passion",
      "Patience",
      "Peace",
      "Performance",
      "Persistence",
      "Playfulness",
      "Poise",
      "Potential",
      "Power",
      "",
      "Present",
      "Productivity",
      "Professionalism",
      "Prosperity",
      "Purpose",
      "Quality",
      "Realistic",
      "Reason",
      "Recognition",
      "Recreation",
      "Reflective",
      "Respect",
      "Responsibility",
      "Restraint",
      "Results-oriented",
      "Reverence",
      "Rigor",
      "Risk",
      "Satisfaction",
      "Security",
      "Self-reliance",
      "Selfless",
      "Sensitivity",
      "Serenity",
      "Service",
      "Sharing",
      "Significance",
      "Silence",
      "Simplicity",
      "Sincerity",
      "Skill",
      "Skillfulness",
      "Smart",
      "Solitude",
      "Spirit",
      "Spirituality",
      "Spontaneous",
      "Stability",
      "Status",
      "Stewardship",
      "Strength",
      "Structure",
      "Success",
      "Support",
      "Surprise",
      "Sustainability",
      "Talent",
      "Teamwork",
      "Temperance",
      "Thankful",
      "Thorough",
      "Thoughtful",
      "Timeliness",
      "Tolerance",
      "Toughness",
      "Traditional",
      "Tranquility",
      "Transparency",
      "Trust",
      "Trustworthy",
      "Truth",
      "Understanding",
      "Uniqueness",
      "Unity",
      "Valor",
      "Victory",
      "Vigor",
      "Vision",
      "Vitality",
      "Wealth",
      "Welcoming",
      "Winning",
      "Wisdom",
      "Wonder",      
    ],
    sentence_stems: [
      "I choose to ... because ...",
      "As I mature I begin to notice ...",
      "I am becoming aware ...",
      "I see ...",
      "I am a ...",
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
        <PromptCard title={"Sentence Stem Prompt"} data={data.prompts.sentence_stems} />
        <PromptCard title={"Values"} data={data.prompts.values} />
        <hr />
        <Reward />
      </div>
    </section>
  )
}

export default Frame;