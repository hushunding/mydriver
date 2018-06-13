

let express = require('express');
let app = express();
const path = require('path')
const fs = require('fs')

// 初始化工作文件夹
const wd = 'UserData';
const cachedir = path.join(wd, 'cache')
const dbDir = path.join(wd, 'db')
for (const f of [wd, cachedir, dbDir]) {
  if (!fs.existsSync(f)) {
    fs.mkdirSync(f);
  }
}

//初始化数据库



const sitedir = path.join(__dirname, "..", "v", "dist", "v")

app.use('/', express.static(sitedir));
let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
