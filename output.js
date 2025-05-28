//Wed May 28 2025 05:06:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
layui.use(["layer", "form"], function () {
  const _0x3a890a = layui.layer,
    _0x3b796f = document.getElementById("logBox"),
    _0x12f453 = document.getElementById("submitButton"),
    _0x179a61 = document.getElementById("jumpButton"),
    _0x515265 = document.getElementById("inputText");
  _0x3b796f.textContent = "请按照图片格式将您的阅读链接复制粘贴到输入框！";
  function _0x2a0009(_0xe45ecc, _0x2461a6 = "GET", _0x585a44 = null) {
    return new Promise((_0x414e34, _0x12d136) => {
      const _0x2428f2 = {
        "url": _0xe45ecc,
        "type": _0x2461a6,
        "data": _0x585a44 ? JSON.stringify(_0x585a44) : null,
        "contentType": "application/json",
        "success": function (_0xf6f6c8) {
          _0x414e34(_0xf6f6c8);
        },
        "error": function (_0x1d57c1) {
          console.error("API请求出错:", _0x1d57c1);
          _0x3a890a.msg("API请求失败，请稍后重试", {
            "icon": 5
          });
          _0x12d136(null);
        }
      };
      $.ajax(_0x2428f2);
    });
  }
  async function _0x23e713(_0x3f05b4) {
    const _0x30ef90 = "https://h5.ldhy.store/api3.php",
      _0x2ca7b1 = {
        "url": _0x3f05b4
      };
    try {
      const _0x1c1198 = await _0x2a0009(_0x30ef90, "POST", _0x2ca7b1);
      return console.log("checkUrl返回值:", _0x1c1198), _0x1c1198;
    } catch (_0x307b1e) {
      return console.error("检查URL出错:", _0x307b1e), _0x3a890a.msg("检查URL失败，请检查链接格式", {
        "icon": 5
      }), {
        "code": -1,
        "message": "假"
      };
    }
  }
  async function _0x1a7044(_0x31cf82) {
    const _0xfec9a3 = "https://h5.ldhy.store/api2.php",
      _0x1df0a8 = {
        "url": _0x31cf82
      };
    try {
      const _0x4b3271 = await _0x2a0009(_0xfec9a3, "POST", _0x1df0a8);
      return console.log("tij返回值:", _0x4b3271), _0x4b3271;
    } catch (_0x3d2626) {
      return console.error("tij函数出错:", _0x3d2626), {
        "code": -1,
        "message": "假"
      };
    }
  }
  function _0xd46c1(_0x1699c3) {
    return new Promise(_0x2501ad => setTimeout(_0x2501ad, _0x1699c3));
  }
  async function _0x2d7192(_0x477c11, _0x456151) {
    const _0x5e1883 = _0x3a890a.load(1, {
      "shade": [0.1, "#000"]
    });
    _0x3b796f.textContent = "任务开始执行，请勿退出";
    const _0x281a5c = "https://oapi.liyishabiubiu.cn/api/client/read/has_next?val=",
      _0x35b8b7 = 30,
      _0x46a107 = 8000;
    for (let _0x412f8e = 0; _0x412f8e < _0x35b8b7; _0x412f8e++) {
      localStorage.setItem("index", _0x412f8e);
      const _0x2d803e = Date.now(),
        _0x116b6c = "" + _0x281a5c + _0x477c11 + "&aid=" + _0x456151 + "&st=" + _0x2d803e,
        _0x1bdbe5 = await _0x2a0009(_0x116b6c);
      if (!_0x1bdbe5) continue;
      const {
        code: _0x1c6a61,
        message: _0x503187,
        data: _0x6d4d5
      } = _0x1bdbe5;
      if (_0x1c6a61 === -9008) {
        const _0x1f8081 = localStorage.getItem("url1");
      }
      let _0xc54613 = "无",
        _0x42feb4 = "";
      if (_0x6d4d5) {
        _0x456151 = _0x6d4d5.aid;
        localStorage.setItem("aid", _0x456151);
        _0x42feb4 = _0x6d4d5.url;
        if (_0x42feb4) {
          localStorage.setItem("url1", _0x42feb4);
        }
        _0xc54613 = "阅读链接: " + _0x42feb4;
      }
      if (_0x1c6a61 !== 0) {
        _0x3b796f.textContent = _0x503187;
        localStorage.setItem("read_type", 2);
        _0x3a890a.close(_0x5e1883);
        break;
      }
      const _0x3e4bcd = await _0x23e713(_0x42feb4);
      console.log("checkResult:", _0x3e4bcd);
      let _0x101576;
      if (_0x3e4bcd && _0x3e4bcd.code === 0) {
        _0x101576 = "遇到检测文章，正在自动跳转阅读，请页面成功跳转后点击返回键返回到本页面，请勿退出！！\n任务中，请勿退出！！！";
        _0x3a890a.msg("正在跳转阅读页面，请稍候...", {
          "icon": 16,
          "time": 2000
        });
        window.location.href = _0x42feb4;
        console.log("跳转链接:", _0x42feb4);
      } else _0x101576 = "第 " + (_0x412f8e + 1) + " 次, 请求时间: " + new Date().toLocaleString() + ", " + _0x503187 + ", 详细数据: " + _0xc54613 + "\n";
      _0x3b796f.textContent = _0x101576;
      if (_0x412f8e < _0x35b8b7 - 1) {
        await _0xd46c1(_0x46a107);
      }
    }
    localStorage.setItem("read_type", 2);
    _0x3a890a.close(_0x5e1883);
  }
  _0x12f453.addEventListener("click", async () => {
    const _0x106d6c = _0x3a890a.load(1, {
      "shade": [0.1, "#000"]
    });
    try {
      const _0x1a5d67 = _0x515265.value,
        _0xe99cd = new URL(_0x1a5d67),
        _0x35c95b = new URLSearchParams(_0xe99cd.search),
        _0x284f3c = _0x35c95b.get("val");
      if (!_0x284f3c) {
        console.error("未获取到有效的val参数");
        _0x3b796f.textContent = "请正确按照图片格式提交";
        _0x3a890a.msg("请输入有效的阅读链接", {
          "icon": 5
        });
        return;
      }
      localStorage.setItem("val", _0x284f3c);
      let _0x32f081 = "";
      localStorage.setItem("read_type", 1);
      await _0x2d7192(_0x284f3c, _0x32f081);
    } catch (_0x5289f4) {
      console.error("提交按钮点击事件出错:", _0x5289f4);
      _0x3a890a.msg("请输入有效的阅读链接", {
        "icon": 5
      });
    } finally {
      _0x3a890a.close(_0x106d6c);
    }
  });
  const _0xcefb31 = localStorage.getItem("read_type");
  if (_0xcefb31 === "1") {
    const _0x57c24b = localStorage.getItem("aid"),
      _0x450e6a = localStorage.getItem("val");
    if (_0x450e6a) {
      const _0x3e8e0c = _0x3a890a.load(1, {
        "shade": [0.1, "#000"]
      });
      _0x2d7192(_0x450e6a, _0x57c24b).finally(() => {
        _0x3a890a.close(_0x3e8e0c);
      });
    }
  }
  _0x179a61.addEventListener("click", () => {
    window.open("http://1743762634.sli4devops.cn?iv=61353637373762335f31373433363534313637&type=invite", "_blank");
  });
  var _0x3cdcf3 = _0x3cdcf3 || [];
  (function () {
    var _0x2b6b64 = document.createElement("script");
    _0x2b6b64.src = "https://hm.baidu.com/hm.js?ef18fad46ac8f6bf262f48eead19c287";
    var _0x2f779a = document.getElementsByTagName("script")[0];
    _0x2f779a.parentNode.insertBefore(_0x2b6b64, _0x2f779a);
  })();
  document.addEventListener("DOMContentLoaded", async function () {
    try {
      const _0x2efead = await navigator.clipboard.readText();
      _0x515265.value = _0x2efead;
    } catch (_0x11896a) {
      console.error("读取剪贴板内容出错:", _0x11896a);
    }
  });
});