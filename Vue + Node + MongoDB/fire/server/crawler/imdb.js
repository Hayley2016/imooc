import cheerio from 'cheerio'
import rp from 'request-promise'
import R from 'ramda'
import {writeFileSync} from 'fs'
// import Agent from 'socks5-http-client/lib/Agent'
export const getIMDBCharacters = async () => {
  const options = {
    uri: 'http://www.imdb.com/title/tt0944947/fullcredits?ref_=tt_cl_sm#cast',
    // agentClass: Agent,
    // agentOptions: {
    //   socksHost: 'localhost',
    //   socksPort: 1080 // 本地 VPN 的端口，这里用的 shadowsocks
    // },
    transform: body => cheerio.load(body)
  }
  let photos = []
  const $ = await rp(options)
  // console.log($('table.cast_list tr.odd, tr.even').length)
  $('table.cast_list tr.odd, tr.even').each(function () {
    const nmIdDom = $(this).find('td.itemprop a')
    const nmId = nmIdDom.attr('href')
    const characterDom = $(this).find('td.character a')
    const name = characterDom.text()
    const chId = characterDom.attr('href')
    const playedByDom = $(this).find('td.itemprop span.itemprop')
    const playedBy = playedByDom.text()
    photos.push({
      nmId,
      name,
      chId,
      playedBy
    })
  })
  const fn = R.compose(
    R.map(photo => {
      // /name/nm0227759/?ref_=tt_cl_t1
      // /title/tt0944947/characters/nm0227759?ref_=tt_cl_t1
      const reg1 = /\/name\/(.*?)\/\?ref/
      // const reg2 = /\/character\/(.*?)\/\?ref/

      const match1 = photo.nmId.match(reg1)
      // const match2 = photo.chId.match(reg2)
      photo.nmId = match1[1]
      photo.chId = photo.chId.split('/')[2]

      return photo
    }),
    R.filter(photo => photo.playedBy && photo.name && photo.nmId && photo.chId)
  )
  // console.log(photos)
  photos = fn(photos)
  writeFileSync('./imdb.json', JSON.stringify(photos, null, 2), 'utf8')
  // return photos
}
getIMDBCharacters()

// import _ from 'lodash'
// import R from 'ramda'
// import rp from 'request-promise'
// import cheerio from 'cheerio'
// // request 国外网站的时候使用本地的 VPN
// import Agent from'socks5-http-client/lib/Agent'
//
// const sleep = time => new Promise(resolve => setTimeout(resolve, time))
// const jsonPath = path => resolve(__dirname, '../database/json/', path)
//
// export const getIMDbCharacter = async () => {
//   // imdb 上权游的卡司的页面地址 http://www.imdb.com/title/tt0944947/fullcredits?ref_=tt_cl_sm#cast
//   const options = {
//     uri: 'http://www.imdb.com/title/tt0944947/fullcredits?ref_=tt_cl_sm#cast',
//     agentClass: Agent,
//     agentOptions: {
//       socksHost: 'localhost',
//       socksPort: 1080 // 本地 VPN 的端口，这里用的 shadowsocks
//     },
//     transform: body => cheerio.load(body)
//   }
//
//   var $ = await rp(options)
//   var photos = []
//
//   console.log(1)
//   // 拿到所有的 playedBy, nmId, name, chId
//   $('table.cast_list tr.odd, tr.even').each(function () {
//     let playedBy = $(this).find('td.itemprop span.itemprop')
//     playedBy = playedBy.text()
//
//     let nmId = $(this).find('td.itemprop a')
//     nmId = nmId.attr('href')
//
//     let character = $(this).find('td.character a')
//
//     let name = character.text()
//     let chId = character.attr('href')
//
//     const data = {
//       playedBy,
//       nmId,
//       name,
//       chId
//     }
//
//     photos.push(data)
//   })
//
//   const fn = R.compose(
//     R.map(photo => {
//       const reg1 = /\/name\/(.*?)\/\?ref/
//       const reg2 = /\/character\/(.*?)\/\?ref/
//
//       const match1 = photo.nmId.match(reg1)
//       const match2 = photo.chId.match(reg2)
//
//       photo.nmId = match1[1]
//       photo.chId = match2[1]
//
//       return photo
//     }),
//     R.filter(photo => photo.playedBy && photo.name && photo.nmId && photo.chId)
//   )
//
//   photos = fn(photos)
//
//   return photos
// }
//
// export const getIMDbProfile = async (url) => {
//   const options = {
//     uri: url,
//     agentClass: Agent,
//     agentOptions: {
//       socksHost: 'localhost',
//       socksPort: 1080 // 本地 VPN 的端口，这里用的 shadowsocks
//     },
//     transform: body => cheerio.load(body)
//   }
//
//   const $ = await rp(options)
//
//   let img = $('a[name="headshot"] img')
//
//   img = img.attr('src')
//
//   if (img) {
//     img = img.split('_V1').shift()
//     img += '_V1.jpg'
//   }
//
//   return img
// }
//
//
// export const getIMDbImages = async url => {
//   const options = {
//     uri: url,
//     agentClass: Agent,
//     agentOptions: {
//       socksHost: 'localhost',
//       socksPort: 1080 // 本地 VPN 的端口，这里用的 shadowsocks
//     },
//     transform: body => cheerio.load(body)
//   }
//
//   const $ = await rp(options)
//
//   let images = []
//
//   $('div.media_index_thumb_list a img').each(function () {
//     var src = $(this).attr('src')
//
//     if (src) {
//       src = src.split('_V1').shift()
//       src += '_V1.jpg'
//       images.push(src)
//     }
//   })
//
//   return images
// }
