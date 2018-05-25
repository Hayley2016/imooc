function converToStarsArray(stars) {
  // 将50转换成[1, 1, 1, 1, 1]
  const num = stars.toString().substring(0, 1)
  let array = []
  for (let i = 0; i < 5; i++) {
    if (i < num) {
      array.push(1)
    } else {
      array.push(0)
    }
  }
  return array
}
function processDoubanData(moviesDouban, key) {
  let movies = []
  for (let i in moviesDouban.subjects) {
    const item = moviesDouban.subjects[i]
    const title = item.title.length >= 6 ? (item.title.substring(0, 6) + '...') : item.title
    const data = {
      title: title,
      average: item.rating.average,
      coverageUrl: item.images.large,
      movieId: item.id,
      stars: util.converToStarsArray(item.rating.stars)
    }
    movies.push(data)
  }
  const readyData = {}
  readyData[key] = {
    movies: movies,
    slogan: moviesDouban.title
  }
  return readyData
}
function http(url, cb) {
  wx.request({
    url: url,
    method: 'GET',
    header: {
      'Content-Type': 'json'
    },
    success: function (res) {
      cb && cb(res.data)
      // processDoubanData(res.data, key)
    },
    fail: function (err) {
      console.log(err)
    }
  })
}
function convertToCastString(casts) {
  var castsjoin = "";
  for (var idx in casts) {
    castsjoin = castsjoin + casts[idx].name + " / ";
  }
  return castsjoin.substring(0, castsjoin.length - 2);
}

function convertToCastInfos(casts) {
  var castsArray = []
  for (var idx in casts) {
    var cast = {
      img: casts[idx].avatars ? casts[idx].avatars.large : "",
      name: casts[idx].name
    }
    castsArray.push(cast);
  }
  return castsArray;
}
module.exports = {
  converToStarsArray: converToStarsArray,
  http: http,
  convertToCastString: convertToCastString,
  convertToCastInfos: convertToCastInfos
}