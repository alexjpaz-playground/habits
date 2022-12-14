import React from "react";

import { HabitHeader } from "../common/HabitHeader";

import data from "./data";

export function useData() {
    return data;
}

export function CheckMarkButton(props) {
    const [ isChecked, setIsChecked] = React.useState(false);

    const onClick = () => {
        setIsChecked(v => true);
    };

    const classNames = ["button"];

    if(isChecked) {
        classNames.push("is-success");
    } else {
        classNames.push("is-info")
    }

    const className = classNames.join(" ");

    return (
        <a className={className} href="#done" onClick={onClick}>Mark Complete</a>
    );
}

export function RudimentsImage(props) {
    return (
        <img alt={props.title} src={props.imageUrl} style={{"mixBlendMode":"soft-light","border":"solid 6px white"}} />
    );
}

export function RudimentsCard(props) {


    return (
        <div className="box" style={{ "marginBottom": "0.5rem" }}>
            <h4 className="subtitle">{ props.title }</h4>
            <a href={props.examples[0]} rel="noreferrer" target="_blank"><RudimentsImage {... props} /></a>
            <div className="buttons">
                <CheckMarkButton />
                <a className="button" rel="noreferrer" target="_blank" href={props.examples[1]}>Explanation</a>
            </div>
        </div>
    );
}

export function RudimentsCardSet() {
    const data = useData();

    return (
      <div className="">
        <h2 className="title">Tier One</h2>
        { data.rudiments.filter(d => d.tier === 1).map((rudiment) => (
            <RudimentsCard {...rudiment} />
        )) }
        <h2 className="title">Tier Two</h2>
        { data.rudiments.filter(d => d.tier === 2).map((rudiment) => (
            <RudimentsCard {...rudiment} />
        )) }
        <hr />
         <h2 className="title">All</h2>
        { data.rudiments_raw.map((rudiment) => (
            <RudimentsCard {...rudiment} />
        )) }
      </div>
    );
}
  
export default function Drums() {
    return (
        <section className="section">
        <div className="container">
            <HabitHeader title={"Drums"} path={"/drums"} description={(
                <div>
                    <p>Just Drum bro!</p>
                </div>
            )} />
          <RudimentsCardSet />
          <hr />
          <div className="buttons">
             <a className="button is-large" href='https://vicfirth.zildjian.com/education/essential-rudiments-introduction.html'>Tier List</a>
             <a className="button is-large" href='https://vicfirth.zildjian.com/education/40-essential-rudiments.html'>Essential Rudiments</a>
             <a className="button is-large" href='https://www.40drumrudiments.com/'>Rudiments Explanations</a>
          </div>
          <hr />
        </div>
      </section>
    );
}