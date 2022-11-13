
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
            <Link to="singing" class="button is-large is-fullwidth">Singing</Link>
        </Frame>
    );
}