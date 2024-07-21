const { initiateDeveloperControlledWalletsClient } = require('@circle-fin/developer-controlled-wallets');
const forge = require('node-forge')
// const crypto = require('crypto')

// const secret = crypto.randomBytes(32).toString('hex')

// console.log(secret) 


const circleDeveloperSdk = initiateDeveloperControlledWalletsClient({
  apiKey: 'TEST_API_KEY:29270588b3dc54e6b153eccaca7188de:fb6a57dc08ae6a900d7f037d54779f3a',
  entitySecret: 'f1bfb96b6b5bd0e97a814e11889aa144a9eddb901de714ccbc401166cb3c729d' // Make sure to enter the entity secret from the step above.
});

async function publicKey() {
  const response = await circleDeveloperSdk.getPublicKey({});
  console.log(response)

  const entitySecret = forge.util.hexToBytes('f1bfb96b6b5bd0e97a814e11889aa144a9eddb901de714ccbc401166cb3c729d')
  const publicKey = forge.pki.publicKeyFromPem(response.data.publicKey)
  const encryptedData = publicKey.encrypt(entitySecret, 'RSA-OAEP', {
    md: forge.md.sha256.create(),
    mgf1: {
      md: forge.md.sha256.create(),
    },
  })

  console.log(forge.util.encode64(encryptedData))
}

publicKey().then().catch(err => {
  console.log('Err => ', err)
});

const SIMPLE_RESONSE = {
  "id": "qUgQKCh1TWe7NzX1lVpU1g",
  "title": "What is DAW",
  "content": '',
  "coverImage": {
    "url": "https://www.datocms-assets.com/51952/1698738763-what-is-daw.png",
    "alt": null,
    "responsiveImage": {
      "srcSet": "https://www.datocms-assets.com/51952/1698738763-what-is-daw.png?dpr=0.25&fit=crop&fm=jpg&h=1000&w=2000 500w,https://www.datocms-assets.com/51952/1698738763-what-is-daw.png?dpr=0.5&fit=crop&fm=jpg&h=1000&w=2000 1000w,https://www.datocms-assets.com/51952/1698738763-what-is-daw.png?dpr=0.75&fit=crop&fm=jpg&h=1000&w=2000 1500w,https://www.datocms-assets.com/51952/1698738763-what-is-daw.png?fit=crop&fm=jpg&h=1000&w=2000 2000w",
      "webpSrcSet": "https://www.datocms-assets.com/51952/1698738763-what-is-daw.png?dpr=0.25&fit=crop&fm=webp&h=1000&w=2000 500w,https://www.datocms-assets.com/51952/1698738763-what-is-daw.png?dpr=0.5&fit=crop&fm=webp&h=1000&w=2000 1000w,https://www.datocms-assets.com/51952/1698738763-what-is-daw.png?dpr=0.75&fit=crop&fm=webp&h=1000&w=2000 1500w,https://www.datocms-assets.com/51952/1698738763-what-is-daw.png?fit=crop&fm=webp&h=1000&w=2000 2000w",
      "sizes": "(max-width: 2000px) 100vw, 2000px",
      "src": "https://www.datocms-assets.com/51952/1698738763-what-is-daw.png?fit=crop&fm=jpg&h=1000&w=2000",
      "width": 2000,
      "height": 1000,
      "aspectRatio": 2,
      "alt": null,
      "title": null,
      "bgColor": "#03ea7b",
      "base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx0sHR4mJh0tKysvHiUtKSUiJDUlKC0vMjIyJSI4PTcwPCsxMi8BCgsLDg0OHBAQHC8oIig7Ozs7Oy87Oy8vOzs7Ly81OzU1NTsvLy81Lzs7Ly8vLzsvLy8vLy8vLy81Ly8vLy8vL//AABEIAAwAGAMBIgACEQEDEQH/xAAXAAEAAwAAAAAAAAAAAAAAAAAGAAQF/8QAHxAAAQQCAgMAAAAAAAAAAAAAAQACAwQFBhGREhNR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIB/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQMAEQIxQv/aAAwDAQACEQMRAD8AEQYGsMe4l4WpqmpULcrnSSA8fShrL9kUHN9pVvX8ncgnc2OZwHCrAGCzFlbivZdZxtZ/DXjtREMxk7c1g+cxKi0g3ACmnqf/2Q=="
    }
  },
  "excerpt": "DAW belongs to the subset of fully on-chain games, characterized by being entirely on-chain, open-ended, and having no pre-set gameplay. ",
  "date": "2023-10-31",
  "tags": [
    {
      "id": "2EeRtPO6Qym2M5Fy2PcK-w",
      "name": "DAW",
      "slug": "daw"
    }
  ],
  "slug": "what-is-daw",
  "minutesToRead": "5",
  "seo": [
    {
      "attributes": null,
      "content": "What is DAW",
      "tag": "title"
    },
    {
      "attributes": {
        "property": "og:title",
        "content": "What is DAW"
      },
      "content": null,
      "tag": "meta"
    },
    {
      "attributes": {
        "name": "twitter:title",
        "content": "What is DAW"
      },
      "content": null,
      "tag": "meta"
    },
    {
      "attributes": {
        "name": "description",
        "content": "DAW belongs to the subset of fully on-chain games, characterized by being entirely on-chain, open-ended, and having no pre-set gameplay"
      },
      "content": null,
      "tag": "meta"
    },
    {
      "attributes": {
        "property": "og:description",
        "content": "DAW belongs to the subset of fully on-chain games, characterized by being entirely on-chain, open-ended, and having no pre-set gameplay"
      },
      "content": null,
      "tag": "meta"
    },
    {
      "attributes": {
        "name": "twitter:description",
        "content": "DAW belongs to the subset of fully on-chain games, characterized by being entirely on-chain, open-ended, and having no pre-set gameplay"
      },
      "content": null,
      "tag": "meta"
    },
    {
      "attributes": {
        "property": "og:image",
        "content": "https://www.datocms-assets.com/51952/1698738763-what-is-daw.png?auto=format&fit=max&w=1200"
      },
      "content": null,
      "tag": "meta"
    },
    {
      "attributes": {
        "property": "og:image:width",
        "content": "1200"
      },
      "content": null,
      "tag": "meta"
    },
    {
      "attributes": {
        "property": "og:image:height",
        "content": "628"
      },
      "content": null,
      "tag": "meta"
    },
    {
      "attributes": {
        "name": "twitter:image",
        "content": "https://www.datocms-assets.com/51952/1698738763-what-is-daw.png?auto=format&fit=max&w=1200"
      },
      "content": null,
      "tag": "meta"
    },
    {
      "attributes": {
        "property": "og:locale",
        "content": "en_US"
      },
      "content": null,
      "tag": "meta"
    },
    {
      "attributes": {
        "property": "og:type",
        "content": "article"
      },
      "content": null,
      "tag": "meta"
    },
    {
      "attributes": {
        "property": "article:modified_time",
        "content": "2023-10-31T08:02:07Z"
      },
      "content": null,
      "tag": "meta"
    },
    {
      "attributes": {
        "name": "twitter:card",
        "content": "summary"
      },
      "content": null,
      "tag": "meta"
    }
  ]
}