//Thu Jul 04 2024 00:44:57 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    log: _0x63077a
  } = require("console"),
  _0x28b9fc = require("sm-crypto").sm3,
  _0x3d34c3 = new _0x202910("科技工作者之家"),
  _0x1eaa6a = 1,
  _0x2480f6 = 0;
let _0x4f366b = (_0x3d34c3.isNode() ? process.env.keji_ck : _0x3d34c3.getdata("keji_ck")) || "",
  _0x29fee8,
  _0x1f9b0d;
var _0x27fa56,
  _0x259f78,
  _0x1e3aa4,
  _0x199504,
  _0x1bb930 = "4020",
  _0x49a2fb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  _0x63e614;
let _0x4a85c4 = "api-kejia.scimall.org.cn";
var _0x2c1aed = ["6155236", "6155515", "6158826", "6158717", "6155234", "6155231", "6158824", "6158571", "6158031", "6158461", "6158001", "6157997", "6157926", "6157432", "6157074"],
  _0x54b41e = ["人人仰望在何处生怕河梁分袂处", "人间信有白头痴生贤特也涓良日", "保得重重翠碧衣安乐常思病苦时", "成由勤俭破由奢器远况曾师旧德", "里中巴客半归乡路入烟霞草木香", "读书谁料转家贫万里桥头独越吟", "卷帷上床喜不定书沈寒雁云边影", "给与烦襟作冷风力尽不得抛杵声", "行道才人斗射飞万全身出百重围", "诗人浪作水仙歌生平素志惟丘壑", "诗盟岂止寻宗派生涯闻已半蒿莱", "城头夜半声哑哑素手春溪罢浣纱", "城傍牧马驱未过素淡堪移入卧屏", "真王未许久从容实用人材即至公", "本无背面与初终来成方面保厘功", "本作耕耘意若何来君回唱竹枝歌", "省多少闲是闲非上品功能甘露味", "省得蔡州今日事上古初闻出尧世", "落在深泥谁复怜地坼天开总是闲", "落霞语好终伤绮地暖应知穴处狸", "名山长似有人催师门念旧如相问", "名压西川旧海棠师承有法古韦康", "珍重故人知我者珠团绿锦趁晴摊", "珍重诗人频管领珠玑影冷偏粘草", "鸟睡花林绣羽香眉间画得山两点"],
  _0x635e81 = ["坐游船翠柳岸边飘临小径南湖陶我醉", "山鸟群飞日隐轻霞登车上马倏忽雨散", "静守时光以待流年易水人去明月如霜", "生能尽欢死亦无憾静水流深沧笙踏歌", "家山乡眷兮会时稀今朝设宴兮觥散飞", "单感觉轻风拂面来怎安知夕日云霞坠", "对花对酒落梅成愁十里长亭水悠悠兮", "养怡之福可得永年幸甚至哉歌以咏志", "有生一日皆报恩时有生一日皆伴亲时", "俯仰自得游心太玄目送归鸿手挥五弦", "北风其凉雨雪其滂惠而好我携手同行", "将子无怒秋以为期乘彼垝垣以望复关", "置酒高堂悲歌临觞人寿几何逝如朝霜", "地列酒泉天垂酒池杜康妙识仪狄先知", "苹以春晖兰以秋芳来日苦短去日苦长", "信誓旦旦不思其反反是不思亦已焉哉", "育吾兄弟艰辛备历摧折作磨因此遭疾", "爱力所及原本真诚不作诳言不存欺心", "有志未伸有求不获精神痛苦以此为卓", "日月之行若出其中星汉灿烂若出其里", "思从二女适彼湘沅灵幽听微谁观玉颜"];
let _0xb3ac10 = "无";
async function _0x29d884(_0x53c581) {
  let _0x4e10ed = "\n📌 幻生提示：长期稳定小毛，走下链接呗，谢谢您了：https://h5.scimall.org.cn/user/register?invite_from=5&invite_uid=9PoRJ    📌";
  _0x597fca(_0x4e10ed + "\n📌 🆙 更新内容: " + _0xb3ac10);
  _0x597fca("\n========== 共找到 " + _0x53c581.length + " 个账号 ==========");
  _0x45ead9("【debug】 这是你的账号数组:\n " + _0x53c581);
}
!(async () => {
  let _0x3dd4cb = await _0xd9e64a(_0x4f366b, "keji_ck");
  await _0x29d884(_0x3dd4cb);
  for (let _0x371988 = 0; _0x371988 < _0x3dd4cb.length; _0x371988++) {
    let _0x5256cb = _0x371988 + 1;
    _0x597fca("\n-------- 开始【第 " + _0x5256cb + " 个账号】--------");
    _0x1f9b0d = _0x3dd4cb[_0x371988].split("&");
    _0x45ead9("【debug】 这是你第 " + _0x5256cb + " 账号信息:\n " + _0x1f9b0d);
    await _0x4ae55f();
  }
  await _0x36d393(_0x29fee8);
})().catch(_0x1afe50 => _0x3d34c3.logErr(_0x1afe50)).finally(() => _0x3d34c3.done());
async function _0x4ae55f() {
  console.log("\n开始 任务");
  _0x199504 = _0x4767e6();
  await _0x3d34c3.wait(3 * 1000);
  await _0x5aca92();
  await _0x3d34c3.wait(4 * 1000);
  await _0x870ed7();
  await _0x3d34c3.wait(4 * 1000);
  await _0x5f245a();
  for (var _0x52b273 = 0; _0x52b273 < 10; _0x52b273++) {
    let _0x2387bc = _0x407669(3, 6);
    _0x194630(_0x52b273);
    await _0x32b8c7();
    await _0x3d34c3.wait(_0x2387bc * 1000);
  }
  let _0x232367;
  _0x232367 = _0x407669(4, 8);
  await _0x5cd9fc();
  await _0x3d34c3.wait(_0x232367 * 1000);
  await _0x5cd9fc();
  _0x232367 = _0x407669(10, 15);
  await _0x3d34c3.wait(_0x232367 * 1000);
  _0x46ecdc(_0x49a2fb);
  await _0x54f035();
  _0x232367 = _0x407669(3, 6);
  await _0x3d34c3.wait(_0x232367 * 1000);
  await _0x23e360();
  _0x232367 = _0x407669(4, 6);
  await _0x3d34c3.wait(_0x232367 * 1000);
  await _0x54f035();
  _0x232367 = _0x407669(2, 6);
  await _0x3d34c3.wait(_0x232367 * 1000);
  await _0x1a4c00();
  await _0x3d34c3.wait(2 * 1000);
}
async function _0x32b8c7() {
  let _0x413419 = _0x4c155e(),
    _0x438745 = "content_id=" + _0x259f78 + "&content_type=1&share_source=",
    _0x1dd50e = "channel=baidu&content_id=" + _0x259f78 + "&content_type=1&device_model=MIX2&from=android&path=/share/statistic&sdk_int=28&share_source=&system_version=android9&timestamp=" + _0x413419 + "&token=" + _0x27fa56 + "&tourist_token=" + _0x199504 + "&uuid=" + _0x199504 + "&v=5.5.1&secretkey=LH6064#!@&YTM",
    _0x19513c = _0x28b9fc(_0x1dd50e),
    _0x1efa55 = "https://api-kejia.scimall.org.cn/share/statistic?timestamp=" + _0x413419 + "&v=5.5.1&from=android&device_model=MIX2&channel=baidu&system_version=android9&sdk_int=28" + "&uuid=" + _0x199504 + "&tourist_token=" + _0x199504 + "&token=" + _0x27fa56 + "&sn=" + _0x19513c;
  try {
    let _0xd1bd43 = {
        "url": _0x1efa55,
        "headers": {
          "Host": _0x4a85c4,
          "Content-Length": "47",
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json;charset=UTF-8",
          "User-Agent": "okhttp/4.2.2",
          "Connection": "Keep-Alive"
        },
        "body": _0x438745
      },
      _0x5d44c6 = await _0x3a7c51(_0xd1bd43, "分享");
    if (_0x5d44c6.code == 0) _0x597fca(_0x5d44c6.data.msg), await _0x4b4c63(3);else _0x5d44c6.code == 60024 ? (_0x597fca(_0x5d44c6.msg), await _0x4b4c63(3)) : console.log(_0x5d44c6);
  } catch (_0x150e49) {
    console.log(_0x150e49);
  }
}
async function _0x5aca92() {
  let _0x3e2e7e = _0x4c155e(),
    _0x3625ed = "username=" + _0x1f9b0d[0] + "&password=" + _0x1f9b0d[1] + "&country_code=86",
    _0x37aef2 = "channel=baidu&country_code=86&device_model=MIX2&from=android&password=" + _0x1f9b0d[1] + "&path=/account/loginByPass&sdk_int=28&system_version=android9&timestamp=" + _0x3e2e7e + "&token=&tourist_token=" + _0x199504 + "&username=" + _0x1f9b0d[0] + "&uuid=" + _0x199504 + "&v=5.5.1&secretkey=LH6064#!@&YTM",
    _0x3d8de2 = _0x28b9fc(_0x37aef2),
    _0xdd19a3 = "https://api-kejia.scimall.org.cn/account/loginByPass?timestamp=" + _0x3e2e7e + "&v=5.5.1&from=android&device_model=MIX2&channel=baidu&system_version=android9&sdk_int=28" + "&uuid=" + _0x199504 + "&tourist_token=" + _0x199504 + "&token=&sn=" + _0x3d8de2;
  try {
    let _0x5f8fa2 = {
        "url": _0xdd19a3,
        "headers": {
          "Host": _0x4a85c4,
          "Content-Length": "55",
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json;charset=UTF-8",
          "User-Agent": "okhttp/4.2.2",
          "Connection": "Keep-Alive"
        },
        "body": _0x3625ed
      },
      _0x19a273 = await _0x3a7c51(_0x5f8fa2, "登录");
    _0x27fa56 = _0x19a273.data.token;
    _0x19a273.code == 0 ? (_0x597fca("登录" + _0x19a273.msg), await _0x4b4c63(3)) : console.log(_0x19a273);
  } catch (_0x49f9e5) {
    console.log(_0x49f9e5);
  }
}
async function _0x448977() {
  let _0x1eb154 = _0x4c155e(),
    _0x3228dd = "channel=baidu&device_model=MIX2&from=android&path=/account/logout&sdk_int=28&system_version=android9&timestamp=" + _0x1eb154 + "&token=" + _0x27fa56 + "&tourist_token=&uuid=" + _0x199504 + "&v=5.5.1&secretkey=LH6064#!@&YTM",
    _0xe9a022 = _0x28b9fc(_0x3228dd),
    _0x4a037f = "https://api-kejia.scimall.org.cn/account/logout?timestamp=" + _0x1eb154 + "&v=5.5.1&from=android&device_model=MIX2&channel=baidu&system_version=android9&sdk_int=28" + "&uuid=" + _0x199504 + "&tourist_token=&token=" + _0x27fa56 + "&sn=" + _0xe9a022;
  try {
    let _0x34532a = {
        "url": _0x4a037f,
        "headers": {
          "Host": _0x4a85c4,
          "Content-Length": "0",
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json;charset=UTF-8",
          "User-Agent": "okhttp/4.2.2",
          "Connection": "Keep-Alive"
        }
      },
      _0xaa9414 = await _0x3a7c51(_0x34532a, "退出登录");
    console.log(_0xaa9414);
    if (_0xaa9414.code == 0) _0x597fca("退出登录" + _0xaa9414.msg), await _0x4b4c63(3);else {
      _0x597fca("退出登录失败了,原因未知!");
      console.log(_0xaa9414);
    }
  } catch (_0xd6e208) {
    console.log(_0xd6e208);
  }
}
async function _0x870ed7() {
  let _0x3e3a2c = _0x4c155e(),
    _0x338aed = "sign_day=" + _0x2b485a() + "-" + _0x5eeb21() + "-" + _0x46804c(),
    _0x222a37 = "channel=baidu&device_model=MIX2&from=android&path=/signin/doSign&sdk_int=28&" + _0x338aed + "&system_version=android9&timestamp=" + _0x3e3a2c + "&token=" + _0x27fa56 + "&tourist_token=" + _0x199504 + "&uuid=" + _0x199504 + "&v=5.5.1&secretkey=LH6064#!@&YTM",
    _0x13ee1c = _0x28b9fc(_0x222a37),
    _0x5e2ddd = "https://api-kejia.scimall.org.cn/signin/doSign?timestamp=" + _0x3e3a2c + "&v=5.5.1&from=android&device_model=MIX2&channel=baidu&system_version=android9&sdk_int=28" + "&uuid=" + _0x199504 + "&tourist_token=" + _0x199504 + "&token=" + _0x27fa56 + "&sn=" + _0x13ee1c;
  try {
    let _0x3ca192 = {
        "url": _0x5e2ddd,
        "headers": {
          "Host": _0x4a85c4,
          "Content-Length": "19",
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json;charset=UTF-8",
          "User-Agent": "okhttp/4.2.2",
          "Connection": "Keep-Alive"
        },
        "body": _0x338aed
      },
      _0x4ce351 = await _0x3a7c51(_0x3ca192, "签到");
    if (_0x4ce351.code == 0) {
      _0x597fca("签到成功,获得积分" + _0x4ce351.data.point);
      await _0x4b4c63(3);
    } else {
      if (_0x4ce351.code == 10082) {
        _0x597fca(_0x4ce351.msg);
        await _0x4b4c63(3);
      } else {}
    }
  } catch (_0x42937a) {
    console.log(_0x42937a);
  }
}
async function _0x5cd9fc() {
  let _0x4ff018 = _0x4c155e(),
    _0x2a844a = "item_id=5376&type=2",
    _0x19660c = "channel=baidu&device_model=MIX2&from=android&item_id=5376&path=/point/addPoint&sdk_int=28&system_version=android9&timestamp=" + _0x4ff018 + "&token=" + _0x27fa56 + "&tourist_token=" + _0x199504 + "&type=2" + "&uuid=" + _0x199504 + "&v=5.5.1&secretkey=LH6064#!@&YTM",
    _0xa0cd67 = _0x28b9fc(_0x19660c),
    _0x31338c = "https://api-kejia.scimall.org.cn/point/addPoint?timestamp=" + _0x4ff018 + "&v=5.5.1&from=android&device_model=MIX2&channel=baidu&system_version=android9&sdk_int=28" + "&uuid=" + _0x199504 + "&tourist_token=" + _0x199504 + "&token=" + _0x27fa56 + "&sn=" + _0xa0cd67;
  try {
    let _0x296f24 = {
        "url": _0x31338c,
        "headers": {
          "Host": _0x4a85c4,
          "Content-Length": "19",
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json;charset=UTF-8",
          "User-Agent": "okhttp/4.2.2",
          "Connection": "Keep-Alive"
        },
        "body": _0x2a844a
      },
      _0x1ec98a = await _0x3a7c51(_0x296f24, "看视频");
    _0x1ec98a.code == 0 ? (_0x597fca("看视频成功,获得积分" + _0x1ec98a.data.msg), await _0x4b4c63(3)) : console.log(_0x1ec98a);
  } catch (_0x185e0b) {
    console.log(_0x185e0b);
  }
}
async function _0x3cc201() {
  let _0xd19407 = _0x4c155e(),
    _0x5116e2 = encodeURI(_0x54b41e[_0x1e3aa4]),
    _0x51c2bd = "content=" + _0x5116e2 + "&from=android&groupId=" + _0x1bb930 + "&repostId=0&sourceId=0&sourceType=weibo&title=&type=3",
    _0x8ae556 = "channel=baidu&content=" + _0x54b41e[_0x1e3aa4] + "&device_model=MIX2&from=android&groupId=" + _0x1bb930 + "&path=/weibo/issueWeibo&repostId=0&sdk_int=28&sourceId=0&sourceType=weibo&system_version=android9&timestamp=" + _0xd19407 + "&title=" + "&token=" + _0x27fa56 + "&tourist_token=" + _0x199504 + "&type=3" + "&uuid=" + _0x199504 + "&v=5.5.1&secretkey=LH6064#!@&YTM",
    _0x3d4d64 = _0x28b9fc(_0x8ae556),
    _0x23fde3 = "https://api-kejia.scimall.org.cn/weibo/issueWeibo?timestamp=" + _0xd19407 + "&v=5.5.1&from=android&device_model=MIX2&channel=baidu&system_version=android9&sdk_int=28" + "&uuid=" + _0x199504 + "&tourist_token=" + _0x199504 + "&token=" + _0x27fa56 + "&sn=" + _0x3d4d64;
  try {
    let _0x5baa79 = {
        "url": _0x23fde3,
        "headers": {
          "Host": _0x4a85c4,
          "Content-Length": "213",
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json;charset=UTF-8",
          "User-Agent": "okhttp/4.2.2",
          "Connection": "Keep-Alive"
        },
        "body": _0x51c2bd
      },
      _0x28676b = await _0x3a7c51(_0x5baa79, "发动态");
    _0x28676b.code == 0 ? (_0x597fca(_0x28676b.data.msg), await _0x4b4c63(3)) : console.log(_0x28676b);
  } catch (_0x44dd8a) {
    console.log(_0x44dd8a);
  }
}
async function _0x4880f6(_0x2a8e8d) {
  let _0x88f8ce = _0x4c155e(),
    _0x3d2986 = encodeURI(_0x635e81[_0x49a2fb[_0x2a8e8d]]),
    _0x39290c = "content=" + _0x3d2986 + "&fromId=" + _0x63e614 + "&pid=0&type=1&commentId=0&longitude=0.0&latitude=0.0",
    _0x146ef7 = "channel=baidu&commentId=0&content=" + _0x635e81[_0x49a2fb[_0x2a8e8d]] + "&device_model=MIX2&from=android&fromId=" + _0x63e614 + "&latitude=0.0&longitude=0.0&path=/comment/addComment&pid=0&sdk_int=28&system_version=android9&timestamp=" + _0x88f8ce + "&token=" + _0x27fa56 + "&tourist_token=" + _0x199504 + "&type=1&uuid=" + _0x199504 + "&v=5.5.1&secretkey=LH6064#!@&YTM",
    _0x410c37 = _0x28b9fc(_0x146ef7),
    _0xba1a3d = "https://api-kejia.scimall.org.cn/comment/addComment?timestamp=" + _0x88f8ce + "&v=5.5.1&from=android&device_model=MIX2&channel=baidu&system_version=android9&sdk_int=28" + "&uuid=" + _0x199504 + "&tourist_token=" + _0x199504 + "&token=" + _0x27fa56 + "&sn=" + _0x410c37;
  try {
    let _0x1fef06 = {
        "url": _0xba1a3d,
        "headers": {
          "Host": _0x4a85c4,
          "Content-Length": "219",
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json;charset=UTF-8",
          "User-Agent": "okhttp/4.2.2",
          "Connection": "Keep-Alive"
        },
        "body": _0x39290c
      },
      _0x2dcf4d = await _0x3a7c51(_0x1fef06, "发评论");
    _0x2dcf4d.code == 0 ? (_0x597fca(_0x2dcf4d.data.msg), await _0x4b4c63(3)) : console.log(_0x2dcf4d);
  } catch (_0x3ecf22) {
    console.log(_0x3ecf22);
  }
}
async function _0x5b1547() {
  let _0xdc6452 = _0x4c155e(),
    _0x7f1bc9 = "weiBoId=" + _0x63e614,
    _0x382469 = "channel=baidu&device_model=MIX2&from=android&path=/weibo/delWeibo&sdk_int=28&system_version=android9&timestamp=" + _0xdc6452 + "&token=" + _0x27fa56 + "&tourist_token=" + _0x199504 + "&uuid=" + _0x199504 + "&v=5.5.1&weiBoId=" + _0x63e614 + "&secretkey=LH6064#!@&YTM",
    _0x198d65 = _0x28b9fc(_0x382469),
    _0x6772f6 = "https://api-kejia.scimall.org.cn/weibo/delWeibo?timestamp=" + _0xdc6452 + "&v=5.5.1&from=android&device_model=MIX2&channel=baidu&system_version=android9&sdk_int=28" + "&uuid=" + _0x199504 + "&tourist_token=" + _0x199504 + "&token=" + _0x27fa56 + "&sn=" + _0x198d65;
  try {
    let _0x28f2ec = {
        "url": _0x6772f6,
        "headers": {
          "Host": _0x4a85c4,
          "Content-Length": "15",
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json;charset=UTF-8",
          "User-Agent": "okhttp/4.2.2",
          "Connection": "Keep-Alive"
        },
        "body": _0x7f1bc9
      },
      _0xdc50fe = await _0x3a7c51(_0x28f2ec, "删动态");
    if (_0xdc50fe.code == 0) _0x597fca("删动态" + _0xdc50fe.msg), await _0x4b4c63(3);else {
      _0x597fca("删动态错误，原因未知");
    }
  } catch (_0x2a3b27) {
    console.log(_0x2a3b27);
  }
}
async function _0x596905() {
  let _0x57b2f8 = _0x4c155e(),
    _0x314e3b = "channel=baidu&device_model=MIX2&from=android&path=/weibo/getMyWeibolist&sdk_int=28&system_version=android9&timestamp=" + _0x57b2f8 + "&token=" + _0x27fa56 + "&tourist_token=" + _0x199504 + "&uuid=" + _0x199504 + "&v=5.5.1&weiBoId=0&secretkey=LH6064#!@&YTM",
    _0x174b6c = _0x28b9fc(_0x314e3b),
    _0x556985 = "https://api-kejia.scimall.org.cn/weibo/getMyWeibolist?weiBoId=0&timestamp=" + _0x57b2f8 + "&v=5.5.1&from=android&device_model=MIX2&channel=baidu&system_version=android9&sdk_int=28" + "&uuid=" + _0x199504 + "&tourist_token=" + _0x199504 + "&token=" + _0x27fa56 + "&sn=" + _0x174b6c;
  try {
    let _0x3e7567 = {
        "url": _0x556985,
        "headers": {
          "Host": _0x4a85c4,
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json;charset=UTF-8",
          "User-Agent": "okhttp/4.2.2",
          "Connection": "Keep-Alive"
        }
      },
      _0x114d1c = await _0x1b415f(_0x3e7567, "查ID");
    _0x114d1c.code == 0 ? (_0x63e614 = _0x114d1c.data[0].id, _0x597fca("获取成功ID" + _0x63e614), await _0x4b4c63(3)) : console.log(_0x114d1c);
  } catch (_0x2b7f53) {
    console.log(_0x2b7f53);
  }
}
async function _0x1a4c00() {
  let _0x256574 = _0x4c155e(),
    _0x1a7d61 = "channel=baidu&device_model=MIX2&from=android&path=/point/exchangeRule&sdk_int=28&system_version=android9&timestamp=" + _0x256574 + "&token=" + _0x27fa56 + "&tourist_token=" + _0x199504 + "&uuid=" + _0x199504 + "&v=5.5.1&secretkey=LH6064#!@&YTM",
    _0x18d5a0 = _0x28b9fc(_0x1a7d61),
    _0x45d4e4 = "https://api-kejia.scimall.org.cn/point/exchangeRule?timestamp=" + _0x256574 + "&v=5.5.1&from=android&device_model=MIX2&channel=baidu&system_version=android9&sdk_int=28" + "&uuid=" + _0x199504 + "&tourist_token=" + _0x199504 + "&token=" + _0x27fa56 + "&sn=" + _0x18d5a0;
  try {
    let _0x4a0d01 = {
        "url": _0x45d4e4,
        "headers": {
          "Host": _0x4a85c4,
          "Accept": "application/json;charset=UTF-8",
          "User-Agent": "okhttp/4.2.2",
          "Connection": "Keep-Alive"
        }
      },
      _0x4f311e = await _0x1b415f(_0x4a0d01, "更新钱包额度");
    _0x4f311e.code == 0 ? (_0x597fca("额度为" + _0x4f311e.data.exchange_point), _0x597fca("积分为" + _0x4f311e.data.current_point), await _0x4b4c63(3)) : console.log(_0x4f311e);
  } catch (_0xfad1b1) {
    console.log(_0xfad1b1);
  }
}
async function _0x5f245a() {
  let _0x3ef1d8 = _0x4c155e(),
    _0x499695 = "channel=baidu&device_model=MIX2&from=android&path=/app/version&sdk_int=28&system_version=android9&timestamp=" + _0x3ef1d8 + "&token=" + _0x27fa56 + "&tourist_token=" + _0x199504 + "&uuid=" + _0x199504 + "&v=5.5.1&secretkey=LH6064#!@&YTM",
    _0x147f32 = _0x28b9fc(_0x499695),
    _0x4e2539 = "https://api-kejia.scimall.org.cn/app/version?timestamp=" + _0x3ef1d8 + "&v=5.5.1&from=android&device_model=MIX2&channel=baidu&system_version=android9&sdk_int=28" + "&uuid=" + _0x199504 + "&tourist_token=" + _0x199504 + "&token=" + _0x27fa56 + "&sn=" + _0x147f32;
  try {
    let _0x206ffb = {
        "url": _0x4e2539,
        "headers": {
          "Host": _0x4a85c4,
          "Accept": "application/json;charset=UTF-8",
          "User-Agent": "okhttp/4.2.2",
          "Connection": "Keep-Alive"
        }
      },
      _0x4d96ca = await _0x1b415f(_0x206ffb, "更新钱包额度");
    _0x4d96ca.code == 0 ? (_0x597fca("检查更新" + _0x4d96ca.msg), await _0x4b4c63(3)) : console.log(_0x4d96ca);
  } catch (_0x343df2) {
    console.log(_0x343df2);
  }
}
async function _0x26d721() {
  let _0x36e4e2 = _0x4c155e(),
    _0x827966 = "device_token=AoaY6KKBmSipivfHjjW9bq9--MLsPLAZBm7ZRg1QkeYu",
    _0x361a34 = "channel=huawei&device_model=MIX2&device_token=AoaY6KKBmSipivfHjjW9bq9--MLsPLAZBm7ZRg1QkeYu&from=android&path=/push/setToken&sdk_int=28&system_version=android9&timestamp=" + _0x36e4e2 + "&token=" + _0x27fa56 + "&tourist_token=&uuid=" + _0x199504 + "&v=5.5.1&secretkey=LH6064#!@&YTM",
    _0x353fe3 = _0x28b9fc(_0x361a34),
    _0x3a6e3b = "https://api-kejia.scimall.org.cn/push/setToken?timestamp=" + _0x36e4e2 + "&v=5.5.1&from=android&device_model=MIX2&channel=huawei&system_version=android9&sdk_int=28" + "&uuid=" + _0x199504 + "&tourist_token=" + _0x199504 + "&token=" + _0x27fa56 + "&sn=" + _0x353fe3;
  try {
    let _0xe37aaf = {
        "url": _0x3a6e3b,
        "headers": {
          "Host": _0x4a85c4,
          "Content-Length": "57",
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json;charset=UTF-8",
          "User-Agent": "okhttp/4.2.2",
          "Connection": "Keep-Alive"
        },
        "body": _0x827966
      },
      _0x1bdc05 = await _0x3a7c51(_0xe37aaf, "设置Token");
    console.log(_0x1bdc05);
    if (_0x1bdc05.code == 0) _0x597fca(_0x1bdc05.data.msg), await _0x4b4c63(3);else {
      _0x597fca("设置Token错误，原因未知");
      console.log(_0x1bdc05);
    }
  } catch (_0x1e559f) {
    console.log(_0x1e559f);
  }
}
async function _0x4ead65(_0x50f041) {
  let _0x5aae24 = _0x4c155e(),
    _0x2c2bdc;
  if (_0x50f041 == 0) _0x2c2bdc = "channel=baidu&device_model=MIX2&from=android&path=/signin/getSignInfo&sdk_int=28&system_version=android9&timestamp=" + _0x5aae24 + "&token=" + _0x27fa56 + "&tourist_token=" + _0x199504 + "&uuid=" + _0x199504 + "&v=5.5.1&secretkey=LH6064#!@&YTM";else {
    if (_0x50f041 == 1) {
      _0x2c2bdc = "channel=baidu&device_model=MIX2&from=android&path=/task/dailyTask&sdk_int=28&system_version=android9&timestamp=" + _0x5aae24 + "&token=" + _0x27fa56 + "&tourist_token=" + _0x199504 + "&uuid=" + _0x199504 + "&v=5.5.1&secretkey=LH6064#!@&YTM";
    } else _0x2c2bdc = "channel=baidu&device_model=MIX2&from=android&path=/banner/getBannerInfo&place=" + _0x50f041 + "&sdk_int=28&system_version=android9&timestamp=" + _0x5aae24 + "&token=" + _0x27fa56 + "&tourist_token=" + _0x199504 + "&uuid=" + _0x199504 + "&v=5.5.1&secretkey=LH6064#!@&YTM";
  }
  let _0x3fd204 = _0x28b9fc(_0x2c2bdc),
    _0x43c456;
  if (_0x50f041 == 0) {
    _0x43c456 = "https://api-kejia.scimall.org.cn/signin/getSignInfo?&timestamp=" + _0x5aae24 + "&v=5.5.1&from=android&device_model=MIX2&channel=baidu&system_version=android9&sdk_int=28" + "&uuid=" + _0x199504 + "&tourist_token=" + _0x199504 + "&token=" + _0x27fa56 + "&sn=" + _0x3fd204;
  } else {
    if (_0x50f041 == 1) _0x43c456 = "https://api-kejia.scimall.org.cn/task/dailyTask?&timestamp=" + _0x5aae24 + "&v=5.5.1&from=android&device_model=MIX2&channel=baidu&system_version=android9&sdk_int=28" + "&uuid=" + _0x199504 + "&tourist_token=" + _0x199504 + "&token=" + _0x27fa56 + "&sn=" + _0x3fd204;else {
      _0x43c456 = "https://api-kejia.scimall.org.cn/banner/getBannerInfo?place=" + _0x50f041 + "&timestamp=" + _0x5aae24 + "&v=5.5.1&from=android&device_model=MIX2&channel=baidu&system_version=android9&sdk_int=28" + "&uuid=" + _0x199504 + "&tourist_token=" + _0x199504 + "&token=" + _0x27fa56 + "&sn=" + _0x3fd204;
    }
  }
  try {
    let _0x2c45a9 = {
        "url": _0x43c456,
        "headers": {
          "Host": _0x4a85c4,
          "Accept": "application/json;charset=UTF-8",
          "User-Agent": "okhttp/4.2.2",
          "Connection": "Keep-Alive"
        }
      },
      _0x23e5fe = await _0x1b415f(_0x2c45a9, "更新信息");
    console.log(_0x23e5fe);
    _0x23e5fe.code == 0 ? (_0x597fca("更新成功"), await _0x4b4c63(3)) : (_0x597fca("更新失败了,原因未知!"), console.log(_0x23e5fe));
  } catch (_0x88e2a3) {
    console.log(_0x88e2a3);
  }
}
async function _0x54f035() {
  let _0x16505b = "https://h5.scimall.org.cn/Signdraw/ajaxDraw?token=" + _0x27fa56 + "&lottery_id=165";
  try {
    let _0x865e8f = {
        "url": _0x16505b,
        "headers": {
          "Host": "h5.scimall.org.cn",
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json;charset=UTF-8",
          "User-Agent": "Mozilla/5.0 (Linux; Android 9; MIX 2 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.136 Mobile Safari/537.36 SciMall/5.5.1;",
          "Cookie": "PHPSESSION=4tb00jvd00m1i1oje1l8v9rrd3; acw_tc=2760820416611817117308644efdbb76b8441f45f9863fe145c30793d6a756;",
          "Connection": "Keep-Alive"
        }
      },
      _0x511fa0 = await _0x1b415f(_0x865e8f, "抽奖");
    if (_0x511fa0.code == 0) {
      _0x597fca("抽奖获得" + _0x511fa0.data.msg);
      await _0x4b4c63(3);
    } else console.log(_0x511fa0);
  } catch (_0x762d30) {
    console.log(_0x762d30);
  }
}
async function _0x23e360() {
  let _0x4636d6 = "https://h5.scimall.org.cn/Signdraw/ajaxShare?token=" + _0x27fa56 + "&lottery_id=165";
  try {
    let _0x26c67d = {
        "url": _0x4636d6,
        "headers": {
          "Host": "h5.scimall.org.cn",
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json;charset=UTF-8",
          "User-Agent": "Mozilla/5.0 (Linux; Android 9; MIX 2 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.136 Mobile Safari/537.36 SciMall/5.5.1;",
          "Cookie": "PHPSESSION=4tb00jvd00m1i1oje1l8v9rrd3;",
          "Connection": "Keep-Alive"
        }
      },
      _0x284068 = await _0x1b415f(_0x26c67d, "分享抽奖");
    _0x284068.code == 0 ? (_0x597fca("分享" + _0x284068.msg), await _0x4b4c63(3)) : console.log(_0x284068);
  } catch (_0x13108e) {
    console.log(_0x13108e);
  }
}
async function _0xd9e64a(_0x314c52, _0x57179a) {
  return new Promise(_0x26bd89 => {
    let _0x3ec273 = [];
    if (_0x314c52) {
      if (_0x314c52.indexOf("@") !== -1) _0x314c52.split("@").forEach(_0x20f6b7 => {
        _0x3ec273.push(_0x20f6b7);
      });else {
        if (_0x314c52.indexOf("\n") !== -1) {
          _0x314c52.split("\n").forEach(_0x5ad0a8 => {
            _0x3ec273.push(_0x5ad0a8);
          });
        } else _0x3ec273.push(_0x314c52);
      }
      _0x26bd89(_0x3ec273);
    } else console.log(" " + _0x3d34c3.neme + ":未填写变量 " + _0x57179a + " ,请仔细阅读脚本说明!");
  });
}
async function _0x36d393(_0x24e841) {
  if (!_0x24e841) return;
  if (_0x1eaa6a > 0) {
    if (_0x3d34c3.isNode()) {
      var _0x66fed5 = require("./sendNotify");
      await _0x66fed5.sendNotify(_0x3d34c3.name, _0x24e841);
    } else _0x3d34c3.msg(_0x3d34c3.name, "", _0x24e841);
  } else console.log(_0x24e841);
}
function _0x597fca(_0x26daba) {
  if (_0x3d34c3.isNode()) _0x26daba && (console.log("    " + _0x26daba), _0x29fee8 += "\n    " + _0x26daba);else {
    console.log("    " + _0x26daba);
    _0x29fee8 += "\n    " + _0x26daba;
  }
}
function _0x547f38(_0x145fb6) {
  _0x145fb6 = _0x145fb6 || 32;
  var _0x3b2df9 = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    _0x157428 = _0x3b2df9.length,
    _0x3da450 = "";
  for (i = 0; i < _0x145fb6; i++) _0x3da450 += _0x3b2df9.charAt(Math.floor(Math.random() * _0x157428));
  return _0x3da450;
}
function _0x173321(_0x17c531) {
  _0x17c531 = _0x17c531 || 32;
  var _0x70c959 = "qwertyuioplkjhgfdsazxcvbnm1234567890",
    _0x278d4b = _0x70c959.length,
    _0x5f4d2e = "";
  for (i = 0; i < _0x17c531; i++) _0x5f4d2e += _0x70c959.charAt(Math.floor(Math.random() * _0x278d4b));
  return _0x5f4d2e;
}
function _0x407669(_0x3edf03, _0x1829f3) {
  return Math.round(Math.random() * (_0x1829f3 - _0x3edf03) + _0x3edf03);
}
function _0x5b50c7() {
  return Math.round(new Date().getTime()).toString();
}
function _0x4c155e() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function _0x417e41() {
  let _0x260b84 = new Date(),
    _0x52dfb4 = _0x260b84.getHours();
  return _0x52dfb4;
}
function _0x5e167b() {
  let _0x38d8df = new Date(),
    _0xaea129 = _0x38d8df.getMinutes();
  return _0xaea129;
}
function _0x2b485a() {
  let _0x289fb9 = new Date();
  return y = _0x289fb9.getFullYear(), y;
}
function _0x4e7b42() {
  let _0x3e5736 = new Date(),
    _0x282239 = _0x3e5736.getMonth();
  return _0x282239;
}
function _0x5eeb21() {
  let _0x5178d5 = new Date(),
    _0xda207c = _0x5178d5.getMonth();
  _0xda207c = _0xda207c + 1;
  if (_0xda207c.toString().length == 1) {
    _0xda207c = "0" + _0xda207c;
  }
  return _0xda207c;
}
function _0x3bd154() {
  let _0x337300 = new Date(),
    _0x4ad006 = _0x337300.getDate();
  return _0x4ad006;
}
function _0x46804c() {
  let _0x4b1154 = new Date(),
    _0xb82fee = _0x4b1154.getDate();
  return _0xb82fee.toString().length == 1 && (_0xb82fee = "0" + _0xb82fee), _0xb82fee;
}
function _0x4b4c63(_0xb02374) {
  return new Promise(function (_0x4f8df5) {
    setTimeout(_0x4f8df5, _0xb02374 * 1000);
  });
}
function _0x3ac8f4() {
  return new Promise(_0x7ce01f => {
    let _0xd18267 = {
      "url": "http://ovooa.com/API/wyrp/api.php"
    };
    _0x3d34c3.get(_0xd18267, async (_0x4546b1, _0x56b6b7, _0x14e3d3) => {
      try {
        _0x14e3d3 = JSON.parse(_0x14e3d3);
        console.log("网抑云时间: " + _0x14e3d3.data.Content + "  by--" + _0x14e3d3.data.Music);
        _0x29fee8 = "[网抑云时间]: " + _0x14e3d3.data.Content + "  by--" + _0x14e3d3.data.Music;
      } catch (_0x8e7497) {
        _0x3d34c3.logErr(_0x8e7497, _0x56b6b7);
      } finally {
        _0x7ce01f();
      }
    }, timeout = 3);
  });
}
async function _0x1b415f(_0x1109b3, _0xef09fa, _0x374efb = 3) {
  return new Promise(_0x139034 => {
    let _0x4b3464 = _0x1109b3;
    if (!_0xef09fa) {
      let _0x1ab462 = arguments.callee.toString(),
        _0xbfe874 = /function\s*(\w*)/i,
        _0x314971 = _0xbfe874.exec(_0x1ab462);
      _0xef09fa = _0x314971[1];
    }
    _0x2480f6 && (console.log("\n 【debug】=============== 这是 " + _0xef09fa + " 请求 url ==============="), console.log(_0x4b3464));
    _0x3d34c3.get(_0x4b3464, async (_0x50375a, _0x34d645, _0x3ef778) => {
      try {
        _0x2480f6 && (console.log("\n\n 【debug】===============这是 " + _0xef09fa + " 返回data=============="), console.log(_0x3ef778), console.log("\n 【debug】=============这是 " + _0xef09fa + " json解析后数据============"), console.log(JSON.parse(_0x3ef778)));
        let _0x4d9c97 = JSON.parse(_0x3ef778);
        if (_0x4d9c97 == undefined) {
          return;
        } else {
          _0x139034(_0x4d9c97);
        }
      } catch (_0x5dba2e) {
        console.log(_0x50375a, _0x34d645);
        console.log("\n " + _0xef09fa + " 失败了!请稍后尝试!!");
        _0x29fee8 = "\n " + _0xef09fa + " 失败了!请稍后尝试!!";
      } finally {
        _0x139034();
      }
    }, _0x374efb);
  });
}
function _0x46ecdc(_0x49d257) {
  _0x49d257.sort(function () {
    return Math.random() - 0.5;
  });
}
function _0x194630(_0x22d8f3) {
  _0x259f78 = _0x2c1aed[_0x22d8f3];
}
function _0x30fa5a(_0x2df356) {
  if (_0x2df356 == 0) _0x1e3aa4 = _0x407669(0, 4);
  if (_0x2df356 == 1) _0x1e3aa4 = _0x407669(5, 9);
  if (_0x2df356 == 2) _0x1e3aa4 = _0x407669(10, 14);
  if (_0x2df356 == 3) _0x1e3aa4 = _0x407669(15, 19);
  if (_0x2df356 == 4) _0x1e3aa4 = _0x407669(20, 24);
}
async function _0x3a7c51(_0x2dfefb, _0x4275f6, _0x52299d = 3) {
  return new Promise(_0x35462b => {
    let _0x1a21fc = _0x2dfefb;
    if (!_0x4275f6) {
      let _0x2d6b1a = arguments.callee.toString(),
        _0x4ca7b4 = /function\s*(\w*)/i,
        _0x531b10 = _0x4ca7b4.exec(_0x2d6b1a);
      _0x4275f6 = _0x531b10[1];
    }
    if (_0x2480f6) {
      console.log("\n 【debug】=============== 这是 " + _0x4275f6 + " 请求 url ===============");
      console.log(_0x1a21fc);
    }
    _0x3d34c3.post(_0x1a21fc, async (_0xee5e61, _0xf81ef4, _0xa5e013) => {
      try {
        _0x2480f6 && (console.log("\n\n 【debug】===============这是 " + _0x4275f6 + " 返回data=============="), console.log(_0xa5e013), console.log("\n 【debug】=============这是 " + _0x4275f6 + " json解析后数据============"), console.log(JSON.parse(_0xa5e013)));
        let _0x2733ef = JSON.parse(_0xa5e013);
        if (_0x2733ef == undefined) return;else _0x35462b(_0x2733ef);
      } catch (_0x113039) {
        console.log(_0xee5e61, _0xf81ef4);
        console.log("\n " + _0x4275f6 + " 失败了!请稍后尝试!!");
        _0x29fee8 = "\n " + _0x4275f6 + " 失败了!请稍后尝试!!";
      } finally {
        _0x35462b();
      }
    }, _0x52299d);
  });
}
async function _0x359809(_0x230489, _0x19f66f, _0x49cf8d = 3) {
  return new Promise(_0x76ae60 => {
    let _0x25e229 = _0x230489,
      _0x3a00e3 = require("request");
    if (!_0x19f66f) {
      let _0xd8e688 = arguments.callee.toString(),
        _0x179010 = /function\s*(\w*)/i,
        _0x283dd7 = _0x179010.exec(_0xd8e688);
      _0x19f66f = _0x283dd7[1];
    }
    _0x2480f6 && (console.log("\n 【debug】=============== 这是 " + _0x19f66f + " 请求 信息 ==============="), console.log(_0x25e229));
    _0x3a00e3(_0x25e229, async (_0xa2dab0, _0x7b4bdc, _0x45fc77) => {
      try {
        _0x2480f6 && (console.log("\n\n 【debug】===============这是 " + _0x19f66f + " 返回数据=============="), console.log(_0x45fc77), console.log("\n 【debug】=============这是 " + _0x19f66f + " json解析后数据============"), console.log(JSON.parse(_0x45fc77)));
        let _0x57e318 = JSON.parse(_0x45fc77);
        if (!_0x57e318) return;
        _0x76ae60(_0x57e318);
      } catch (_0x55e0c7) {
        console.log(_0xa2dab0, _0x7b4bdc);
        console.log("\n " + _0x19f66f + " 失败了!请稍后尝试!!");
        _0x29fee8 = "\n " + _0x19f66f + " 失败了!请稍后尝试!!";
      } finally {
        _0x76ae60();
      }
    });
    _0x49cf8d;
  });
}
function _0x45ead9(..._0x5df48b) {
  _0x2480f6 && console.log(..._0x5df48b);
}
function _0x5966a1(_0x1b6fb9) {
  function _0x45d7e8(_0x13a820, _0x11bbf7) {
    return _0x13a820 << _0x11bbf7 | _0x13a820 >>> 32 - _0x11bbf7;
  }
  function _0x4acc32(_0x2f2cdd, _0x186481) {
    var _0x437071, _0x441900, _0x516326, _0x20d868, _0x49d364;
    return _0x516326 = 2147483648 & _0x2f2cdd, _0x20d868 = 2147483648 & _0x186481, _0x437071 = 1073741824 & _0x2f2cdd, _0x441900 = 1073741824 & _0x186481, _0x49d364 = (1073741823 & _0x2f2cdd) + (1073741823 & _0x186481), _0x437071 & _0x441900 ? 2147483648 ^ _0x49d364 ^ _0x516326 ^ _0x20d868 : _0x437071 | _0x441900 ? 1073741824 & _0x49d364 ? 3221225472 ^ _0x49d364 ^ _0x516326 ^ _0x20d868 : 1073741824 ^ _0x49d364 ^ _0x516326 ^ _0x20d868 : _0x49d364 ^ _0x516326 ^ _0x20d868;
  }
  function _0x1f346b(_0x377a09, _0x5512fb, _0x150a53) {
    return _0x377a09 & _0x5512fb | ~_0x377a09 & _0x150a53;
  }
  function _0x481f06(_0x249932, _0x295a31, _0x340c83) {
    return _0x249932 & _0x340c83 | _0x295a31 & ~_0x340c83;
  }
  function _0x2e34af(_0x4982ff, _0x9b42d4, _0x465f40) {
    return _0x4982ff ^ _0x9b42d4 ^ _0x465f40;
  }
  function _0x1e5ae8(_0x2181c3, _0x4d95bc, _0x34506b) {
    return _0x4d95bc ^ (_0x2181c3 | ~_0x34506b);
  }
  function _0x1bbdde(_0x424cec, _0x5f29f1, _0x3ee4dd, _0x3b10f0, _0x5eeedc, _0x1bde68, _0x2482f8) {
    return _0x424cec = _0x4acc32(_0x424cec, _0x4acc32(_0x4acc32(_0x1f346b(_0x5f29f1, _0x3ee4dd, _0x3b10f0), _0x5eeedc), _0x2482f8)), _0x4acc32(_0x45d7e8(_0x424cec, _0x1bde68), _0x5f29f1);
  }
  function _0x2489f6(_0x5adcda, _0x4235d4, _0x4b9ae0, _0x3d6d4a, _0x3a14c2, _0x3fe2b7, _0x4cd3bf) {
    return _0x5adcda = _0x4acc32(_0x5adcda, _0x4acc32(_0x4acc32(_0x481f06(_0x4235d4, _0x4b9ae0, _0x3d6d4a), _0x3a14c2), _0x4cd3bf)), _0x4acc32(_0x45d7e8(_0x5adcda, _0x3fe2b7), _0x4235d4);
  }
  function _0x5d5b04(_0x98117f, _0x5da134, _0xf8e6ed, _0x4535ad, _0x554d8d, _0x3f39b8, _0x310e7d) {
    return _0x98117f = _0x4acc32(_0x98117f, _0x4acc32(_0x4acc32(_0x2e34af(_0x5da134, _0xf8e6ed, _0x4535ad), _0x554d8d), _0x310e7d)), _0x4acc32(_0x45d7e8(_0x98117f, _0x3f39b8), _0x5da134);
  }
  function _0x44c1ab(_0x3ea16a, _0x345e9e, _0x5ae29f, _0x2a13f3, _0x425bd2, _0x13c68a, _0x31c39f) {
    return _0x3ea16a = _0x4acc32(_0x3ea16a, _0x4acc32(_0x4acc32(_0x1e5ae8(_0x345e9e, _0x5ae29f, _0x2a13f3), _0x425bd2), _0x31c39f)), _0x4acc32(_0x45d7e8(_0x3ea16a, _0x13c68a), _0x345e9e);
  }
  function _0x281937(_0x385972) {
    for (var _0xc72001, _0x560339 = _0x385972.length, _0x3f6fa8 = _0x560339 + 8, _0x386574 = (_0x3f6fa8 - _0x3f6fa8 % 64) / 64, _0x25cac5 = 16 * (_0x386574 + 1), _0x578bbf = new Array(_0x25cac5 - 1), _0x439bc9 = 0, _0x4cec69 = 0; _0x560339 > _0x4cec69;) _0xc72001 = (_0x4cec69 - _0x4cec69 % 4) / 4, _0x439bc9 = _0x4cec69 % 4 * 8, _0x578bbf[_0xc72001] = _0x578bbf[_0xc72001] | _0x385972.charCodeAt(_0x4cec69) << _0x439bc9, _0x4cec69++;
    return _0xc72001 = (_0x4cec69 - _0x4cec69 % 4) / 4, _0x439bc9 = _0x4cec69 % 4 * 8, _0x578bbf[_0xc72001] = _0x578bbf[_0xc72001] | 128 << _0x439bc9, _0x578bbf[_0x25cac5 - 2] = _0x560339 << 3, _0x578bbf[_0x25cac5 - 1] = _0x560339 >>> 29, _0x578bbf;
  }
  function _0x25b5ce(_0x413f4c) {
    var _0x30b540,
      _0x2f96e4,
      _0x46f12f = "",
      _0x1e6b8f = "";
    for (_0x2f96e4 = 0; 3 >= _0x2f96e4; _0x2f96e4++) _0x30b540 = _0x413f4c >>> 8 * _0x2f96e4 & 255, _0x1e6b8f = "0" + _0x30b540.toString(16), _0x46f12f += _0x1e6b8f.substr(_0x1e6b8f.length - 2, 2);
    return _0x46f12f;
  }
  function _0x3c55b3(_0x1287c7) {
    _0x1287c7 = _0x1287c7.replace(/\r\n/g, "\n");
    for (var _0x1f61c7 = "", _0x7ba61f = 0; _0x7ba61f < _0x1287c7.length; _0x7ba61f++) {
      var _0x26c639 = _0x1287c7.charCodeAt(_0x7ba61f);
      128 > _0x26c639 ? _0x1f61c7 += String.fromCharCode(_0x26c639) : _0x26c639 > 127 && 2048 > _0x26c639 ? (_0x1f61c7 += String.fromCharCode(_0x26c639 >> 6 | 192), _0x1f61c7 += String.fromCharCode(63 & _0x26c639 | 128)) : (_0x1f61c7 += String.fromCharCode(_0x26c639 >> 12 | 224), _0x1f61c7 += String.fromCharCode(_0x26c639 >> 6 & 63 | 128), _0x1f61c7 += String.fromCharCode(63 & _0x26c639 | 128));
    }
    return _0x1f61c7;
  }
  var _0x379300,
    _0x2d397f,
    _0x3d3325,
    _0x29d619,
    _0x3d42ba,
    _0x3583fb,
    _0x11a8c7,
    _0x1e371d,
    _0x50030d,
    _0x43cd3e = [],
    _0x50f772 = 7,
    _0x3b7f6a = 12,
    _0x35e873 = 17,
    _0x19728c = 22,
    _0x55e891 = 5,
    _0x44cacd = 9,
    _0x26f6f6 = 14,
    _0x4887b0 = 20,
    _0x356f76 = 4,
    _0x465f70 = 11,
    _0x438c60 = 16,
    _0x4201f6 = 23,
    _0x1e2759 = 6,
    _0x14be8f = 10,
    _0x3023f7 = 15,
    _0xd57f4f = 21;
  for (_0x1b6fb9 = _0x3c55b3(_0x1b6fb9), _0x43cd3e = _0x281937(_0x1b6fb9), _0x3583fb = 1732584193, _0x11a8c7 = 4023233417, _0x1e371d = 2562383102, _0x50030d = 271733878, _0x379300 = 0; _0x379300 < _0x43cd3e.length; _0x379300 += 16) _0x2d397f = _0x3583fb, _0x3d3325 = _0x11a8c7, _0x29d619 = _0x1e371d, _0x3d42ba = _0x50030d, _0x3583fb = _0x1bbdde(_0x3583fb, _0x11a8c7, _0x1e371d, _0x50030d, _0x43cd3e[_0x379300 + 0], _0x50f772, 3614090360), _0x50030d = _0x1bbdde(_0x50030d, _0x3583fb, _0x11a8c7, _0x1e371d, _0x43cd3e[_0x379300 + 1], _0x3b7f6a, 3905402710), _0x1e371d = _0x1bbdde(_0x1e371d, _0x50030d, _0x3583fb, _0x11a8c7, _0x43cd3e[_0x379300 + 2], _0x35e873, 606105819), _0x11a8c7 = _0x1bbdde(_0x11a8c7, _0x1e371d, _0x50030d, _0x3583fb, _0x43cd3e[_0x379300 + 3], _0x19728c, 3250441966), _0x3583fb = _0x1bbdde(_0x3583fb, _0x11a8c7, _0x1e371d, _0x50030d, _0x43cd3e[_0x379300 + 4], _0x50f772, 4118548399), _0x50030d = _0x1bbdde(_0x50030d, _0x3583fb, _0x11a8c7, _0x1e371d, _0x43cd3e[_0x379300 + 5], _0x3b7f6a, 1200080426), _0x1e371d = _0x1bbdde(_0x1e371d, _0x50030d, _0x3583fb, _0x11a8c7, _0x43cd3e[_0x379300 + 6], _0x35e873, 2821735955), _0x11a8c7 = _0x1bbdde(_0x11a8c7, _0x1e371d, _0x50030d, _0x3583fb, _0x43cd3e[_0x379300 + 7], _0x19728c, 4249261313), _0x3583fb = _0x1bbdde(_0x3583fb, _0x11a8c7, _0x1e371d, _0x50030d, _0x43cd3e[_0x379300 + 8], _0x50f772, 1770035416), _0x50030d = _0x1bbdde(_0x50030d, _0x3583fb, _0x11a8c7, _0x1e371d, _0x43cd3e[_0x379300 + 9], _0x3b7f6a, 2336552879), _0x1e371d = _0x1bbdde(_0x1e371d, _0x50030d, _0x3583fb, _0x11a8c7, _0x43cd3e[_0x379300 + 10], _0x35e873, 4294925233), _0x11a8c7 = _0x1bbdde(_0x11a8c7, _0x1e371d, _0x50030d, _0x3583fb, _0x43cd3e[_0x379300 + 11], _0x19728c, 2304563134), _0x3583fb = _0x1bbdde(_0x3583fb, _0x11a8c7, _0x1e371d, _0x50030d, _0x43cd3e[_0x379300 + 12], _0x50f772, 1804603682), _0x50030d = _0x1bbdde(_0x50030d, _0x3583fb, _0x11a8c7, _0x1e371d, _0x43cd3e[_0x379300 + 13], _0x3b7f6a, 4254626195), _0x1e371d = _0x1bbdde(_0x1e371d, _0x50030d, _0x3583fb, _0x11a8c7, _0x43cd3e[_0x379300 + 14], _0x35e873, 2792965006), _0x11a8c7 = _0x1bbdde(_0x11a8c7, _0x1e371d, _0x50030d, _0x3583fb, _0x43cd3e[_0x379300 + 15], _0x19728c, 1236535329), _0x3583fb = _0x2489f6(_0x3583fb, _0x11a8c7, _0x1e371d, _0x50030d, _0x43cd3e[_0x379300 + 1], _0x55e891, 4129170786), _0x50030d = _0x2489f6(_0x50030d, _0x3583fb, _0x11a8c7, _0x1e371d, _0x43cd3e[_0x379300 + 6], _0x44cacd, 3225465664), _0x1e371d = _0x2489f6(_0x1e371d, _0x50030d, _0x3583fb, _0x11a8c7, _0x43cd3e[_0x379300 + 11], _0x26f6f6, 643717713), _0x11a8c7 = _0x2489f6(_0x11a8c7, _0x1e371d, _0x50030d, _0x3583fb, _0x43cd3e[_0x379300 + 0], _0x4887b0, 3921069994), _0x3583fb = _0x2489f6(_0x3583fb, _0x11a8c7, _0x1e371d, _0x50030d, _0x43cd3e[_0x379300 + 5], _0x55e891, 3593408605), _0x50030d = _0x2489f6(_0x50030d, _0x3583fb, _0x11a8c7, _0x1e371d, _0x43cd3e[_0x379300 + 10], _0x44cacd, 38016083), _0x1e371d = _0x2489f6(_0x1e371d, _0x50030d, _0x3583fb, _0x11a8c7, _0x43cd3e[_0x379300 + 15], _0x26f6f6, 3634488961), _0x11a8c7 = _0x2489f6(_0x11a8c7, _0x1e371d, _0x50030d, _0x3583fb, _0x43cd3e[_0x379300 + 4], _0x4887b0, 3889429448), _0x3583fb = _0x2489f6(_0x3583fb, _0x11a8c7, _0x1e371d, _0x50030d, _0x43cd3e[_0x379300 + 9], _0x55e891, 568446438), _0x50030d = _0x2489f6(_0x50030d, _0x3583fb, _0x11a8c7, _0x1e371d, _0x43cd3e[_0x379300 + 14], _0x44cacd, 3275163606), _0x1e371d = _0x2489f6(_0x1e371d, _0x50030d, _0x3583fb, _0x11a8c7, _0x43cd3e[_0x379300 + 3], _0x26f6f6, 4107603335), _0x11a8c7 = _0x2489f6(_0x11a8c7, _0x1e371d, _0x50030d, _0x3583fb, _0x43cd3e[_0x379300 + 8], _0x4887b0, 1163531501), _0x3583fb = _0x2489f6(_0x3583fb, _0x11a8c7, _0x1e371d, _0x50030d, _0x43cd3e[_0x379300 + 13], _0x55e891, 2850285829), _0x50030d = _0x2489f6(_0x50030d, _0x3583fb, _0x11a8c7, _0x1e371d, _0x43cd3e[_0x379300 + 2], _0x44cacd, 4243563512), _0x1e371d = _0x2489f6(_0x1e371d, _0x50030d, _0x3583fb, _0x11a8c7, _0x43cd3e[_0x379300 + 7], _0x26f6f6, 1735328473), _0x11a8c7 = _0x2489f6(_0x11a8c7, _0x1e371d, _0x50030d, _0x3583fb, _0x43cd3e[_0x379300 + 12], _0x4887b0, 2368359562), _0x3583fb = _0x5d5b04(_0x3583fb, _0x11a8c7, _0x1e371d, _0x50030d, _0x43cd3e[_0x379300 + 5], _0x356f76, 4294588738), _0x50030d = _0x5d5b04(_0x50030d, _0x3583fb, _0x11a8c7, _0x1e371d, _0x43cd3e[_0x379300 + 8], _0x465f70, 2272392833), _0x1e371d = _0x5d5b04(_0x1e371d, _0x50030d, _0x3583fb, _0x11a8c7, _0x43cd3e[_0x379300 + 11], _0x438c60, 1839030562), _0x11a8c7 = _0x5d5b04(_0x11a8c7, _0x1e371d, _0x50030d, _0x3583fb, _0x43cd3e[_0x379300 + 14], _0x4201f6, 4259657740), _0x3583fb = _0x5d5b04(_0x3583fb, _0x11a8c7, _0x1e371d, _0x50030d, _0x43cd3e[_0x379300 + 1], _0x356f76, 2763975236), _0x50030d = _0x5d5b04(_0x50030d, _0x3583fb, _0x11a8c7, _0x1e371d, _0x43cd3e[_0x379300 + 4], _0x465f70, 1272893353), _0x1e371d = _0x5d5b04(_0x1e371d, _0x50030d, _0x3583fb, _0x11a8c7, _0x43cd3e[_0x379300 + 7], _0x438c60, 4139469664), _0x11a8c7 = _0x5d5b04(_0x11a8c7, _0x1e371d, _0x50030d, _0x3583fb, _0x43cd3e[_0x379300 + 10], _0x4201f6, 3200236656), _0x3583fb = _0x5d5b04(_0x3583fb, _0x11a8c7, _0x1e371d, _0x50030d, _0x43cd3e[_0x379300 + 13], _0x356f76, 681279174), _0x50030d = _0x5d5b04(_0x50030d, _0x3583fb, _0x11a8c7, _0x1e371d, _0x43cd3e[_0x379300 + 0], _0x465f70, 3936430074), _0x1e371d = _0x5d5b04(_0x1e371d, _0x50030d, _0x3583fb, _0x11a8c7, _0x43cd3e[_0x379300 + 3], _0x438c60, 3572445317), _0x11a8c7 = _0x5d5b04(_0x11a8c7, _0x1e371d, _0x50030d, _0x3583fb, _0x43cd3e[_0x379300 + 6], _0x4201f6, 76029189), _0x3583fb = _0x5d5b04(_0x3583fb, _0x11a8c7, _0x1e371d, _0x50030d, _0x43cd3e[_0x379300 + 9], _0x356f76, 3654602809), _0x50030d = _0x5d5b04(_0x50030d, _0x3583fb, _0x11a8c7, _0x1e371d, _0x43cd3e[_0x379300 + 12], _0x465f70, 3873151461), _0x1e371d = _0x5d5b04(_0x1e371d, _0x50030d, _0x3583fb, _0x11a8c7, _0x43cd3e[_0x379300 + 15], _0x438c60, 530742520), _0x11a8c7 = _0x5d5b04(_0x11a8c7, _0x1e371d, _0x50030d, _0x3583fb, _0x43cd3e[_0x379300 + 2], _0x4201f6, 3299628645), _0x3583fb = _0x44c1ab(_0x3583fb, _0x11a8c7, _0x1e371d, _0x50030d, _0x43cd3e[_0x379300 + 0], _0x1e2759, 4096336452), _0x50030d = _0x44c1ab(_0x50030d, _0x3583fb, _0x11a8c7, _0x1e371d, _0x43cd3e[_0x379300 + 7], _0x14be8f, 1126891415), _0x1e371d = _0x44c1ab(_0x1e371d, _0x50030d, _0x3583fb, _0x11a8c7, _0x43cd3e[_0x379300 + 14], _0x3023f7, 2878612391), _0x11a8c7 = _0x44c1ab(_0x11a8c7, _0x1e371d, _0x50030d, _0x3583fb, _0x43cd3e[_0x379300 + 5], _0xd57f4f, 4237533241), _0x3583fb = _0x44c1ab(_0x3583fb, _0x11a8c7, _0x1e371d, _0x50030d, _0x43cd3e[_0x379300 + 12], _0x1e2759, 1700485571), _0x50030d = _0x44c1ab(_0x50030d, _0x3583fb, _0x11a8c7, _0x1e371d, _0x43cd3e[_0x379300 + 3], _0x14be8f, 2399980690), _0x1e371d = _0x44c1ab(_0x1e371d, _0x50030d, _0x3583fb, _0x11a8c7, _0x43cd3e[_0x379300 + 10], _0x3023f7, 4293915773), _0x11a8c7 = _0x44c1ab(_0x11a8c7, _0x1e371d, _0x50030d, _0x3583fb, _0x43cd3e[_0x379300 + 1], _0xd57f4f, 2240044497), _0x3583fb = _0x44c1ab(_0x3583fb, _0x11a8c7, _0x1e371d, _0x50030d, _0x43cd3e[_0x379300 + 8], _0x1e2759, 1873313359), _0x50030d = _0x44c1ab(_0x50030d, _0x3583fb, _0x11a8c7, _0x1e371d, _0x43cd3e[_0x379300 + 15], _0x14be8f, 4264355552), _0x1e371d = _0x44c1ab(_0x1e371d, _0x50030d, _0x3583fb, _0x11a8c7, _0x43cd3e[_0x379300 + 6], _0x3023f7, 2734768916), _0x11a8c7 = _0x44c1ab(_0x11a8c7, _0x1e371d, _0x50030d, _0x3583fb, _0x43cd3e[_0x379300 + 13], _0xd57f4f, 1309151649), _0x3583fb = _0x44c1ab(_0x3583fb, _0x11a8c7, _0x1e371d, _0x50030d, _0x43cd3e[_0x379300 + 4], _0x1e2759, 4149444226), _0x50030d = _0x44c1ab(_0x50030d, _0x3583fb, _0x11a8c7, _0x1e371d, _0x43cd3e[_0x379300 + 11], _0x14be8f, 3174756917), _0x1e371d = _0x44c1ab(_0x1e371d, _0x50030d, _0x3583fb, _0x11a8c7, _0x43cd3e[_0x379300 + 2], _0x3023f7, 718787259), _0x11a8c7 = _0x44c1ab(_0x11a8c7, _0x1e371d, _0x50030d, _0x3583fb, _0x43cd3e[_0x379300 + 9], _0xd57f4f, 3951481745), _0x3583fb = _0x4acc32(_0x3583fb, _0x2d397f), _0x11a8c7 = _0x4acc32(_0x11a8c7, _0x3d3325), _0x1e371d = _0x4acc32(_0x1e371d, _0x29d619), _0x50030d = _0x4acc32(_0x50030d, _0x3d42ba);
  var _0x41f471 = _0x25b5ce(_0x3583fb) + _0x25b5ce(_0x11a8c7) + _0x25b5ce(_0x1e371d) + _0x25b5ce(_0x50030d);
  return _0x41f471.toLowerCase();
}
function _0x4d1449(_0x4a3a24, _0x3f023b) {
  return _0x3f023b >>> _0x4a3a24 | _0x3f023b << 32 - _0x4a3a24;
}
function _0x2ba0f0(_0x2f906b, _0x1d55ca, _0xd0ece3) {
  return _0x2f906b & _0x1d55ca ^ ~_0x2f906b & _0xd0ece3;
}
function _0x28f0aa(_0x35de39, _0x45b8ef, _0x1317a9) {
  return _0x35de39 & _0x45b8ef ^ _0x35de39 & _0x1317a9 ^ _0x45b8ef & _0x1317a9;
}
function _0x94ac4f(_0x50f6d6) {
  return _0x4d1449(2, _0x50f6d6) ^ _0x4d1449(13, _0x50f6d6) ^ _0x4d1449(22, _0x50f6d6);
}
function _0x656303(_0x3ef38d) {
  return _0x4d1449(6, _0x3ef38d) ^ _0x4d1449(11, _0x3ef38d) ^ _0x4d1449(25, _0x3ef38d);
}
function _0x1db21b(_0x5f35cb) {
  return _0x4d1449(7, _0x5f35cb) ^ _0x4d1449(18, _0x5f35cb) ^ _0x5f35cb >>> 3;
}
function _0x31cbcb(_0x48438f) {
  return _0x4d1449(17, _0x48438f) ^ _0x4d1449(19, _0x48438f) ^ _0x48438f >>> 10;
}
function _0x4b8503(_0x4727cb, _0x11a372) {
  return _0x4727cb[_0x11a372 & 15] += _0x31cbcb(_0x4727cb[_0x11a372 + 14 & 15]) + _0x4727cb[_0x11a372 + 9 & 15] + _0x1db21b(_0x4727cb[_0x11a372 + 1 & 15]);
}
var _0x2592e8 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
  _0x4ccfca,
  _0x82f27e,
  _0x718f18,
  _0x5cd8c1 = "0123456789abcdef";
function _0x4e8bd8(_0x519275, _0x3add8f) {
  var _0x545004 = (_0x519275 & 65535) + (_0x3add8f & 65535),
    _0xa91928 = (_0x519275 >> 16) + (_0x3add8f >> 16) + (_0x545004 >> 16);
  return _0xa91928 << 16 | _0x545004 & 65535;
}
function _0x37c59c() {
  _0x4ccfca = new Array(8);
  _0x82f27e = new Array(2);
  _0x718f18 = new Array(64);
  _0x82f27e[0] = _0x82f27e[1] = 0;
  _0x4ccfca[0] = 1779033703;
  _0x4ccfca[1] = 3144134277;
  _0x4ccfca[2] = 1013904242;
  _0x4ccfca[3] = 2773480762;
  _0x4ccfca[4] = 1359893119;
  _0x4ccfca[5] = 2600822924;
  _0x4ccfca[6] = 528734635;
  _0x4ccfca[7] = 1541459225;
}
function _0x10aab2() {
  var _0x44f2a9,
    _0x268421,
    _0x33dc32,
    _0xfe232e,
    _0x4d31b3,
    _0x20e5c5,
    _0xe6e3fb,
    _0x22292b,
    _0x2e384f,
    _0x3df992,
    _0x3f5ffc = new Array(16);
  _0x44f2a9 = _0x4ccfca[0];
  _0x268421 = _0x4ccfca[1];
  _0x33dc32 = _0x4ccfca[2];
  _0xfe232e = _0x4ccfca[3];
  _0x4d31b3 = _0x4ccfca[4];
  _0x20e5c5 = _0x4ccfca[5];
  _0xe6e3fb = _0x4ccfca[6];
  _0x22292b = _0x4ccfca[7];
  for (var _0x413124 = 0; _0x413124 < 16; _0x413124++) _0x3f5ffc[_0x413124] = _0x718f18[(_0x413124 << 2) + 3] | _0x718f18[(_0x413124 << 2) + 2] << 8 | _0x718f18[(_0x413124 << 2) + 1] << 16 | _0x718f18[_0x413124 << 2] << 24;
  for (var _0x3ad803 = 0; _0x3ad803 < 64; _0x3ad803++) {
    _0x2e384f = _0x22292b + _0x656303(_0x4d31b3) + _0x2ba0f0(_0x4d31b3, _0x20e5c5, _0xe6e3fb) + _0x2592e8[_0x3ad803];
    if (_0x3ad803 < 16) _0x2e384f += _0x3f5ffc[_0x3ad803];else _0x2e384f += _0x4b8503(_0x3f5ffc, _0x3ad803);
    _0x3df992 = _0x94ac4f(_0x44f2a9) + _0x28f0aa(_0x44f2a9, _0x268421, _0x33dc32);
    _0x22292b = _0xe6e3fb;
    _0xe6e3fb = _0x20e5c5;
    _0x20e5c5 = _0x4d31b3;
    _0x4d31b3 = _0x4e8bd8(_0xfe232e, _0x2e384f);
    _0xfe232e = _0x33dc32;
    _0x33dc32 = _0x268421;
    _0x268421 = _0x44f2a9;
    _0x44f2a9 = _0x4e8bd8(_0x2e384f, _0x3df992);
  }
  _0x4ccfca[0] += _0x44f2a9;
  _0x4ccfca[1] += _0x268421;
  _0x4ccfca[2] += _0x33dc32;
  _0x4ccfca[3] += _0xfe232e;
  _0x4ccfca[4] += _0x4d31b3;
  _0x4ccfca[5] += _0x20e5c5;
  _0x4ccfca[6] += _0xe6e3fb;
  _0x4ccfca[7] += _0x22292b;
}
function _0x157da2(_0x45310b, _0x55bd61) {
  var _0x92e2d5,
    _0x41e448,
    _0x15f04f = 0;
  _0x41e448 = _0x82f27e[0] >> 3 & 63;
  var _0x3775ec = _0x55bd61 & 63;
  if ((_0x82f27e[0] += _0x55bd61 << 3) < _0x55bd61 << 3) _0x82f27e[1]++;
  _0x82f27e[1] += _0x55bd61 >> 29;
  for (_0x92e2d5 = 0; _0x92e2d5 + 63 < _0x55bd61; _0x92e2d5 += 64) {
    for (var _0x1397b3 = _0x41e448; _0x1397b3 < 64; _0x1397b3++) _0x718f18[_0x1397b3] = _0x45310b.charCodeAt(_0x15f04f++);
    _0x10aab2();
    _0x41e448 = 0;
  }
  for (var _0x1397b3 = 0; _0x1397b3 < _0x3775ec; _0x1397b3++) _0x718f18[_0x1397b3] = _0x45310b.charCodeAt(_0x15f04f++);
}
function _0xe72d11() {
  var _0x4d70d8 = _0x82f27e[0] >> 3 & 63;
  _0x718f18[_0x4d70d8++] = 128;
  if (_0x4d70d8 <= 56) {
    for (var _0x3062b3 = _0x4d70d8; _0x3062b3 < 56; _0x3062b3++) _0x718f18[_0x3062b3] = 0;
  } else {
    for (var _0x3062b3 = _0x4d70d8; _0x3062b3 < 64; _0x3062b3++) _0x718f18[_0x3062b3] = 0;
    _0x10aab2();
    for (var _0x3062b3 = 0; _0x3062b3 < 56; _0x3062b3++) _0x718f18[_0x3062b3] = 0;
  }
  _0x718f18[56] = _0x82f27e[1] >>> 24 & 255;
  _0x718f18[57] = _0x82f27e[1] >>> 16 & 255;
  _0x718f18[58] = _0x82f27e[1] >>> 8 & 255;
  _0x718f18[59] = _0x82f27e[1] & 255;
  _0x718f18[60] = _0x82f27e[0] >>> 24 & 255;
  _0x718f18[61] = _0x82f27e[0] >>> 16 & 255;
  _0x718f18[62] = _0x82f27e[0] >>> 8 & 255;
  _0x718f18[63] = _0x82f27e[0] & 255;
  _0x10aab2();
}
function _0x4767e6() {
  var _0x1322a0 = new Date().getTime(),
    _0x318e97 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x49bae5) {
      var _0x23dcd5 = (_0x1322a0 + Math.random() * 16) % 16 | 0;
      return _0x1322a0 = Math.floor(_0x1322a0 / 16), (_0x49bae5 == "x" ? _0x23dcd5 : _0x23dcd5 & 3 | 8).toString(16);
    });
  return _0x318e97;
}
function _0x27c86f() {
  var _0x257226 = 0,
    _0x372ad2 = new Array(32);
  for (var _0x4a1a5b = 0; _0x4a1a5b < 8; _0x4a1a5b++) {
    _0x372ad2[_0x257226++] = _0x4ccfca[_0x4a1a5b] >>> 24 & 255;
    _0x372ad2[_0x257226++] = _0x4ccfca[_0x4a1a5b] >>> 16 & 255;
    _0x372ad2[_0x257226++] = _0x4ccfca[_0x4a1a5b] >>> 8 & 255;
    _0x372ad2[_0x257226++] = _0x4ccfca[_0x4a1a5b] & 255;
  }
  return _0x372ad2;
}
function _0x34878c() {
  var _0x5ae21e = new String();
  for (var _0x33ed44 = 0; _0x33ed44 < 8; _0x33ed44++) {
    for (var _0x15d454 = 28; _0x15d454 >= 0; _0x15d454 -= 4) _0x5ae21e += _0x5cd8c1.charAt(_0x4ccfca[_0x33ed44] >>> _0x15d454 & 15);
  }
  return _0x5ae21e;
}
function _0x3cec1f(_0x394b71) {
  return _0x37c59c(), _0x157da2(_0x394b71, _0x394b71.length), _0xe72d11(), _0x34878c();
}
function _0x202910(_0x88143c, _0x163772) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x36563d {
    constructor(_0x160cb9) {
      this.env = _0x160cb9;
    }
    ["send"](_0x51c54c, _0x5541f2 = "GET") {
      _0x51c54c = "string" == typeof _0x51c54c ? {
        "url": _0x51c54c
      } : _0x51c54c;
      let _0x50f294 = this.get;
      return "POST" === _0x5541f2 && (_0x50f294 = this.post), new Promise((_0xb93211, _0x570778) => {
        _0x50f294.call(this, _0x51c54c, (_0x39cd41, _0x5daf3c, _0x38583e) => {
          _0x39cd41 ? _0x570778(_0x39cd41) : _0xb93211(_0x5daf3c);
        });
      });
    }
    ["get"](_0x352db3) {
      return this.send.call(this.env, _0x352db3);
    }
    ["post"](_0x3f29af) {
      return this.send.call(this.env, _0x3f29af, "POST");
    }
  }
  return new class {
    constructor(_0x22f530, _0x661cba) {
      this.name = _0x22f530;
      this.http = new _0x36563d(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x661cba);
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
    ["toObj"](_0x28e4c4, _0x2e6100 = null) {
      try {
        return JSON.parse(_0x28e4c4);
      } catch {
        return _0x2e6100;
      }
    }
    ["toStr"](_0x3daeec, _0x57a0e8 = null) {
      try {
        return JSON.stringify(_0x3daeec);
      } catch {
        return _0x57a0e8;
      }
    }
    ["getjson"](_0x597dc9, _0x1cfea9) {
      let _0x34ae57 = _0x1cfea9;
      const _0x22410c = this.getdata(_0x597dc9);
      if (_0x22410c) try {
        _0x34ae57 = JSON.parse(this.getdata(_0x597dc9));
      } catch {}
      return _0x34ae57;
    }
    ["setjson"](_0x46c704, _0x1e8dcc) {
      try {
        return this.setdata(JSON.stringify(_0x46c704), _0x1e8dcc);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x3fc41d) {
      return new Promise(_0x176756 => {
        this.get({
          "url": _0x3fc41d
        }, (_0x57721a, _0x980bcb, _0x39663a) => _0x176756(_0x39663a));
      });
    }
    ["runScript"](_0x494ca1, _0x3cc88b) {
      return new Promise(_0x73de3c => {
        let _0xe5f872 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0xe5f872 = _0xe5f872 ? _0xe5f872.replace(/\n/g, "").trim() : _0xe5f872;
        let _0x4345ea = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x4345ea = _0x4345ea ? 1 * _0x4345ea : 20;
        _0x4345ea = _0x3cc88b && _0x3cc88b.timeout ? _0x3cc88b.timeout : _0x4345ea;
        const [_0x84a9c2, _0x38011d] = _0xe5f872.split("@"),
          _0x5cee9a = {
            "url": "http://" + _0x38011d + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x494ca1,
              "mock_type": "cron",
              "timeout": _0x4345ea
            },
            "headers": {
              "X-Key": _0x84a9c2,
              "Accept": "*/*"
            }
          };
        this.post(_0x5cee9a, (_0x2276b1, _0x5a6a63, _0x15e13d) => _0x73de3c(_0x15e13d));
      }).catch(_0x40f6b4 => this.logErr(_0x40f6b4));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x3f2a53 = this.path.resolve(this.dataFile),
          _0x550879 = this.path.resolve(process.cwd(), this.dataFile),
          _0x513fdb = this.fs.existsSync(_0x3f2a53),
          _0x5649b4 = !_0x513fdb && this.fs.existsSync(_0x550879);
        if (!_0x513fdb && !_0x5649b4) return {};
        {
          const _0x16e4e9 = _0x513fdb ? _0x3f2a53 : _0x550879;
          try {
            return JSON.parse(this.fs.readFileSync(_0x16e4e9));
          } catch (_0xff11de) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0xaed2b2 = this.path.resolve(this.dataFile),
          _0x380637 = this.path.resolve(process.cwd(), this.dataFile),
          _0x433302 = this.fs.existsSync(_0xaed2b2),
          _0xa5df98 = !_0x433302 && this.fs.existsSync(_0x380637),
          _0x520cd5 = JSON.stringify(this.data);
        _0x433302 ? this.fs.writeFileSync(_0xaed2b2, _0x520cd5) : _0xa5df98 ? this.fs.writeFileSync(_0x380637, _0x520cd5) : this.fs.writeFileSync(_0xaed2b2, _0x520cd5);
      }
    }
    ["lodash_get"](_0x414aac, _0x18d49d, _0x1ec3fa) {
      const _0x463d3f = _0x18d49d.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x544807 = _0x414aac;
      for (const _0x32c006 of _0x463d3f) if (_0x544807 = Object(_0x544807)[_0x32c006], void 0 === _0x544807) return _0x1ec3fa;
      return _0x544807;
    }
    ["lodash_set"](_0x27fd68, _0x42b151, _0x1c283b) {
      return Object(_0x27fd68) !== _0x27fd68 ? _0x27fd68 : (Array.isArray(_0x42b151) || (_0x42b151 = _0x42b151.toString().match(/[^.[\]]+/g) || []), _0x42b151.slice(0, -1).reduce((_0x21e77f, _0x500652, _0x90ecdb) => Object(_0x21e77f[_0x500652]) === _0x21e77f[_0x500652] ? _0x21e77f[_0x500652] : _0x21e77f[_0x500652] = Math.abs(_0x42b151[_0x90ecdb + 1]) >> 0 == +_0x42b151[_0x90ecdb + 1] ? [] : {}, _0x27fd68)[_0x42b151[_0x42b151.length - 1]] = _0x1c283b, _0x27fd68);
    }
    ["getdata"](_0x313192) {
      let _0x3955f5 = this.getval(_0x313192);
      if (/^@/.test(_0x313192)) {
        const [, _0x325428, _0x3e7079] = /^@(.*?)\.(.*?)$/.exec(_0x313192),
          _0x2b892d = _0x325428 ? this.getval(_0x325428) : "";
        if (_0x2b892d) try {
          const _0x419fbf = JSON.parse(_0x2b892d);
          _0x3955f5 = _0x419fbf ? this.lodash_get(_0x419fbf, _0x3e7079, "") : _0x3955f5;
        } catch (_0x2ca7e2) {
          _0x3955f5 = "";
        }
      }
      return _0x3955f5;
    }
    ["setdata"](_0x25e13e, _0x5ecbea) {
      let _0x28b316 = false;
      if (/^@/.test(_0x5ecbea)) {
        const [, _0x53886c, _0x2ca3ce] = /^@(.*?)\.(.*?)$/.exec(_0x5ecbea),
          _0x26b3a8 = this.getval(_0x53886c),
          _0x129f4b = _0x53886c ? "null" === _0x26b3a8 ? null : _0x26b3a8 || "{}" : "{}";
        try {
          const _0x2fa28c = JSON.parse(_0x129f4b);
          this.lodash_set(_0x2fa28c, _0x2ca3ce, _0x25e13e);
          _0x28b316 = this.setval(JSON.stringify(_0x2fa28c), _0x53886c);
        } catch (_0x35f6cb) {
          const _0xc5f5ce = {};
          this.lodash_set(_0xc5f5ce, _0x2ca3ce, _0x25e13e);
          _0x28b316 = this.setval(JSON.stringify(_0xc5f5ce), _0x53886c);
        }
      } else _0x28b316 = this.setval(_0x25e13e, _0x5ecbea);
      return _0x28b316;
    }
    ["getval"](_0x599dfb) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x599dfb) : this.isQuanX() ? $prefs.valueForKey(_0x599dfb) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x599dfb]) : this.data && this.data[_0x599dfb] || null;
    }
    ["setval"](_0x1addaf, _0x403a16) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x1addaf, _0x403a16) : this.isQuanX() ? $prefs.setValueForKey(_0x1addaf, _0x403a16) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x403a16] = _0x1addaf, this.writedata(), !0) : this.data && this.data[_0x403a16] || null;
    }
    ["initGotEnv"](_0x2f551f) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x2f551f && (_0x2f551f.headers = _0x2f551f.headers ? _0x2f551f.headers : {}, void 0 === _0x2f551f.headers.Cookie && void 0 === _0x2f551f.cookieJar && (_0x2f551f.cookieJar = this.ckjar));
    }
    ["get"](_0x515913, _0x13787c = () => {}) {
      _0x515913.headers && (delete _0x515913.headers["Content-Type"], delete _0x515913.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x515913.headers = _0x515913.headers || {}, Object.assign(_0x515913.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x515913, (_0x193ab1, _0x144c64, _0x3ea6a2) => {
        !_0x193ab1 && _0x144c64 && (_0x144c64.body = _0x3ea6a2, _0x144c64.statusCode = _0x144c64.status);
        _0x13787c(_0x193ab1, _0x144c64, _0x3ea6a2);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x515913.opts = _0x515913.opts || {}, Object.assign(_0x515913.opts, {
        "hints": !1
      })), $task.fetch(_0x515913).then(_0x419cc7 => {
        const {
          statusCode: _0x2012e3,
          statusCode: _0x3e3904,
          headers: _0x19969e,
          body: _0x3387a1
        } = _0x419cc7;
        _0x13787c(null, {
          "status": _0x2012e3,
          "statusCode": _0x3e3904,
          "headers": _0x19969e,
          "body": _0x3387a1
        }, _0x3387a1);
      }, _0x4fd375 => _0x13787c(_0x4fd375))) : this.isNode() && (this.initGotEnv(_0x515913), this.got(_0x515913).on("redirect", (_0x17f9d8, _0x600561) => {
        try {
          if (_0x17f9d8.headers["set-cookie"]) {
            const _0x12f6f8 = _0x17f9d8.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x12f6f8 && this.ckjar.setCookieSync(_0x12f6f8, null);
            _0x600561.cookieJar = this.ckjar;
          }
        } catch (_0x48bd01) {
          this.logErr(_0x48bd01);
        }
      }).then(_0x197460 => {
        const {
          statusCode: _0x3aa02d,
          statusCode: _0x27f948,
          headers: _0x48f956,
          body: _0x555888
        } = _0x197460;
        _0x13787c(null, {
          "status": _0x3aa02d,
          "statusCode": _0x27f948,
          "headers": _0x48f956,
          "body": _0x555888
        }, _0x555888);
      }, _0x189943 => {
        const {
          message: _0x34592b,
          response: _0x3c5b36
        } = _0x189943;
        _0x13787c(_0x34592b, _0x3c5b36, _0x3c5b36 && _0x3c5b36.body);
      }));
    }
    ["post"](_0x472065, _0x2b0b3e = () => {}) {
      if (_0x472065.body && _0x472065.headers && !_0x472065.headers["Content-Type"] && (_0x472065.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x472065.headers && delete _0x472065.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x472065.headers = _0x472065.headers || {}, Object.assign(_0x472065.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x472065, (_0x5b0985, _0x301778, _0x15b66e) => {
        !_0x5b0985 && _0x301778 && (_0x301778.body = _0x15b66e, _0x301778.statusCode = _0x301778.status);
        _0x2b0b3e(_0x5b0985, _0x301778, _0x15b66e);
      });else {
        if (this.isQuanX()) _0x472065.method = "POST", this.isNeedRewrite && (_0x472065.opts = _0x472065.opts || {}, Object.assign(_0x472065.opts, {
          "hints": !1
        })), $task.fetch(_0x472065).then(_0x10278d => {
          const {
            statusCode: _0x1a3c8e,
            statusCode: _0x2353fa,
            headers: _0x37dfba,
            body: _0x690217
          } = _0x10278d;
          _0x2b0b3e(null, {
            "status": _0x1a3c8e,
            "statusCode": _0x2353fa,
            "headers": _0x37dfba,
            "body": _0x690217
          }, _0x690217);
        }, _0x349c4d => _0x2b0b3e(_0x349c4d));else {
          if (this.isNode()) {
            this.initGotEnv(_0x472065);
            const {
              url: _0xac86bb,
              ..._0x58f500
            } = _0x472065;
            this.got.post(_0xac86bb, _0x58f500).then(_0x1a3564 => {
              const {
                statusCode: _0x34b33c,
                statusCode: _0x161865,
                headers: _0x439d24,
                body: _0x538e87
              } = _0x1a3564;
              _0x2b0b3e(null, {
                "status": _0x34b33c,
                "statusCode": _0x161865,
                "headers": _0x439d24,
                "body": _0x538e87
              }, _0x538e87);
            }, _0x5c0e1a => {
              const {
                message: _0x4c9e9b,
                response: _0x544a01
              } = _0x5c0e1a;
              _0x2b0b3e(_0x4c9e9b, _0x544a01, _0x544a01 && _0x544a01.body);
            });
          }
        }
      }
    }
    ["time"](_0x14abd2, _0x18b65f = null) {
      const _0x2eff2c = _0x18b65f ? new Date(_0x18b65f) : new Date();
      let _0x336153 = {
        "M+": _0x2eff2c.getMonth() + 1,
        "d+": _0x2eff2c.getDate(),
        "H+": _0x2eff2c.getHours(),
        "m+": _0x2eff2c.getMinutes(),
        "s+": _0x2eff2c.getSeconds(),
        "q+": Math.floor((_0x2eff2c.getMonth() + 3) / 3),
        "S": _0x2eff2c.getMilliseconds()
      };
      /(y+)/.test(_0x14abd2) && (_0x14abd2 = _0x14abd2.replace(RegExp.$1, (_0x2eff2c.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x11b098 in _0x336153) new RegExp("(" + _0x11b098 + ")").test(_0x14abd2) && (_0x14abd2 = _0x14abd2.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x336153[_0x11b098] : ("00" + _0x336153[_0x11b098]).substr(("" + _0x336153[_0x11b098]).length)));
      return _0x14abd2;
    }
    ["msg"](_0xf714b8 = _0x88143c, _0x5c208c = "", _0x510544 = "", _0x816337) {
      const _0x265d20 = _0x17d5b8 => {
        if (!_0x17d5b8) return _0x17d5b8;
        if ("string" == typeof _0x17d5b8) return this.isLoon() ? _0x17d5b8 : this.isQuanX() ? {
          "open-url": _0x17d5b8
        } : this.isSurge() ? {
          "url": _0x17d5b8
        } : void 0;
        if ("object" == typeof _0x17d5b8) {
          if (this.isLoon()) {
            let _0x30af85 = _0x17d5b8.openUrl || _0x17d5b8.url || _0x17d5b8["open-url"],
              _0x39e31c = _0x17d5b8.mediaUrl || _0x17d5b8["media-url"];
            return {
              "openUrl": _0x30af85,
              "mediaUrl": _0x39e31c
            };
          }
          if (this.isQuanX()) {
            let _0x885298 = _0x17d5b8["open-url"] || _0x17d5b8.url || _0x17d5b8.openUrl,
              _0xd9c17b = _0x17d5b8["media-url"] || _0x17d5b8.mediaUrl;
            return {
              "open-url": _0x885298,
              "media-url": _0xd9c17b
            };
          }
          if (this.isSurge()) {
            let _0x35b0d6 = _0x17d5b8.url || _0x17d5b8.openUrl || _0x17d5b8["open-url"];
            return {
              "url": _0x35b0d6
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0xf714b8, _0x5c208c, _0x510544, _0x265d20(_0x816337)) : this.isQuanX() && $notify(_0xf714b8, _0x5c208c, _0x510544, _0x265d20(_0x816337))), !this.isMuteLog) {
        let _0x35b4b8 = ["", "==============📣系统通知📣=============="];
        _0x35b4b8.push(_0xf714b8);
        _0x5c208c && _0x35b4b8.push(_0x5c208c);
        _0x510544 && _0x35b4b8.push(_0x510544);
        console.log(_0x35b4b8.join("\n"));
        this.logs = this.logs.concat(_0x35b4b8);
      }
    }
    ["log"](..._0x55c7fe) {
      _0x55c7fe.length > 0 && (this.logs = [...this.logs, ..._0x55c7fe]);
      console.log(_0x55c7fe.join(this.logSeparator));
    }
    ["logErr"](_0x58f216, _0x1e6f6e) {
      const _0x4e461d = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x4e461d ? this.log("", "❗️" + this.name + ", 错误!", _0x58f216.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x58f216);
    }
    ["wait"](_0x1872dd) {
      return new Promise(_0x585bbd => setTimeout(_0x585bbd, _0x1872dd));
    }
    ["done"](_0x526bab = {}) {
      const _0x215082 = new Date().getTime(),
        _0x13bb25 = (_0x215082 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x13bb25 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x526bab);
    }
  }(_0x88143c, _0x163772);
}