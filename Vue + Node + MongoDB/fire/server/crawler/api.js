import {writeFileSync} from 'fs'
import rp from 'request-promise'
import _ from 'lodash'
let _allCharacters = []
const sleep = time => new Promise(resolve => setTimeout(resolve, time))
export const getAllCharacters = async (page = 1) => {
  console.log('正在爬取第' + page + '页数据')
  const url = `https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=50`
  let body = await rp(url)
  body = JSON.parse(body)
  console.log('爬到' + body.length + '条数据')
  _allCharacters = _.union(_allCharacters, body)
  console.log('现有' + _allCharacters.length + '条数据')
  if (body.length < 50) {
    console.log('爬完啦')
    writeFileSync('./allCharacters.json', JSON.stringify(_allCharacters, null, 2), 'utf8')
    return false
  } else {
    writeFileSync('./allCharacters.json', JSON.stringify(_allCharacters, null, 2), 'utf8')
    await sleep(1000)
    page++
    getAllCharacters(page)
  }
}
getAllCharacters()
