const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const express = require('express')

const app = express()
const url = 'https://www.thisisanfield.com'

axios(url)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const article = []

    $('.entry-title', html).each(function(){
      const title = $(this).text()
      article.push({
        title
      })
    })
    console.log(article)
  }).catch(err => console.log(err))

app.listen(PORT, () => console.log('Server is running on PORT ${PORT}'))