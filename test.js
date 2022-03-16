


const fetch = require('node-fetch')

//把openid放到下面即可
var openIdList=["一串字符1","一串字符2"]


var m = 61;
var s = 60;
var delay = m * s * 1000;


var now = Math.round(new Date() / 1000)


var task = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      now = Math.round(new Date() / 1000)
      var nownow = new Date(now * 1000);
      console.log(nownow.getMonth() + 1 + "." + nownow.getDate() + " " + nownow.getHours() + ":" + nownow.getMinutes() + ":" + nownow.getSeconds())
      taskitem()
      resolve();
    }, 0);
  });
}

var run = function () {
  task().then(function () {
    setTimeout(function () {
      console.log("")
      run();
    }, delay)
  });
}

run();

var taskitem = function () {
  openIdList.forEach(id=>goget(id));
}

var goget = function (openid) {
  fetch("http://mlib.cdut.cn/yy/WxYy2.aspx?openId="+openid, {
    "headers": {
      "accept":
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "zh-CN,zh;q=0.9",
      "cache-control": "max-age=0",
      "content-type": "application/x-www-form-urlencoded",
      "upgrade-insecure-requests": "1",
      "cookie": "ASP.NET_SessionId=1k0kem5w0cfqtr2csxg05342"
    },
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body":
      "__VIEWSTATE=oZpKHeGhWeOM0TY%2Fw%2BA25%2Bp9e1VG6Q1N%2FbiAj2gPGjucv3jvTAJnnDo%2BpwaiVDjkybYdPTgMDkmBcP4747udPLDfjeLrAGAEdBCsoKkC0ye%2FQgOf6zHj8Qk39CoPknx%2FLNrqbm65QG1GQ3a8K5%2Fw0698YrUtfwMyHCcc5XwQq%2BCk2ADyz0AuwcmcweZtlVULqhSl1OeIOeNgVWQu9H0NX3qpsJcrLcs%2FPOPfiPk0KwtFH9SfmcMJSmiXjYslsQtG6KUeYzMT3S48WRaTR1xLBkcpXjTuX6gDLQEHhpF5vLnflSR8z8ZzG1XFSL3weRCeLHEZHztvhQLAv56sEz6LY9fzV2zXCMbQRcdD6q2PCJ1wu7KdKDNiRE%2Fva69vbhk18fYLzHuicL0gQJM0vlOGjeC0hHNdNyQsbVLp%2F%2F%2B7zctiepiO1ju3jQGfTbuhvKvQUfAzcx9Z5sHSrfqwyqp1u10XAbB4V%2BsTKwwEeoZWPCw%3D&__VIEWSTATEGENERATOR=29D80D0A&__EVENTVALIDATION=Xb7BqXDDVpD8StTNnSd%2BcaHNI7dC8emybyRCB8yoRtMRRVZ3XW5QNSBaKKS896DqREBaSU8vyIHlYtpug40ZpoFFeZV39SM5A2nmdwLyT8YLWFPdkTpYBo3MAVQpjLN%2Fi216K%2BfxdsvSCSPm1opHFfXvk%2B6zeVkC%2FB6WrQM4fcPeTDzkCb%2BaRsyezJN97eG7MVhGuZEdRWH11OGUd%2BK0biTc3Yp%2BB96xks6xJs6OY0j1m2CjShZmskaask1Udljq&hiddenOpenId="+openid+"&hiddenTimestamp=" + now + "&card_id=&card_password=&Reservation=",
    "method": "POST",
    "mode": "cors"
  })
    .then((response) => {
      console.log("people1:" + now)
      //console.log(response)
    })
}



