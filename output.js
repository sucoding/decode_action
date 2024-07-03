//Wed Jul 03 2024 06:45:57 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("快手免费小说"),
  ckName = "ksmfxsck",
  Notify = 1;
let debug = 1,
  envSplitor = ["@", "\n"],
  userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "",
  userList = [],
  userIdx = 0,
  userCount = 0,
  show = "交流群 753144042";
console.log(show);
async function start() {
  console.log("\n================== 开始签到 ==================\n");
  taskall = [];
  for (let _0x58a0fc of userList) {
    taskall.push(await _0x58a0fc.user_info("签到"));
    await wait(5);
  }
  await Promise.all(taskall);
}
class UserInfo {
  constructor(_0x105236) {
    this.index = ++userIdx;
    this.sig = _0x105236.split("&")[0];
    this.ck = _0x105236.split("&")[1];
    this.url = "https://book.kuaishou.com/rest/wd/book/encourage/signIn/report?__NS_sig3=" + this.sig + "&sigCatVer=1";
    this.headers = {
      "Host": "book.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 13; V2172A Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.226 KsWebView/1.8.90.556 (rel) Mobile Safari/537.36 Yoda/2.7.3-rc7 StatusHT/32 CV/nullKG_APP_NOVEL-android TitleHT/50 NetType/WIFI ISLP/0 ISDM/0 ISLB/0 ISLD/0 locale/zh-cn evaSupported/false",
      "content-type": "application/json;charset=UTF-8",
      "Accept": "*/*",
      "X-Requested-With": "com.kuaishou.kgx.novel",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://book.kuaishou.com/novel/task?layoutType=4&source=bottom_tab",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "cookie": this.ck
    };
  }
  async ["user_info"](_0x34c0dd) {
    try {
      let _0x5955fd = {
          "url": this.url,
          "headers": this.headers
        },
        _0x52e37b = await httpRequest("get", _0x5955fd, _0x34c0dd);
      if (_0x52e37b.result == 1) {
        DoubleLog("账号[" + this.index + "]  签到: " + _0x52e37b.data.toast);
      } else {
        DoubleLog("账号[" + this.index + "]  签到失败 ❌ 了呢,原因" + _0x52e37b.msg);
        console.log(_0x52e37b);
      }
    } catch (_0x3758b6) {
      console.log(_0x3758b6);
    }
  }
}
!(async () => {
  if (!(await checkEnv())) return;
  userList.length > 0 && (await start());
  await SendMsg(msg);
})().catch(_0x1d76d8 => console.log(_0x1d76d8)).finally(() => $.done());
async function checkEnv() {
  if (userCookie) {
    let _0x557dfe = envSplitor[0];
    for (let _0x1d0b39 of envSplitor) if (userCookie.indexOf(_0x1d0b39) > -1) {
      _0x557dfe = _0x1d0b39;
      break;
    }
    for (let _0x49b2c8 of userCookie.split(_0x557dfe)) _0x49b2c8 && userList.push(new UserInfo(_0x49b2c8));
    userCount = userList.length;
  } else {
    console.log("呆子CK呢");
    return;
  }
  return console.log("共找到" + userCount + "个账号"), true;
}
async function httpRequest(_0x516b94, _0x3375ac, _0x55304a, _0x210be9 = 3) {
  return new Promise(_0x5664cc => {
    if (!_0x55304a) {
      let _0x2cd37d = arguments.callee.toString(),
        _0x16bb46 = /function\s*(\w*)/i,
        _0x12765e = _0x16bb46.exec(_0x2cd37d);
      _0x55304a = _0x12765e[1];
    }
    debug && (console.log("\n 【debug】=============== 这是 " + _0x55304a + " 请求 url ==============="), console.log(_0x3375ac));
    $[_0x516b94](_0x3375ac, async (_0x135690, _0x40c8c5, _0x2b30dc) => {
      try {
        debug && (console.log("\n\n【debug】===============这是" + _0x55304a + "返回数据=============="), console.log(_0x2b30dc));
        if (typeof _0x2b30dc == "string") {
          if (_0x33fc2b(_0x2b30dc)) {
            let _0x121728 = JSON.parse(_0x2b30dc);
            debug && (console.log("\n【debug】=============这是" + _0x55304a + "json解析后数据============"), console.log(_0x121728));
            _0x5664cc(_0x121728);
          } else {
            let _0x349306 = _0x2b30dc;
            _0x5664cc(_0x349306);
          }
          function _0x33fc2b(_0x54236c) {
            if (typeof _0x54236c == "string") try {
              if (typeof JSON.parse(_0x54236c) == "object") {
                return true;
              }
            } catch (_0x24750b) {
              return false;
            }
            return false;
          }
        } else {
          let _0x5e568b = _0x2b30dc;
          _0x5664cc(_0x5e568b);
        }
      } catch (_0x5c9a65) {
        console.log(_0x135690, _0x40c8c5);
        console.log("\n " + _0x55304a + " 失败了!请稍后尝试!!");
      } finally {
        _0x5664cc();
      }
    }, _0x210be9);
  });
}
function wait(_0x527049) {
  return new Promise(function (_0x2d4c68) {
    setTimeout(_0x2d4c68, _0x527049 * 1000);
  });
}
function DoubleLog(_0x661383) {
  if ($.isNode()) {
    if (_0x661383) {
      console.log("" + _0x661383);
      msg += "\n" + _0x661383;
    }
  } else console.log("" + _0x661383), msg += "\n" + _0x661383;
}
async function SendMsg(_0x1e6611) {
  if (!_0x1e6611) return;
  if (Notify > 0) {
    if ($.isNode()) {
      var _0x49e2d2 = require("./sendNotify");
      await _0x49e2d2.sendNotify($.name, _0x1e6611);
    } else $.msg($.name, "", _0x1e6611);
  } else console.log(_0x1e6611);
}
function Env(_0x37cd16, _0x1780d3) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x16a898 {
    constructor(_0x585895) {
      this.env = _0x585895;
    }
    ["send"](_0x3a7a59, _0x4c4186 = "GET") {
      _0x3a7a59 = "string" == typeof _0x3a7a59 ? {
        "url": _0x3a7a59
      } : _0x3a7a59;
      let _0x4cbde2 = this.get;
      return "POST" === _0x4c4186 && (_0x4cbde2 = this.post), new Promise((_0x27ae6a, _0x4149c9) => {
        _0x4cbde2.call(this, _0x3a7a59, (_0x15056f, _0x547d2e, _0x202a9f) => {
          _0x15056f ? _0x4149c9(_0x15056f) : _0x27ae6a(_0x547d2e);
        });
      });
    }
    ["get"](_0x47666a) {
      return this.send.call(this.env, _0x47666a);
    }
    ["post"](_0x21e2e5) {
      return this.send.call(this.env, _0x21e2e5, "POST");
    }
  }
  return new class {
    constructor(_0x5dde7c, _0x54dbdc) {
      this.name = _0x5dde7c;
      this.http = new _0x16a898(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x54dbdc);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x5c5542, _0x520b19 = null) {
      try {
        return JSON.parse(_0x5c5542);
      } catch {
        return _0x520b19;
      }
    }
    ["toStr"](_0x42e140, _0x36b59f = null) {
      try {
        return JSON.stringify(_0x42e140);
      } catch {
        return _0x36b59f;
      }
    }
    ["getjson"](_0xc6c060, _0x4e8272) {
      let _0x35a64c = _0x4e8272;
      const _0x278ba6 = this.getdata(_0xc6c060);
      if (_0x278ba6) try {
        _0x35a64c = JSON.parse(this.getdata(_0xc6c060));
      } catch {}
      return _0x35a64c;
    }
    ["setjson"](_0x4abc14, _0x1293ed) {
      try {
        return this.setdata(JSON.stringify(_0x4abc14), _0x1293ed);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x31d91c) {
      return new Promise(_0x1e4562 => {
        this.get({
          "url": _0x31d91c
        }, (_0x185e1d, _0x5c19bb, _0x4a259e) => _0x1e4562(_0x4a259e));
      });
    }
    ["runScript"](_0x142a5d, _0x4c525c) {
      return new Promise(_0x524697 => {
        let _0x1c92b6 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x1c92b6 = _0x1c92b6 ? _0x1c92b6.replace(/\n/g, "").trim() : _0x1c92b6;
        let _0x8a56b8 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x8a56b8 = _0x8a56b8 ? 1 * _0x8a56b8 : 20;
        _0x8a56b8 = _0x4c525c && _0x4c525c.timeout ? _0x4c525c.timeout : _0x8a56b8;
        const [_0x51fdf3, _0x16c98d] = _0x1c92b6.split("@"),
          _0x5cb57c = {
            "url": "http://" + _0x16c98d + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x142a5d,
              "mock_type": "cron",
              "timeout": _0x8a56b8
            },
            "headers": {
              "X-Key": _0x51fdf3,
              "Accept": "*/*"
            }
          };
        this.post(_0x5cb57c, (_0x41582b, _0xc49ede, _0x47fd80) => _0x524697(_0x47fd80));
      }).catch(_0x42932a => this.logErr(_0x42932a));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x54281a = this.path.resolve(this.dataFile),
          _0x18140e = this.path.resolve(process.cwd(), this.dataFile),
          _0x21176f = this.fs.existsSync(_0x54281a),
          _0x1d4cef = !_0x21176f && this.fs.existsSync(_0x18140e);
        if (!_0x21176f && !_0x1d4cef) return {};
        {
          const _0x433cac = _0x21176f ? _0x54281a : _0x18140e;
          try {
            return JSON.parse(this.fs.readFileSync(_0x433cac));
          } catch (_0x33c30d) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x152339 = this.path.resolve(this.dataFile),
          _0x4e98e5 = this.path.resolve(process.cwd(), this.dataFile),
          _0x4b014c = this.fs.existsSync(_0x152339),
          _0x5b4653 = !_0x4b014c && this.fs.existsSync(_0x4e98e5),
          _0x36d596 = JSON.stringify(this.data);
        _0x4b014c ? this.fs.writeFileSync(_0x152339, _0x36d596) : _0x5b4653 ? this.fs.writeFileSync(_0x4e98e5, _0x36d596) : this.fs.writeFileSync(_0x152339, _0x36d596);
      }
    }
    ["lodash_get"](_0x5338f0, _0x275014, _0x51ddb7) {
      const _0x414554 = _0x275014.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x23646a = _0x5338f0;
      for (const _0x3a2248 of _0x414554) if (_0x23646a = Object(_0x23646a)[_0x3a2248], void 0 === _0x23646a) return _0x51ddb7;
      return _0x23646a;
    }
    ["lodash_set"](_0x1766b0, _0x1ccffc, _0x2d8bcf) {
      return Object(_0x1766b0) !== _0x1766b0 ? _0x1766b0 : (Array.isArray(_0x1ccffc) || (_0x1ccffc = _0x1ccffc.toString().match(/[^.[\]]+/g) || []), _0x1ccffc.slice(0, -1).reduce((_0x550963, _0x3f5d70, _0x147dfe) => Object(_0x550963[_0x3f5d70]) === _0x550963[_0x3f5d70] ? _0x550963[_0x3f5d70] : _0x550963[_0x3f5d70] = Math.abs(_0x1ccffc[_0x147dfe + 1]) >> 0 == +_0x1ccffc[_0x147dfe + 1] ? [] : {}, _0x1766b0)[_0x1ccffc[_0x1ccffc.length - 1]] = _0x2d8bcf, _0x1766b0);
    }
    ["getdata"](_0x1f1984) {
      let _0x1fe820 = this.getval(_0x1f1984);
      if (/^@/.test(_0x1f1984)) {
        const [, _0xcb9706, _0x161426] = /^@(.*?)\.(.*?)$/.exec(_0x1f1984),
          _0x322f2d = _0xcb9706 ? this.getval(_0xcb9706) : "";
        if (_0x322f2d) try {
          const _0x3e2a59 = JSON.parse(_0x322f2d);
          _0x1fe820 = _0x3e2a59 ? this.lodash_get(_0x3e2a59, _0x161426, "") : _0x1fe820;
        } catch (_0x40a757) {
          _0x1fe820 = "";
        }
      }
      return _0x1fe820;
    }
    ["setdata"](_0x33dc6c, _0x1a9e08) {
      let _0x547cbb = false;
      if (/^@/.test(_0x1a9e08)) {
        const [, _0x24bbba, _0x4056a3] = /^@(.*?)\.(.*?)$/.exec(_0x1a9e08),
          _0x43979f = this.getval(_0x24bbba),
          _0x35abcf = _0x24bbba ? "null" === _0x43979f ? null : _0x43979f || "{}" : "{}";
        try {
          const _0x57d2ce = JSON.parse(_0x35abcf);
          this.lodash_set(_0x57d2ce, _0x4056a3, _0x33dc6c);
          _0x547cbb = this.setval(JSON.stringify(_0x57d2ce), _0x24bbba);
        } catch (_0x39335b) {
          const _0x123c73 = {};
          this.lodash_set(_0x123c73, _0x4056a3, _0x33dc6c);
          _0x547cbb = this.setval(JSON.stringify(_0x123c73), _0x24bbba);
        }
      } else _0x547cbb = this.setval(_0x33dc6c, _0x1a9e08);
      return _0x547cbb;
    }
    ["getval"](_0x1132ca) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x1132ca) : this.isQuanX() ? $prefs.valueForKey(_0x1132ca) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1132ca]) : this.data && this.data[_0x1132ca] || null;
    }
    ["setval"](_0x88e77, _0x419f43) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x88e77, _0x419f43) : this.isQuanX() ? $prefs.setValueForKey(_0x88e77, _0x419f43) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x419f43] = _0x88e77, this.writedata(), !0) : this.data && this.data[_0x419f43] || null;
    }
    ["initGotEnv"](_0x25329e) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x25329e && (_0x25329e.headers = _0x25329e.headers ? _0x25329e.headers : {}, void 0 === _0x25329e.headers.Cookie && void 0 === _0x25329e.cookieJar && (_0x25329e.cookieJar = this.ckjar));
    }
    ["get"](_0x3460db, _0x1e43ff = () => {}) {
      _0x3460db.headers && (delete _0x3460db.headers["Content-Type"], delete _0x3460db.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x3460db.headers = _0x3460db.headers || {}, Object.assign(_0x3460db.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x3460db, (_0x47026c, _0x3eabe4, _0x415935) => {
        !_0x47026c && _0x3eabe4 && (_0x3eabe4.body = _0x415935, _0x3eabe4.statusCode = _0x3eabe4.status);
        _0x1e43ff(_0x47026c, _0x3eabe4, _0x415935);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x3460db.opts = _0x3460db.opts || {}, Object.assign(_0x3460db.opts, {
        "hints": !1
      })), $task.fetch(_0x3460db).then(_0x219624 => {
        const {
          statusCode: _0x4173d3,
          statusCode: _0x12b687,
          headers: _0x3ed801,
          body: _0xe08c40
        } = _0x219624;
        _0x1e43ff(null, {
          "status": _0x4173d3,
          "statusCode": _0x12b687,
          "headers": _0x3ed801,
          "body": _0xe08c40
        }, _0xe08c40);
      }, _0x3e8820 => _0x1e43ff(_0x3e8820))) : this.isNode() && (this.initGotEnv(_0x3460db), this.got(_0x3460db).on("redirect", (_0x3d8009, _0x5302cb) => {
        try {
          if (_0x3d8009.headers["set-cookie"]) {
            const _0x529d90 = _0x3d8009.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x529d90 && this.ckjar.setCookieSync(_0x529d90, null);
            _0x5302cb.cookieJar = this.ckjar;
          }
        } catch (_0x429cb2) {
          this.logErr(_0x429cb2);
        }
      }).then(_0x1244e7 => {
        const {
          statusCode: _0x52c877,
          statusCode: _0x1fa65f,
          headers: _0x2b7842,
          body: _0x574bb5
        } = _0x1244e7;
        _0x1e43ff(null, {
          "status": _0x52c877,
          "statusCode": _0x1fa65f,
          "headers": _0x2b7842,
          "body": _0x574bb5
        }, _0x574bb5);
      }, _0x29de59 => {
        const {
          message: _0x4bd469,
          response: _0x1ec69d
        } = _0x29de59;
        _0x1e43ff(_0x4bd469, _0x1ec69d, _0x1ec69d && _0x1ec69d.body);
      }));
    }
    ["post"](_0x1f85d2, _0x207ae4 = () => {}) {
      if (_0x1f85d2.body && _0x1f85d2.headers && !_0x1f85d2.headers["Content-Type"] && (_0x1f85d2.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x1f85d2.headers && delete _0x1f85d2.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x1f85d2.headers = _0x1f85d2.headers || {}, Object.assign(_0x1f85d2.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x1f85d2, (_0x33e987, _0x18cc5e, _0x35f64d) => {
        !_0x33e987 && _0x18cc5e && (_0x18cc5e.body = _0x35f64d, _0x18cc5e.statusCode = _0x18cc5e.status);
        _0x207ae4(_0x33e987, _0x18cc5e, _0x35f64d);
      });else {
        if (this.isQuanX()) _0x1f85d2.method = "POST", this.isNeedRewrite && (_0x1f85d2.opts = _0x1f85d2.opts || {}, Object.assign(_0x1f85d2.opts, {
          "hints": !1
        })), $task.fetch(_0x1f85d2).then(_0xefdbb5 => {
          const {
            statusCode: _0x2a6c6c,
            statusCode: _0x1eb0a2,
            headers: _0x2785d5,
            body: _0x1a0c2c
          } = _0xefdbb5;
          _0x207ae4(null, {
            "status": _0x2a6c6c,
            "statusCode": _0x1eb0a2,
            "headers": _0x2785d5,
            "body": _0x1a0c2c
          }, _0x1a0c2c);
        }, _0x349c67 => _0x207ae4(_0x349c67));else {
          if (this.isNode()) {
            this.initGotEnv(_0x1f85d2);
            const {
              url: _0xae08e,
              ..._0x3f2003
            } = _0x1f85d2;
            this.got.post(_0xae08e, _0x3f2003).then(_0x275558 => {
              const {
                statusCode: _0x113233,
                statusCode: _0x4d11f8,
                headers: _0x23909a,
                body: _0xa79b6d
              } = _0x275558;
              _0x207ae4(null, {
                "status": _0x113233,
                "statusCode": _0x4d11f8,
                "headers": _0x23909a,
                "body": _0xa79b6d
              }, _0xa79b6d);
            }, _0xf253c0 => {
              const {
                message: _0x15c6e6,
                response: _0x2f4cb5
              } = _0xf253c0;
              _0x207ae4(_0x15c6e6, _0x2f4cb5, _0x2f4cb5 && _0x2f4cb5.body);
            });
          }
        }
      }
    }
    ["time"](_0x299446, _0x1d4b54 = null) {
      const _0x30ce39 = _0x1d4b54 ? new Date(_0x1d4b54) : new Date();
      let _0x2d6c06 = {
        "M+": _0x30ce39.getMonth() + 1,
        "d+": _0x30ce39.getDate(),
        "H+": _0x30ce39.getHours(),
        "m+": _0x30ce39.getMinutes(),
        "s+": _0x30ce39.getSeconds(),
        "q+": Math.floor((_0x30ce39.getMonth() + 3) / 3),
        "S": _0x30ce39.getMilliseconds()
      };
      /(y+)/.test(_0x299446) && (_0x299446 = _0x299446.replace(RegExp.$1, (_0x30ce39.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x4fd3c9 in _0x2d6c06) new RegExp("(" + _0x4fd3c9 + ")").test(_0x299446) && (_0x299446 = _0x299446.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2d6c06[_0x4fd3c9] : ("00" + _0x2d6c06[_0x4fd3c9]).substr(("" + _0x2d6c06[_0x4fd3c9]).length)));
      return _0x299446;
    }
    ["msg"](_0x7978a = _0x37cd16, _0x22989e = "", _0x4ed9ae = "", _0x156cf8) {
      const _0xe113c2 = _0x4fb4db => {
        if (!_0x4fb4db) return _0x4fb4db;
        if ("string" == typeof _0x4fb4db) return this.isLoon() ? _0x4fb4db : this.isQuanX() ? {
          "open-url": _0x4fb4db
        } : this.isSurge() ? {
          "url": _0x4fb4db
        } : void 0;
        if ("object" == typeof _0x4fb4db) {
          if (this.isLoon()) {
            let _0x5d4893 = _0x4fb4db.openUrl || _0x4fb4db.url || _0x4fb4db["open-url"],
              _0x4aedcb = _0x4fb4db.mediaUrl || _0x4fb4db["media-url"];
            return {
              "openUrl": _0x5d4893,
              "mediaUrl": _0x4aedcb
            };
          }
          if (this.isQuanX()) {
            let _0x2ae495 = _0x4fb4db["open-url"] || _0x4fb4db.url || _0x4fb4db.openUrl,
              _0x5545df = _0x4fb4db["media-url"] || _0x4fb4db.mediaUrl;
            return {
              "open-url": _0x2ae495,
              "media-url": _0x5545df
            };
          }
          if (this.isSurge()) {
            let _0x202631 = _0x4fb4db.url || _0x4fb4db.openUrl || _0x4fb4db["open-url"];
            return {
              "url": _0x202631
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x7978a, _0x22989e, _0x4ed9ae, _0xe113c2(_0x156cf8)) : this.isQuanX() && $notify(_0x7978a, _0x22989e, _0x4ed9ae, _0xe113c2(_0x156cf8))), !this.isMuteLog) {
        let _0x53dc48 = ["", "==============📣系统通知📣=============="];
        _0x53dc48.push(_0x7978a);
        _0x22989e && _0x53dc48.push(_0x22989e);
        _0x4ed9ae && _0x53dc48.push(_0x4ed9ae);
        console.log(_0x53dc48.join("\n"));
        this.logs = this.logs.concat(_0x53dc48);
      }
    }
    ["log"](..._0x3811ed) {
      _0x3811ed.length > 0 && (this.logs = [...this.logs, ..._0x3811ed]);
      console.log(_0x3811ed.join(this.logSeparator));
    }
    ["logErr"](_0xaabe65, _0x4cdf6b) {
      const _0x4dc1d0 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x4dc1d0 ? this.log("", "❗️" + this.name + ", 错误!", _0xaabe65.stack) : this.log("", "❗️" + this.name + ", 错误!", _0xaabe65);
    }
    ["wait"](_0x5d8cf5) {
      return new Promise(_0x481824 => setTimeout(_0x481824, _0x5d8cf5));
    }
    ["done"](_0x50ce54 = {}) {
      const _0x3886ce = new Date().getTime(),
        _0x16a159 = (_0x3886ce - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x16a159 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x50ce54);
    }
  }(_0x37cd16, _0x1780d3);
}