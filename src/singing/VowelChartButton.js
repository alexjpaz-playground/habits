import React from "react"

export function VowelSubstitutionModal() {
    return (
        <div>
            <div className="content">
                <img alt='vowel chart' src='/singing/images/vowels.jpg' />
            </div>
            <p className="has-text-centered">Light to Dark</p>
            <div className="columns is-mobile">
                <div className="column has-text-centered">
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
            <div className="dropdown is-active">
                <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={onClick}>
                    <span>View Vowel Chart</span>
                    <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
                </div>
            </div>
            {displayModal && <VowelSubstitutionModal />}
        </div>
    )
}