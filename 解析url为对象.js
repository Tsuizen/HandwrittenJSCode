let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/

function URLToObj(url) {
  const params = url.split('?')[1];
  const paramsArr = params.split('&');
  const paramsObj = {};

  paramsArr.forEach((params) => {
    let param = params.split('=');
    if (param.length > 1) {
      let [key, value] = param;
      value = decodeURIComponent(value);
      if (!paramsObj.hasOwnProperty(key)) {
        paramsObj[key] = value
      } else {
        paramsObj[key] = [].concat(paramsObj[key], value);
      }
    } else {
      paramsObj[param] = true;
    }
    // if (/=/.test(params)) {
    //   let [key, val] = params.split('=');
    //   val = decodeURIComponent(val);
    //   val = /^\d+$/.test(val) ? +val : val;
    //   if (!paramsObj.hasOwnProperty(key)) {
    //     paramsObj[key] = val;
    //   } else {
    //     paramsObj[key] = [].concat(paramsObj[key], val);
    //   }
    // } else {
    //   paramsObj[params] = true;
    // }
  })
  return paramsObj;
}

console.log(URLToObj(url))
