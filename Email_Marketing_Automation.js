// node Email_Marketing_Automation.js --url="https://www.infohindihub.in/2021/03/free-bulk-email-id-list-1000-active.html"

//npm init -y
//npm install puppeteer
//npm install minimist
// npm install nodemailer
// npm install xlsx

let minimist = require("minimist");
let puppeteer = require("puppeteer");
let xlsx = require("xlsx");
let fs = require("fs");
let nodemailer = require("nodemailer");

let args = minimist(process.argv);


let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mzzu221@gmail.com",
    pass: "Testing123@#",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

let mailOptions = {
  from: "mzzu221@gmail.com",
  to:[
    
    "1prabhanshu@gmail.com",
    "abhinani24@gmail.com",
    "abhishekti478@gmail.com",
    "aditya.ranjan09@gmail.com",
    "adityabose7@gmail.com",
    "akhileshbhambhani@gmail.com",
    "akrajawat20@gmail.com",
    "aksandhu90@gmail.com",
    "akshayshahu000@gmail.com",
    "aloky836@gmail.com",
    "am27491@gmail.com",
    "amarjun7@gmail.com",
    "amarpritsingh1989@gmail.com",
    "amit.harbola11@gmail.com",
    "anandrungta27@gmail.com",
    "anandsingh3k@gmail.com",
    "aneeshbanyal2011@gmail.com",
    "anilsasmal15@gmail.com",
    "anoop971@gmail.com",
    "anuj8315@gmail.com",
    "arkindia4@gmail.com",
    "arunthakur0g19@gmail.com",
    "ashishvedula@gmail.com",
    "ashraf.btech406@gmail.com",
    "ashu.rock25@gmail.com",
    "ashu2712.priya@gmail.com",
    "atripathi27@gmail.com",
    "atulkarki1991@gmail.com",
    "bishnuroy72@gmail.com",
    "bpnkesharwani@gmail.com",
    "chimanchandra23@gmail.com",
    "daljeet.kalsi1989@gmail.com",
    "dameet6@gmail.com",
    "deepakjh69@gmail.com",
    "deepakvarma891@gmail.com",
    "deeptendra12@gmail.com",
    "deshbandhusaini51@gmail.com",
    "dhirendr091@gmail.com",
    "dpkshrm1992@gmail.com",
    "edgarjrojasl@gmail.com,",
    "eenishoda@gmail.com,",
    "electronix84@gmail.com",
    "erhakkaya@gmail.com,",
    "eric.nay@gmail.com",
    "eric.neilson@gmail.com",
    "eric.nelson@gmail.com",
    "eric.newcomer@gmail.com",
    "eric.o.neil@gmail.com",
    "eric.odonnell@gmail.com",
    "eric.ogren@gmail.com"
] ,

  subject: " testing",
  text: " Mail sent using nodemailer. This mail is sent by automated software, https://www.youtube.com/watch?v=SvTBYWUztJ8 ",

};
transporter.sendMail(mailOptions, function (err, success) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent successfully");
  }
});

run();
async function run() {
  // starting the browser
  let browser = await puppeteer.launch({
    defaultViewport: null,
    args: ["--start-maximized"],
    headless: false,
  });
  // get a tab
  let pages = await browser.pages();
  let page = pages[0];

  // go to the url
  await page.goto(args.url);

  // extracting email id from the website ..
  let mails = await page.$$eval("p > span", (spans) =>spans.map((span) => span.textContent));

  // creating a json file of emailids...
  let mailsKaJSON = JSON.stringify(mails);
  fs.writeFileSync("mails-id.json", mailsKaJSON, "utf-8");
 
  // creating a excel file to store the email id..
  let aoamails = mails.map((m) => [m]);

  let wb = xlsx.utils.book_new();
  let ws = xlsx.utils.aoa_to_sheet(aoamails);
  xlsx.utils.book_append_sheet(wb, ws);
  xlsx.writeFile(wb, "email-ids.xlsx");

  await browser.close();
}
