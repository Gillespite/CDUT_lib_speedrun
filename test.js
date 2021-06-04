


const fetch = require('node-fetch')


var m = 50;
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
  lijipeng();
  guotianyin();
  yeyunxi();
}

var people1 = function () {
  fetch("http://mlib.cdut.cn/yy/WxYy2.aspx?openId=oozmJsxaUQrTgff0GzjilUA29Mbk", {
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
      "__VIEWSTATE=oZpKHeGhWeOM0TY%2Fw%2BA25%2Bp9e1VG6Q1N%2FbiAj2gPGjucv3jvTAJnnDo%2BpwaiVDjkybYdPTgMDkmBcP4747udPLDfjeLrAGAEdBCsoKkC0ye%2FQgOf6zHj8Qk39CoPknx%2FLNrqbm65QG1GQ3a8K5%2Fw0698YrUtfwMyHCcc5XwQq%2BCk2ADyz0AuwcmcweZtlVULqhSl1OeIOeNgVWQu9H0NX3qpsJcrLcs%2FPOPfiPk0KwtFH9SfmcMJSmiXjYslsQtG6KUeYzMT3S48WRaTR1xLBkcpXjTuX6gDLQEHhpF5vLnflSR8z8ZzG1XFSL3weRCeLHEZHztvhQLAv56sEz6LY9fzV2zXCMbQRcdD6q2PCJ1wu7KdKDNiRE%2Fva69vbhk18fYLzHuicL0gQJM0vlOGjeC0hHNdNyQsbVLp%2F%2F%2B7zctiepiO1ju3jQGfTbuhvKvQUfAzcx9Z5sHSrfqwyqp1u10XAbB4V%2BsTKwwEeoZWPCw%3D&__VIEWSTATEGENERATOR=29D80D0A&__EVENTVALIDATION=Xb7BqXDDVpD8StTNnSd%2BcaHNI7dC8emybyRCB8yoRtMRRVZ3XW5QNSBaKKS896DqREBaSU8vyIHlYtpug40ZpoFFeZV39SM5A2nmdwLyT8YLWFPdkTpYBo3MAVQpjLN%2Fi216K%2BfxdsvSCSPm1opHFfXvk%2B6zeVkC%2FB6WrQM4fcPeTDzkCb%2BaRsyezJN97eG7MVhGuZEdRWH11OGUd%2BK0biTc3Yp%2BB96xks6xJs6OY0j1m2CjShZmskaask1Udljq&hiddenOpenId=oozmJsxaUQrTgff0GzjilUA29Mbk&hiddenTimestamp=" + now + "&card_id=&card_password=&Reservation=",
    "method": "POST",
    "mode": "cors"
  })
    .then((response) => {
      console.log("people1:" + now)
      //console.log(response)
    })
}

var people2 = function () {
  fetch("http://mlib.cdut.cn/yy/WxYy2.aspx?openId=oozmJs1RG0Hgt2cDIV9kdTyRRA7g&timestamp=1622470160", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "zh-CN,zh;q=0.9",
      "cache-control": "max-age=0",
      "content-type": "application/x-www-form-urlencoded",
      "upgrade-insecure-requests": "1",
      "cookie": "ASP.NET_SessionId=lx4avzrrm3luiyowvujhotfy"
    },
    "referrer": "http://mlib.cdut.cn/yy/WxYy2.aspx?openId=oozmJs1RG0Hgt2cDIV9kdTyRRA7g&timestamp=1622470160",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "__VIEWSTATE=8UAqr4imZ%2Fwe9aStux5ZR8FxSp3RYKkB4RxMPS%2BcuKV3DaLxe%2B3mEQIiy%2F6FR%2FyMj%2BMN4aBuGt6mfL6JHBnTVaPzeLsNHHPXNe5GKa%2BD2c%2Fk1iyFSn1VkzwLRfYP4Qrw5D3QHl7sItnylWrcD4390GRYFLwrZKFDeHL5K6MuKjRixuWQgzUwCKWMwYntRCS0WiamxcwEoAZWkqCS%2BShlHbnRt1waHRkKaXtjBAFvkTlTBz%2Fh4V0rXPQDTJ%2FeS15MnsAHdPm63trVziwlX%2BeY9UT0G80pcM%2BsG1dOgYdWDjQzi704alq57zR8BoyGBrPl%2BLG07G8%2FvVPM92tQH3jjh%2FlnjJXjx%2FkMcABmLDiO9Oxc6wwlcb0jOWcMSqzQfHMnm%2FPp3vpH6p7tg8%2Fw2ouiP0QYIRIHGX0E1O9gR9qhAmRsfeD0kuhDMIxNchQQdzNrTLmAq6cyk0dLxdQ4Zb4hQ7EapgAXYiY%2FiE%2F8ZIjSyNk%3D&__VIEWSTATEGENERATOR=29D80D0A&__EVENTVALIDATION=nNEPFoeWRPLG%2FRArHVRT3PfjIFeAv5BfklEb7F%2FiTLJluFj6Khwpoqv0S%2FJdzFoqw1IjSTDfLvqPR7KEM9VJfx0Zlq17oQK2GgjSxj%2ByRZkGAPWwsMoSx%2BpnMbycnbErrE1PLKGN0qT3LeyGHwTZFJ4xvUnWdRhiRWhs8XV0%2BkcIccXte4XQuZZ43BwSgnJ16ouIL%2FT1WzdB%2BKgilOLgFJYabexARBeua00NbpKpa23wwVwde7gNiGC6KYdeQTvv&hiddenOpenId=oozmJs1RG0Hgt2cDIV9kdTyRRA7g&hiddenTimestamp=" + now + "&card_id=&card_password=&TextBox1=&Reservation=%E9%A2%84%E7%BA%A6%E5%85%A5%E9%A6%86",
    "method": "POST",
    "mode": "cors"
  }).then((response) => {
    console.log("people2:" + now)
    //console.log(response)
  })
}

}
