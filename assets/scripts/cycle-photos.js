"use strict";

const sources = {
    header: [
        "./assets/images/interior-header-0.jpg",
        "./assets/images/interior-header-1.jpg",
    ],
    portfolio: [
        "./assets/images/interior-section-0.jpg",
    ],
    projects: [
        "./assets/images/interior-section-1.jpg",
    ],
    "about-me": [
        "./assets/images/interior-section-2.jpg",
    ],
    contact: [
        "./assets/images/interior-section-3.jpg",
    ],
}

const timer = function(time) {
    return new Promise((res) => {
        setTimeout(() => {
            res();
        }, time);
    });
}

async function cyclePhotos(sources, id) {
    let ref = null;
    let i = 0;
    if (sources.length > 1) {
        while (true) {
            if (i >= sources.length - 1) {
                i = 0;
            } else {
                i++;
            }
    
            await timer(2000);
            if (!ref) {
                console.log(`Memoizing element ${id}`);
                ref = document.getElementById(id);
            }
    
            console.log(`Updating ${id}`);
            ref.style["background-image"] = `url("${sources[i]}")`;
        }
    } else {
        console.log(`Only one image for ${id}. Ending cyle`);
    }
}

Object.keys(sources).forEach(key => {
    console.log(`Cycling photos for ${key}`)
    cyclePhotos(sources[key], key);
})