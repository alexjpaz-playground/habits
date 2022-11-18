import React from "react";

import { Breadcrumbs } from "./Breadcrumbs";

import data from "./data";

export function useData() {
    return data;
}

export function RudimentsCard(props) {


    return (
        <div className="">
            <h2 className="title"><a href={props.titleUrl}>{props.title}</a></h2>
            <div style={{"height":"20rem"}}>
                <iframe title={props.title} width="100%" height="100%" src={props.videoUrl} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
            </div>
      </div>
    );
}

export function RudimentsCardSet() {
    const data = useData();

    return (
      <div className="">
        { data.rudiments.map((rudiment) => (
            <RudimentsCard {...rudiment} />
        )) }
      </div>
    );
}
  
export default function Drums() {
    return (
        <section className="section">
        <div className="container">
          <h1 className="title">
            Drumming Habit
          </h1>
          <Breadcrumbs />
          <hr />
          <div className="buttons">
             <a className="button is-large" href='https://trello.com/c/ZEF8DZaV/137-learn-to-drum'>Trello Board</a>
             <a className="button is-large" href='https://vicfirth.zildjian.com/education/40-essential-rudiments.html'>Rudiments (vic)</a>
             <a className="button is-large" href='https://www.40drumrudiments.com/'>Rudiments (vic)</a>
          </div>
          <hr />
          <RudimentsCardSet />
        </div>
      </section>
    );
}