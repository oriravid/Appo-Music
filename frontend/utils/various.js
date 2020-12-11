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
    } else if (date1[0] < date2[0]) {
        return 1;
    }

    if (date1[2] > date2[2]) {
        return -1;
    } else if (date1[0] < date2[0]) {
        return 1;
    }

    return 0;
};

//input yyyy-mm-dd
//prettier-ignore
export const dateFormatter = (date) => {
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

    return (`${months[month]} ${day}, ${year}`)
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

    const totalMinutes = Math.ceil(counter / 60);

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

// shuffles queue when shuffle toggled on
// export const arrayShuffler = (array) => {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }

//     return array;
// };

// play count comparison, input array of objects
export const trackSorter = (track1, track2) => {
    if (track1.playCount > track2.playCount) {
        return -1;
    } else if (track1.playCount < track2.playCount) {
        return 1;
    }
    return 0;
};
