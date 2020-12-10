//input yyyy-dd-mm
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
    var month = parts[2],
        day = parts[1],
        year = parts[0];

    if (day[0] == 0) {
        day = day[1]
    }

    return (`${months[month]} ${day}, ${year}`)
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
export const arrayShuffler = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
};
