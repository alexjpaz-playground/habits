import React from 'react';
import { Link } from "react-router-dom";

export function Breadcrumbs({ title, path }) {
  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li> <Link to="/">Habits</Link></li>
        <li className="is-active"><a href={path} aria-current="page">{ title }</a></li>
      </ul>
    </nav>
  );
}
