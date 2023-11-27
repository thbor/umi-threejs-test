import { createAxiosByInterceptors } from "../api/request";

const instance = createAxiosByInterceptors({
  baseURL: "https://ap.api-bet.net",
  headers: {
    sign: "31f24f29c60e368449283b5159afeb81",
    random: "imZNI20Q11Q3qjvMvEEn2t36zgwJIjfQ",
    sn: "j4h",
    "Content-Type": "application/json",
  },
  proxy: {
    host: "127.0.0.1",
    post: 23457,
  },
} as any);
const cache = {};
// // FIXME:20秒内只允许请求一次
// instance.interceptors.request.use((config) => {
//   console.log("config", config);
//   const { url, data } = config;
//   console.log("data参数为", data);
//   if (url.indexOf("gameCode") > -1) {
//     // 判断缓存是否存在且未过期
//     if (cache[url + JSON.stringify(data)]) {
//       // 返回缓存的响应数据
//       console.log("cache", cache);
//       return Promise.resolve({
//         data: cache[url + JSON.stringify(data)].response,
//       });
//     }
//   }
//   console.log("config11111=", config);
//   return config;
// });
//
// instance.interceptors.response.use((response) => {
//   const { config, data, request } = response;
//   console.log("request", request);
//   if (config.method === "post") {
//     const { data: params } = config;
//     console.log("ppppp=", params);
//     // 更新缓存
//     cache[config.url + JSON.stringify(JSON.parse(params))] = {
//       response: data,
//     };
//   }
//   console.log("config22222=", config);
//   return response;
// });
// 创建玩家
// {
//   "playerId": "zan1232",
//     "platType": "ag",
//     "currency": "VND"
// }
export const createUser = (data) => {
  return instance
    .post("/api/server/create", data, {
      proxy: {
        host: "127.0.0.1",
        post: 23457,
      },
    } as any)
    .then((data) => data.data);
};
// 登录游戏
// {
//   "playerId": "zan1232",
//     "platType": "bbin",
//     "currency": "CNY",
//     "gameType":"4",
//     "gameCode":"",
//     "lang":"1",
//     "returnUrl":"",
//     "ingress":"3",
//     "walletType":"1",
//     "oddsType":""
// }
export const getGameUrl = (data) => {
  return instance.post("/api/server/gameUrl", data).then((data) => data.data);
};

// 试玩游戏
// {
//   "platType": "bbin",
//     "currency": "CNY",
//     "gameType":"4",
//     "gameCode":"",
//     "lang":"1",
//     "returnUrl":"",
//     "ingress":"3"
// }
export const getDemoUrl = (data) => {
  return instance.post("/api/server/demoUrl", data).then((res) => res.data);
};

// 查询玩家余额
// {
//   "playerId": "zan1232",
//     "platType": "ag",
//     "currency": "VND"
// }
export const getBalance = (data) => {
  return instance
    .post("https://ap.api-bet.net/api/server/balance", data)
    .then((data) => data.data);
};

// 玩家一键查询
// {
//   "playerId": "zan1232",
//     "currency": "VND"
// }
export const getBalanceAll = (data) => {
  return instance
    .post("/api/server/balanceAll", data)
    .then((data) => data.data);
};

// public function getBalanceAll($api_code,$gameCode,$gameType,$lang,$member_anme,$isMobile){
//   $post_data = [
//     'playerId' => $member_anme,
//       "platType" => strtolower($api_code),
//       "currency" => "CNY",
// ];
//   if(preg_match('/^http(s)?:\\/\\/.+/',$this->config['remote_api_domain'])){
//     $url = $this->config['remote_api_domain'].'/api/server/balanceAll';
//   }else{
//     $url = 'http://'.$this->config['remote_api_domain'].'/api/server/balanceAll';
//   }
//
//   $receive = $this->send_post_data($url,$post_data);
//
//   return $receive;
// }
// 玩家一键回收
// {
//   "playerId": "zan1232",
//     "currency": "VND"
// }
export const getTransferAll = (data) => {
  return instance.post("/api/server/transferAll", data);
};
// 转账钱包
// {
//   "playerId": "test0716",
//     "platType": "ag",
//     "currency": "CNY",
//     "type":"1",
//     "amount":"15",
//     "orderId":"97860a6f6eaacc7e256a0a1371b67c16"
// }
export const transfer = (data) => {
  return instance.post("/api/server/transfer", data).then((res) => res.data);
};
// 转账钱包-转换状态
// {
//   "playerId": "test0716",
//     "currency": "CNY",
//     "orderId":"97860a6f6eaacc7e256a0a1371b67c16"
// }
export const transferStatus = (data) => {
  return instance
    .post("/api/server/transferStatus", data)
    .then((res) => res.data);
};
// 免转钱包-额度转换
// {
//   "playerId": "test0716",
//     "currency": "CNY",
//     "type":"1",
//     "amount":"15",
//     "orderId":"97860a6f6eaacc7e256a0a1371b67c16"
// }
export const walletTransfer = (data) => {
  return instance.post("/api/server/walletTransfer", data);
};
// 免转钱包-转换状态
// {
//   "playerId": "test0716",
//     "currency": "CNY",
//     "orderId":"97860a6f6eaacc7e256a0a1371b67c16"
// }
export const walletStatus = (data) => {
  return instance.post("/api/server/walletStatus", data);
};
// 免转钱包-查询钱包
// {
//   "playerId": "test0716",
//     "currency": "CNY"
// }
export const getQuota = () => {
  return instance.post("/api/server/quota").then((res) => res.data);
};

export const walletBalance = (data) => {
  return instance
    .post("/api/server/walletBalance", data)
    .then((res) => res.data);
};

// 获取游戏代码
export const getGameCode = (data: any): any => {
  if (cache[JSON.stringify(data)]) {
    // 返回缓存的响应数据
    console.log("cache", cache);
    return Promise.resolve(cache[JSON.stringify(data)].response);
  } else {
    return instance.post("/api/server/gameCode", data).then((res) => {
      console.log("getGameCode的res=", res);
      // 判断缓存是否存在且未过期
      cache[JSON.stringify(data)] = {
        response: res.data,
      };
      return res.data;
    });
  }

  // return Promise.resolve([
  //   {
  //     platType: "bbin",
  //     gameType: "2",
  //     gameCode: "d43yr9ywsv",
  //     ingress: "3",
  //     gameName: {
  //       vi: "Chiến tranh giữa các vì sao",
  //       zh_hans: "惑星战记",
  //       ko: "Alien War",
  //       th: "สงครามเอเลี่ยน",
  //       ja: "Alien War",
  //       en: "Alien War",
  //       zh_hant: "惑星戰記",
  //       id: "Alien War",
  //     },
  //     imageUrl: {
  //       vi: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/vi/954a3560lk5p9j83.webp",
  //       },
  //       th: {
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/th/78u795193n266831.webp",
  //       },
  //       zh_hans: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/zh_hans/c4k8u639ifdq40lw.webp",
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/zh_hans/nr41w8gw9cf3916j.webp",
  //       },
  //       en: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/en/apt0084elwfk4o17.webp",
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/en/82vjvex8hz3sz084.webp",
  //       },
  //     },
  //   },
  //   {
  //     platType: "bbin",
  //     gameType: "2",
  //     gameCode: "xc15l107gv",
  //     ingress: "3",
  //     gameName: {
  //       vi: "Staronic",
  //       zh_hans: "Staronic",
  //       ko: "Staronic",
  //       th: "Staronic",
  //       ja: "Staronic",
  //       en: "Staronic",
  //       zh_hant: "Staronic",
  //       id: "Staronic",
  //     },
  //     imageUrl: {
  //       vi: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/vi/191o011vu20lw368.webp",
  //       },
  //       th: {
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/th/10p1ee51169m994t.webp",
  //       },
  //       zh_hans: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/zh_hans/tpvwwfc3413v5glm.webp",
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/zh_hans/479050jh8v823w38.webp",
  //       },
  //       en: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/en/qt429scgbpi13qlv.webp",
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/en/di12x7ts1phui5a5.webp",
  //       },
  //     },
  //   },
  //   {
  //     platType: "bbin",
  //     gameType: "2",
  //     gameCode: "o88ck17379",
  //     ingress: "3",
  //     gameName: {
  //       vi: "Khỉ leo cây",
  //       zh_hans: "猴子爬树",
  //       ko: "멍키 크라임",
  //       th: "ลิงปีนต้นไม้",
  //       ja: "モンキークライム",
  //       en: "Monkey GoGo",
  //       zh_hant: "猴子爬樹",
  //       id: "Monkey GoGo",
  //     },
  //     imageUrl: {
  //       vi: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/vi/048z26734ca8wp87.webp",
  //       },
  //       th: {
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/th/hgfz3awt1800e1m0.webp",
  //       },
  //       zh_hans: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/zh_hans/n983824g31820ei9.webp",
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/zh_hans/v1nw1214c0r9q229.webp",
  //       },
  //       en: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/en/8995x25711398h62.webp",
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/en/o31530z6of81k19j.webp",
  //       },
  //     },
  //   },
  //   {
  //     platType: "bbin",
  //     gameType: "2",
  //     gameCode: "68b1k831g9",
  //     ingress: "3",
  //     gameName: {
  //       vi: "King Kong leo trèo",
  //       zh_hans: "金刚爬楼",
  //       ko: "킹콩",
  //       th: "คิงคอง",
  //       ja: "キング コング",
  //       en: "King Kong",
  //       zh_hant: "金剛爬樓",
  //       id: "King Kong",
  //     },
  //     imageUrl: {
  //       vi: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/vi/3vi273m12j9y5nr2.webp",
  //       },
  //       th: {
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/th/91nam9g94s0encs9.webp",
  //       },
  //       zh_hans: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/zh_hans/xywh4m963kl09t8k.webp",
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/zh_hans/0o2v11zsx7u89alj.webp",
  //       },
  //       en: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/en/53b481qiz28hb30s.webp",
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/en/19ixa2yjx3y66076.webp",
  //       },
  //     },
  //   },
  //   {
  //     platType: "bbin",
  //     gameType: "2",
  //     gameCode: "05j00lf570",
  //     ingress: "3",
  //     gameName: {
  //       vi: "Nhật ký săn tìm ngoài hành tinh",
  //       zh_hans: "外星战记",
  //       ko: "갤럭시II",
  //       th: "เกมส์สงครามกาแล็กซี่",
  //       ja: "ギャラクシー2",
  //       en: "Galaxy II",
  //       zh_hant: "外星戰記",
  //       id: "Galaxy II",
  //     },
  //     imageUrl: {
  //       vi: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/vi/x5hp73i3p3wtk739.webp",
  //       },
  //       th: {
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/th/49h664r8lb1fy52f.webp",
  //       },
  //       zh_hans: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/zh_hans/1o38126f45pz3zjv.webp",
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/zh_hans/1ai6kkp200874k8o.webp",
  //       },
  //       en: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/en/jj1a91trjiuzl03h.webp",
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/en/u65mi5r7e8vv0344.webp",
  //       },
  //     },
  //   },
  //   {
  //     platType: "bbin",
  //     gameType: "2",
  //     gameCode: "l139gdgcg2",
  //     ingress: "3",
  //     gameName: {
  //       vi: "Cuộc chiến dải ngân hà",
  //       zh_hans: "外星争霸",
  //       ko: "갤럭시",
  //       th: "เครื่องเล่นเกมประเภทดาวแบบ 25 ไลน์",
  //       ja: "銀河",
  //       en: "Galaxy",
  //       zh_hant: "外星爭霸",
  //       id: "Galaxy",
  //     },
  //     imageUrl: {
  //       vi: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/vi/y41wuqptr809u69g.webp",
  //       },
  //       th: {
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/th/fff369625d3ghj61.webp",
  //       },
  //       zh_hans: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/zh_hans/l1d9xr2128204imj.webp",
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/zh_hans/5j1w562o36vi076g.webp",
  //       },
  //       en: {
  //         square:
  //           "https://cdn.api-bet.com/game/image/square/bbin/en/c6b5bfj9iu677d2t.webp",
  //         rectangle:
  //           "https://cdn.api-bet.com/game/image/rectangle/bbin/en/9lyz0xs03umo1c11.webp",
  //       },
  //     },
  //   },
  // ]);
};
