const { initiateDeveloperControlledWalletsClient } = require('@circle-fin/developer-controlled-wallets');
const forge = require('node-forge')
const crypto = require('crypto')

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

// publicKey().then().catch(err => {
//   console.log('Err => ', err)
// });


function randomKEY() {
  console.log(crypto.randomBytes(32).toString('hex'))
}

randomKEY();