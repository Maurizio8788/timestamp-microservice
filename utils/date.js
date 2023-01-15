const moment = require('moment');
function isValidTimestampOrDate(value) {
    if(Number.isInteger(value)){
        let timestamp = value * 1000;
        return !isNaN(new Date(timestamp).getTime());
    }
    return !isNaN(Date.parse(value));
}

function getTodayTimeStamp() {
    return moment().valueOf();
}

function getTodatUTCDate() {
    return moment.utc().format('ddd, DD MMM YYYY HH:mm:ss [GMT]');
}

function getTimeStamp(timestamp) {
    return moment(timestamp,"YYYY-MM-DD").valueOf();
}

function getUTCDate(data) {
    return moment.utc(data).format("ddd, DD MMM YYYY HH:mm:ss [GMT]");
}

module.exports = {
    isValidTimestampOrDate,
    getTodayTimeStamp,
    getTodatUTCDate,
    getTimeStamp,
    getUTCDate
}