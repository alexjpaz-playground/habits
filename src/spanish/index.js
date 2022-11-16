import React from 'react';

import {
    Link,
} from "react-router-dom";  

import GoldlistDateTags from './GoldlistDateTags';

import data from './data';

function Breadcrumbs() {
    return (
        <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li> <Link to="/">Habits</Link></li>
                <li className="is-active"><a href="/spanish" aria-current="page">Spanish</a></li>
            </ul>
        </nav>
    );
}

function pickRandomNoun(array = []) {
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
}

function NounCard(props) {
    return <WordCard {...props} />
}

function WordCard({ title, data }) {
    const [ noun, setNoun ] = React.useState(pickRandomNoun(data) || []);

    const onClick = () => {
        setNoun(pickRandomNoun(data));
    };

    return (
        <div className="card" style={{ "marginBottom": "0.5rem" }}>
            <header className="card-header">
                <p className="card-header-title">{ title }</p>
            </header>
            <div className="card-content">
                <div className="content">
                    <h2>{noun[0]} / {noun[1]} </h2>

                </div>
            </div>
            <footer className="card-footer" onClick={onClick}>
                <a href="#/" aria-current="page" className="card-footer-item">Pick a word</a>
            </footer>
        </div>
    )
}

function PhraseGenerator() {

    return (
        <div>
            <WordCard title={"🏃‍♂️ Common phrases"} data={data.phrases.common} />
        </div>
    );
}

function WordGenerator() {

    return (
        <div>
            <WordCard title={"🏃‍♂️ Common verbs"} data={data.verbs.common} />
            <hr />
            <NounCard title={"🍎 Nouns for food"} data={data.nouns.food} />
            <NounCard title={"⏰ Nouns for time"} data={data.nouns.time} />
            <NounCard title={"🌍 Nouns for places"} data={data.nouns.places} />
            <NounCard title={"💁‍♀️ Nouns for people"} data={data.nouns.people} />
            <WordCard tite={"🥁 Nouns for things"} data={data.nouns.things} />
            <hr />
            <WordCard title={"🟩 Adjectives / Adverbs"} data={data.misc.adjective_adverbs} />
            <WordCard title={"✍🏽 Connectors"} data={data.misc.connectors} />
        </div>
    );
}

export default function Frame() {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">
                    Spanish Habit
                </h1>
                <Breadcrumbs />
                <p className='content'>Update headlist and revisit goldlist every two weeks</p>
                <nav>
                    <a className='button is-link' href="https://trello.com/b/ax7ncswJ/spanish">References</a>
                </nav>
                <hr />
                <GoldlistDateTags />
                <hr />
                <h2 className="subtitle">
                    Phrase Generators
                </h2>
                <PhraseGenerator />
                <h2 className="subtitle">
                    Word Generators
                </h2>
                <WordGenerator />
            </div>
        </section>
    )
}