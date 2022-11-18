import React from "react";

import { Breadcrumbs } from "./Breadcrumbs";
  
export default function Drums() {
    return (
        <section className="section">
        <div className="container">
          <h1 className="title">
            Drumming Habit
          </h1>
          <Breadcrumbs />
          <hr />
          <a className="button is-large" href='https://trello.com/c/ZEF8DZaV/137-learn-to-drum'>Rudiments</a>
        </div>
      </section>
    )
}