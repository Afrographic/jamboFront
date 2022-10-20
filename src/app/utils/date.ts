const monthMap: any = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
}

export function publishDate(date: any) {
    //date: YYYY-MM-DDTHH:mm:ss:sssZ

    var dateObj = new Date(date);
    var day = dateObj.getUTCDate();
    var month = monthMap[dateObj.getMonth()];
    var year = dateObj.getFullYear();


    var time = new Date();

    let timeString = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    return day + " " + month + ", " + year + ' | ' + timeString;
}  