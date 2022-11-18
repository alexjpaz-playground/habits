
import {
    Link,
} from "react-router-dom";

import { routerData } from "./routes";

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
            { routerData
                .filter(r => r.path !== "/")
                .map(r => (
                <Link to={r.path} class="button is-large is-fullwidth">{r.path}</Link>
            )) }
            </div>
        </Frame>
    );
}