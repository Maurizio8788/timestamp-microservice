const express = require('express');
const {isValidTimestampOrDate, getTodayTimeStamp, getTodatUTCDate, getTimeStamp, getUTCDate} = require("../utils/date");
const router = express.Router();

router.get('', function(req, res, next) {
    res.json({ unix:getTodayTimeStamp(), utc:getTodatUTCDate() } );
});

router.get('/:date', function(req, res, next) {
    if(!isValidTimestampOrDate(req.params?.date?.toString())) {
        res.json({ error:"Invalid Date" } );
    }

    let isUnixTimestamp = /^\d{13}$/.test(req.params?.date?.toString());
    let isDate = /^\d{4}-\d{2}-\d{2}$/.test(req.params?.date?.toString());

    if (isUnixTimestamp) {
        const utc= getUTCDate(req.params?.date?.toString());
        res.json({ unix:getTimeStamp( new Date(req.params?.date?.toString()) ), utc } );
    }
    if (isDate) {
        const dateParsed = getTimeStamp( new Date(req.params?.date?.toString()) );
        res.json({ unix:dateParsed, utc: getUTCDate(req.params?.date?.toString()) } );
    }

});

module.exports = router;
