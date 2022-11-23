
import {
    Link,
} from "react-router-dom";

import * as React from 'react';
import Button from '@mui/material/Button';

function Frame({ children }) {
    return (
        <section className="section">
            <div className="container">
                {children}
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <Frame>
            <h1 className="title" data-testid="Home">Habits</h1>
            <div className="buttons">
              <Link to="singing" className="button is-large is-fullwidth">Singing</Link>
              <Link to="spanish" className="button is-large is-fullwidth">Spanish</Link>
              <Link to="journaling" className="button is-large is-fullwidth">Journaling</Link>
              <Link to="drums" className="button is-large is-fullwidth">Drums</Link>
              <Link to="music" disabled className="button is-large is-fullwidth">Music</Link>
            </div>
        </Frame>
    );
}