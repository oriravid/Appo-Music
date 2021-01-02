////////////// SORTING //////////////

// release date comparison, input array of objects
// releaseDate: "YYYY-MM-DD"
export const dateSorter = (album1, album2) => {
    const date1 = album1.releaseDate.split("-");
    const date2 = album2.releaseDate.split("-");

    if (date1[0] > date2[0]) {
        return -1;
    } else if (date1[0] < date2[0]) {
        return 1;
    }

    if (date1[1] > date2[1]) {
        return -1;
    } else if (date1[1] < date2[1]) {
        return 1;
    }

    if (date1[2] > date2[2]) {
        return -1;
    } else if (date1[2] < date2[2]) {
        return 1;
    }

    return 0;
};

export const savedSorter = (album1, album2) => {
    const saved1 = album1.savedAt.split(" ");
    const saved2 = album2.savedAt.split(" ");

    //compare dates
    const date1 = saved1[0].split("-");
    const date2 = saved2[0].split("-");

    if (date1[0] > date2[0]) {
        return -1;
    } else if (date1[0] < date2[0]) {
        return 1;
    }

    if (date1[1] > date2[1]) {
        return -1;
    } else if (date1[1] < date2[1]) {
        return 1;
    }

    if (date1[2] > date2[2]) {
        return -1;
    } else if (date1[2] < date2[2]) {
        return 1;
    }

    //compare times 20:33:57 HH:MM:SS
    const time1 = saved1[1].split(":");
    const time2 = saved2[1].split(":");

    if (time1[0] > time2[0]) {
        return -1;
    } else if (time1[0] < time2[0]) {
        return 1;
    }

    if (time1[1] > time2[1]) {
        return -1;
    } else if (time1[1] < time2[1]) {
        return 1;
    }

    if (time1[2] > time2[2]) {
        return -1;
    } else if (time1[2] < time2[2]) {
        return 1;
    }

    return 0;
};

// play count comparison, input array of objects
export const popularSorter = (obj1, obj2) => {
    if (obj1.playCount > obj2.playCount) {
        return -1;
    } else if (obj1.playCount < obj2.playCount) {
        return 1;
    }
    return 0;
};

export const indexSorter = (obj1, obj2) => {
    if (obj1.trackNumber > obj2.trackNumber) {
        return 1;
    } else if (obj1.trackNumber < obj2.trackNumber) {
        return -1;
    }
    return 0;
};

////////////// FORMATTING //////////////

//input yyyy-mm-dd
//prettier-ignore
export const dateFormatter = (date, short) => {
    const months = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December",
    };

    const parts = date.split("-");
    var month = parts[1],
        day = parts[2],
        year = parts[0];

    if (day[0] == 0) {
        day = day[1]
    }

    return `${short ? months[month].slice(0,3) : months[month]} ${day}, ${year}`;
};

export const timeFormatter = (time) => {
    var seconds = Math.ceil(time);
    if (seconds < 10) {
        return `0:0${seconds}`;
    } else if (seconds < 60) {
        return `0:${seconds}`;
    } else {
        var minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
        if (seconds < 10) {
            return `${minutes}:0${seconds}`;
        } else {
            return `${minutes}:${seconds}`;
        }
    }
};

////////////// OTHER //////////////

// array of times input
export const timeAdder = (times) => {
    let counter = 0;

    times.forEach((time) => {
        const parts = time.split(":");
        var min = parseInt(parts[0]);
        var sec = parseInt(parts[1]);
        counter += min * 60;
        counter += sec;
    });

    const totalMinutes = Math.floor(counter / 60);

    if (totalMinutes < 60) {
        return `${totalMinutes} Minutes`;
    } else if (totalMinutes == 60) {
        return "1 Hour";
    } else {
        return `1 Hour ${totalMinutes - 60} Minutes`;
    }
};

// picks an index from the queue that hansn't been played yet
export const indexPicker = (queueLength, playedIndecies) => {
    var newIndex = Math.floor(Math.random() * Math.floor(queueLength));
    if (playedIndecies.includes(newIndex)) {
        return indexPicker(queueLength, playedIndecies);
    } else {
        return newIndex;
    }
};

//prettier-ignore
export const consoleArt = () => {
console.log(
    "%c \n\
⎜                      \n\
⎜   APPO MUSIC                     \n\
⎜   By Ori Ravid                     \n\
⎜                     \n\
⎜   Built With:\n\
⎜    • React\n\
⎜    • ES6\n\
⎜    • Redux\n\
⎜    • Rails\n\
⎜    \n\
⎜    This project is purley for educational purposes, \n\
⎜    no copyright infringement intended.                  \n\
⎜                      \n\
⎜    Contact:                  \n\
⎜    • oriravid@att.net\n\
⎜    • oriravid.com\n\
⎜                      \n\
\n\
",
    "color: #00adef;"
);
    
};
