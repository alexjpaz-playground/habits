import React from 'react';

export function getDateTwoWeeksFromNow(current = new Date()) {
    var twoWeeksFromNow = new Date();
    twoWeeksFromNow.setDate(current.getDate() + 14);
    return twoWeeksFromNow;
}

export function useGoldlistDates(today = new Date()) {
    const d1 = getDateTwoWeeksFromNow(today);
    const d2 = getDateTwoWeeksFromNow(d1);
    const d3 = getDateTwoWeeksFromNow(d2);

    return {
        h: today,
        d1,
        d2,
        d3,
    };
    
}

export function DateTag({ type, date }) {
    let className = "";

    const classNames = {
        "h": "is-danger",
        "d1": "is-warning",
        "d2": "is-info",
        "d3": "is-success",
    };

    className = classNames[type];

    const formattedDate = date.toISOString()
        .slice(0,10)
        .slice(5)
        ;

    return (
        <span className={`tag ${className} is-light`}>{ formattedDate }</span>
    )
}

export default function GoldlistDateTags() {

    const dates = useGoldlistDates();

    return (
        <div>
            <h2 className='subtitle'>Goldlist Dates</h2>
            <div className='tags'>
                <DateTag date={dates.h} type="h" />
                <DateTag date={dates.d1} type="d1" />
                <DateTag date={dates.d2} type="d2" />
                <DateTag date={dates.d3} type="d3" />
            </div>
        </div>
    );
}