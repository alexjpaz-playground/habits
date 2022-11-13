
import {
    Link,
} from "react-router-dom";

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
            <h1 className="title">Habits</h1>
            <div className="buttons">
              <Link to="singing" class="button is-large is-fullwidth">Singing</Link>
              <Link to="spanish" class="button is-large is-fullwidth">Spanish</Link>
              <Link to="journaling" class="button is-large is-fullwidth">Journaling</Link>
            </div>
        </Frame>
    );
}