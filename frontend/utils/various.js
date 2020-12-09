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
