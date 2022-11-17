import React from 'react';

import data from "./data";


function pickRandomItemFromArray(array = [], previousValue = null) {
    const randomElement = array[Math.floor(Math.random() * array.length)];

    if (previousValue && previousValue === randomElement) {
        return pickRandomItemFromArray(array, previousValue);
    }

    return randomElement;
}

function PromptCard({ title, data }) {
    const [prompt, setPrompt] = React.useState(pickRandomItemFromArray(data) || []);

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
                    <span>{prompt[0]}</span>
                </div>
                <span className='tag is-info'>{prompt[1]}</span>
            </div>
            <footer className="card-footer" onClick={onClick}>
                <a href="#/" aria-current="page" className="card-footer-item">Pick another word</a>
            </footer>
        </div>
    )
}

export default function VowelSubstitutionCard() {
    return (
        <PromptCard title={"Words by usage (subtitute vowels)"} data={data.common_words_by_usage} />
    );
}