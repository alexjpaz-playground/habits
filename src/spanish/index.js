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
                <div className="content is-large">
                    <p>{noun[0]} / {noun[1]} </p>
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

function NounTabs() {

    const [ currentCardIndex, setcCurrentCardIndex ] = React.useState(0);

    const cards = [
        { title: "🍎 Nouns for food", data: data.nouns.food },
        { title: "⏰ Nouns for time", data: data.nouns.time },
        { title: "🌍 Nouns for places", data: data.nouns.places },
        { title: "💁‍♀️ Nouns for people", data: data.nouns.people },
        { title: "🥁 Nouns for things", data: data.nouns.things },
    ];

    const currentCard = cards[currentCardIndex];

    const onClick = (cardIndex) => (e) => {
        e.stopPropagation();
        setcCurrentCardIndex(cardIndex);
    };

    return (
        <div>
            <div className="tabs is-large is-toggle">
                <ul>
                    {cards.map((card, cardIndex) => (
                        <li className={cardIndex === currentCardIndex ? "is-active" : ""} key={card.title} onClick={onClick(cardIndex)}>{ card.title }</li>
                    ))}
                </ul>
            </div>
            <NounCard {...currentCard} />
        </div>
    )
}

function WordGenerator() {

    return (
        <div>
            <WordCard title={"🏃‍♂️ Common verbs"} data={data.verbs.common} />
            <hr />
            <NounTabs />
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
                <div className='content'>
                    <p>Update headlist and revisit <a href='https://trello.com/c/8GPMxgbd/32-goldlist-method' className='has-text-warning'>goldlist</a> every two weeks</p>
                </div>
                <nav>
                    <a className='button' href="https://trello.com/b/ax7ncswJ/spanish">References</a>
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