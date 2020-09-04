const fs = require('fs'); // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getHTMLPage = (request, response, path) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(path);
  response.end();
};

const getIndex = (request, response) => {
  getHTMLPage(request, response, index);
};

const getPage2 = (request, response) => {
  getHTMLPage(request, response, page2);
};

const getPage3 = (request, response) => {
  getHTMLPage(request, response, page3);
};

module.exports = {
  getIndex,
  getPage2,
  getPage3,
};
