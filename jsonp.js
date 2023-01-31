function addScript(src) {
  const script = document.createElement('script');
  script.scr = src;
  script.type = 'text/javascript';
  document.body.appendChild(script);
}

function handleRes(res) {
  console.log(res);
}

addScript("https://xxx.xxx.com/xxx.js?callback=handleRes")

// 后端部分
const http = require('http');
const url = require('url');

const data = {name: 'tsuizen', age: 26};

const server = http.createServer((request, response) => {
  let cb = url.parse(request.url, true).query.callback;

  if (cb) {
    response.writeHead(200, {
      'Content-Type': 'application/json;charset-utf-8'
    });
    response.end(cb + '(' + JSON.stringify(data) + ')');
  }
})

server.listen(3000, () => {
  console.log("server is listening 3000");
})
