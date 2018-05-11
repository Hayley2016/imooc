import jsonp from 'common/js/jsonp.js'
import axios from 'axios'
import {commonParams, options} from './config'
export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  // var nObj = Object.assign({},obj,obj1);
  // 花括号叫目标对象，后面的obj、obj1是源对象。
  // 对象合并是指：将源对象里面的属性添加到目标对象中去，若两者的属性名有冲突，后面的将会覆盖前面的
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
export function getDiscList () {
  const url = '/api/getDistList'
  const data = Object.assign({}, commonParams, {
    picmid: 1,
    rnd: Math.random(),
    loginUin: '2826746721',
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
  // return jsonp(url, data, options)
}
// export function getSongList(disstid) {
// const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
//
// const data = Object.assign({}, commonParams, {
//  disstid,
//  type: 1,
//  json: 1,
//  utf8: 1,
//  onlysong: 0,
//  platform: 'yqq',
//  hostUin: 0,
//  needNewCode: 0
// })
//
// return jsonp(url, data, options)
// }
