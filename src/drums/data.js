
const data = {};

data.rudiments = [];

data.rudiments = data.rudiments.concat([
    {
        title: "01: SINGLE STROKE ROLL",
        imageUrl: "https://vicfirth.zildjian.com/media/amasty/blog/1.png",
        examples: [
            "https://vicfirth.zildjian.com/education/01-single-stroke-roll.html",
            "https://www.40drumrudiments.com/single-stroke-roll/",
        ]
    },
    {
        title: "04: Multiple Bounce Roll",
        imageUrl: "https://vicfirth.zildjian.com/media/amasty/blog/4.png",
        examples: [
            "https://vicfirth.zildjian.com/education/02-single-stroke-four.html",
            "https://www.40drumrudiments.com/multiple-bounce-roll/",
        ]
    },
    {
        title: "06: DOUBLE STROKE (OPEN) ROLL",
        imageUrl: "https://vicfirth.zildjian.com/media/amasty/blog/6.png",
        examples: [
            "https://vicfirth.zildjian.com/education/06-double-stroke-roll.html",
            "https://www.40drumrudiments.com/double-stroke-roll/",
        ]
    },
    {
        title: "16: SINGLE PARADIDDLE",
        imageUrl: "https://vicfirth.zildjian.com/media/amasty/blog/16.png",
        examples: [
            "https://vicfirth.zildjian.com/education/16-single-paradiddle.html",
            "https://www.40drumrudiments.com/single-paradiddle/",
        ]
    },
    {
        title: "20: FLAM",
        imageUrl: "https://vicfirth.zildjian.com/media/amasty/blog/20.png",
        examples: [
            "https://vicfirth.zildjian.com/education/20-Flam.html",
            "https://www.40drumrudiments.com/flam/"
        ]
    },
    {
        title: "31: DRAG",
        imageUrl: "https://vicfirth.zildjian.com/media/amasty/blog/31.png",
        examples: [
            "https://vicfirth.zildjian.com/education/31-drag.html",
            "https://www.40drumrudiments.com/drag-ruff/",
        ]
    }  
].map((i) => {
    i.tier = 1;
    return i;
}));

data.rudiments = data.rudiments.concat([
    {
        title: "02: SINGLE STROKE FOUR",
        imageUrl: "https://vicfirth.zildjian.com/media/amasty/blog/2.png",
        examples: [
            "https://vicfirth.zildjian.com/education/02-single-stroke-four.html",
            "https://www.40drumrudiments.com/single-stroke-four/",
        ],
    },
    {
        title: "03: SINGLE STROKE SEVEN",
        imageUrl: "https://vicfirth.zildjian.com/media/amasty/blog/3.png",
        examples: [
            "https://vicfirth.zildjian.com/education/03-single-stroke-seven.html",
            "https://www.40drumrudiments.com/single-stroke-four/",
        ],
    },
    {
        title: "17: DOUBLE PARADIDDLE",
        imageUrl: "https://vicfirth.zildjian.com/media/amasty/blog/17.png",
        examples: [
            "https://vicfirth.zildjian.com/education/17-double-paradiddle.html",
            "https://www.40drumrudiments.com/double-paradiddle/",
        ],
    }
].map((i) => {
    i.tier = 2;
    return i;
}));

export default data;