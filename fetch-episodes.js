const fs = require('fs')
const dataDir = './src/data/'
const artistDir = './src/data/artists/'

const admin = require('firebase-admin')
admin.initializeApp({
  credential: admin.credential.cert({
    project_id: process.env.GCP_PROJECT_ID,
    private_key: process.env.GCP_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.GCP_CLIENT_EMAIL
  }),
  databaseURL: process.env.GCP_DATABASE_URL
})

const db = admin.firestore()

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

function fetchEpisodesFromDatabase() {
  return new Promise(async (resolve) => {
    const snapshot = await db.collection('episode').get()
    snapshot.forEach((doc) => {
      fs.writeFile(
        dataDir + doc.id + '.json',
        JSON.stringify(doc.data()),
        (err) => {
          if (err) console.log(err)
        }
      )
    })
    console.log(snapshot.size + ' episodes saved.')
    resolve()
  })
}

function fetchArtistsFromDatabase() {
  return new Promise(async (resolve) => {
    const snapshot = await db.collection('artist').get()
    snapshot.forEach((doc) => {
      fs.writeFile(
        artistDir + doc.id + '.json',
        JSON.stringify(doc.data()),
        (err) => {
          if (err) console.log(err)
        }
      )
    })
    console.log(snapshot.size + ' artists saved.')
    resolve()
  })
}
