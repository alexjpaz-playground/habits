import React from 'react';

const DAY_IN_MS = 1000 * 60 * 60 * 24;
const TWO_WEEKS_IN_MILLISECONDS = DAY_IN_MS * 14;

export function getDateFromDuration(current = null, duration = 0) {
    var dateFromDuration = new Date(current.getTime() + duration);
    return dateFromDuration;
}

export function getDateTwoWeeksFromNow(current = null) {
    return getDateFromDuration(current, TWO_WEEKS_IN_MILLISECONDS);
}

export function useGoldlistDates(today = new Date()) {
    const d1 = getDateTwoWeeksFromNow(today);
    const d2 = getDateTwoWeeksFromNow(d1);
    const d3 = getDateTwoWeeksFromNow(d2);

    return [
        today,
        d1,
        d2,
        d3,
    ];
    
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

    const formattedDate = date
        .toISOString()
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
                <DateTag date={dates[0]} type="h" />
                <DateTag date={dates[1]} type="d1" />
                <DateTag date={dates[2]} type="d2" />
                <DateTag date={dates[3]} type="d3" />
            </div>
        </div>
    );
}