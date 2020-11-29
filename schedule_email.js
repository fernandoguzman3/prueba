const nodemailer = require('nodemailer')
const cron = require('node-cron');
const shell = require('shelljs');


cron.schedule("*/1 * * * *", async () => {
    console.log("scheduler");
    if(shell.exec("node hello.js").code !== 0){
        console.log("wrong");
    }
});