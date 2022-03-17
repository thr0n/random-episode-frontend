const fs = require('fs')
const dotenv = require('dotenv')
const AWS = require('aws-sdk')
const dataDir = './src/data/'
const artistDir = './src/data/artists/'

dotenv.config()

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
  region: process.env.AWS_REGION
})

let docClient = new AWS.DynamoDB.DocumentClient()

const fetchEpisodesFromDatabase = () => {
  return new Promise(async (resolve) => {
    const params = {
      TableName: 'Episode'
    }
    docClient.scan(params, (err, data) => {
      if (err) {
        console.error('Unable to query. Error:', JSON.stringify(err, null, 2))
      } else {
        console.log('Episode query succeeded.')
        data.Items.forEach((item) => {
          fs.writeFile(
            dataDir + item.id + '.json',
            JSON.stringify(item),
            (err) => {
              if (err) console.log(err)
            }
          )
        })
      }
    })
    resolve()
  })
}

const fetchArtistsFromDatabase = () => {
  return new Promise(async (resolve) => {
    const params = {
      TableName: 'Artist'
    }
    docClient.scan(params, (err, data) => {
      if (err) {
        console.error('Unable to query. Error:', JSON.stringify(err, null, 2))
      } else {
        console.log('Artist query succeeded.')
        data.Items.forEach((item) => {
          fs.writeFile(
            artistDir + item.id + '.json',
            JSON.stringify(item),
            (err) => {
              if (err) console.log(err)
            }
          )
        })
      }
    })
    resolve()
  })
}

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir)
}
if (!fs.existsSync(artistDir)) {
  fs.mkdirSync(artistDir)
}

;(async function () {
  await fetchEpisodesFromDatabase()
  await fetchArtistsFromDatabase()
})()

