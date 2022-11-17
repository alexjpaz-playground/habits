import React from "react"

export function VowelSubstitutionModal() {
    return (
        <div>
            <div className="content">
                <img alt='vowel chart' src='/singing/images/vowels-inverted.png' />
            </div>
            <div className="columns is-mobile">
                    <div className="column">
                        <ul>
                            <li>EE - beet</li>
                            <li>AY - bait</li>
                            <li>IH - bit</li>
                            <li>EH - bet</li>
                            <li>AA - bat</li>
                        </ul>
                    </div>
                    <div className="column">
                        <ul>
                            <li>OO - boot</li>
                            <li>OH - boat</li>
                            <li>OU - book</li>
                            <li>UH - but</li>
                            <li>AH - bot</li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}

export default function VowelSubstitutionButton() {

    const [displayModal, setDisplayModal] = React.useState(false);

    const onClick = () => {
        setDisplayModal(c => !c);
    };

    return (
        <div>
            <button className="button" onClick={onClick}>Open Vowel Chart</button>
            {displayModal && <VowelSubstitutionModal />}
        </div>
    )
}