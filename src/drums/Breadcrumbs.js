import React from "react";
import { Link } from "react-router-dom";

export function Breadcrumbs() {
    return (
        <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li> <Link to="/">Habits</Link></li>
                <li className="is-active"><a href="/drums" aria-current="page">drums</a></li>
            </ul>
        </nav>
    );
}
