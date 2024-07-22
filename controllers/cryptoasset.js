//const TEST_SECRETE_KEY = "f1bfb96b6b5bd0e97a814e11889aa144a9eddb901de714ccbc401166cb3c729d";
//const TEST_CIRCLE_API_KEY = "TEST_API_KEY:29270588b3dc54e6b153eccaca7188de:fb6a57dc08ae6a900d7f037d54779f3a";
const CryptoAsset = require('../model/cryptoasset');
const tatumdocs = require('@api/tatumdocs');
const axios = require('axios');
const TATUM_API_KEY = "t-6699a7552d63e7001c92f4ce-f23285d7138e466d96ba13a1"; // TODO: Change to mainnet API KEY
const TATUM_WEBHOOK_SECRET = "tatum_webhook_secret"; //TODO: Replace with actual Tatum webhook secret
tatumdocs.auth(TATUM_API_KEY);
async function getWalletAddressForAsset(crypto, user_id) {
  // Check if the wallet address exists in the CryptoAsset collection
  let asset = await CryptoAsset.findOne({ user_id: user_id, currencyCode: crypto });
  if (asset) {
    return asset.depositAddress;
  }


  // Create a new wallet if it doesn't exist
  switch (crypto) {
    case 'BTC':
      asset = await createBTCWallet(user_id);
      break;
    case 'ETH':
      asset = await createETHWallet(user_id);
      break;
    case 'LTC':
      asset = await createLTCWallet(user_id);
      break;
    case 'TRX':
      asset = await createTRXWallet(user_id);
      break;
    case 'USDC':
      asset = await createUSDCWallet(user_id);
      break;
    case 'USDT':
      asset = await createUSDTWallet(user_id);
      break;
    case 'XRP':
      asset = await createXRPWallet(user_id);
      break;
    default:
      throw new Error(`Unsupported cryptocurrency: ${crypto}`);
  }

  return asset.depositAddress;
  
}



const generateWalletFunctions = (currency) => {
  const generateCryptoResource = (method, url, data = null, headers = {}) => {
    const options = {
      method,
      url,
      headers: {
        accept: 'application/json',
        'x-api-key': TATUM_API_KEY,
        ...(data && { 'content-type': 'application/json' })
      },
      ...(data && { data }) 
    };
    console.log("Options => ", options)
    return axios.request(options);
  }
  return {
    generateWallet: () => generateCryptoResource('GET', `https://api.tatum.io/v3/${currency}/wallet`),
    generateAddress: ({ xpub, index }) => generateCryptoResource('GET', `https://api.tatum.io/v3/${currency}/address/${xpub}/${index}`),
    generateAddressPrivateKey: ({ mnemonic, index }) => generateCryptoResource('POST', `https://api.tatum.io/v3/${currency}/wallet/priv`, { index, mnemonic }),
  };
};

const btcFunctions = generateWalletFunctions('bitcoin');
const ltcFunctions = generateWalletFunctions('litecoin');
const tronFunctions = generateWalletFunctions('tron');
const ethFunctions = generateWalletFunctions('ethereum');

async function createWallet(user_id, currency, generateWalletFn, generateAddressFn, generatePrivateKeyFn, index = 0) {
  const { xpub, mnemonic } = await generateWalletFn().then(response => {
    return response.data;
  }).catch(err => {
    console.log("Error creating wallet ", err);
    throw err;
  });
  const { address: walletAddress } = await generateAddressFn({ xpub, index }).then(response => {
    return response.data;
  }).catch(err => {
    console.log("Error creating address ", err);
    throw err;
  });;
  const { key: privateKey } = await generatePrivateKeyFn({ mnemonic, index }).then(response => {
    return response.data;
  }).catch(err => {
    console.log("Error creating priv key ", err);
    throw err;
  });;

  const accOptions = {
    method: 'POST',
    url: 'https://api.tatum.io/v3/ledger/account',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'x-api-key': TATUM_API_KEY
    },
    data: {
      customer: { accountingCurrency: 'USD', externalId: user_id },
      currency,
      xpub
    }
  };

  const tatumAccount = await axios
    .request(accOptions)
    .then(function (response) {
      return response.data
    }).catch(err => {
    console.log("Error creating account ", err);
    throw err;
    });;
  
  const depOptions = {
    method: 'POST',
    url: `https://api.tatum.io/v3/offchain/account/${tatumAccount.id}/address`,
    headers: {
      accept: 'application/json',
      'x-api-key': TATUM_API_KEY
    }
  };
  const { address: depositAddress } = await axios
    .request(depOptions)
    .then(function (response) {
      return response.data
    }).catch(err => {
    console.log("Error generating dp address ", err);
    throw err;
  });;
  const assetData = {
    tatumAccountID: tatumAccount.id,
    currencyCode: currency,
    user_id,
    walletAddress,
    privateKey,
    depositAddress,
    mnemonic
  };
  const asset = new CryptoAsset(assetData);
  await asset.save();
  return assetData;
}

async function createBTCWallet(user_id) {
  return createWallet(user_id, 'BTC', btcFunctions.generateWallet, btcFunctions.generateAddress, btcFunctions.generateAddressPrivateKey);
}

async function createETHWallet(user_id) {
  return createWallet(user_id, 'ETH', ethFunctions.generateWallet, ethFunctions.generateAddress,  ethFunctions.generateAddressPrivateKey );
}

async function createLTCWallet(user_id) {
  return createWallet(user_id, 'LTC', ltcFunctions.generateWallet, ltcFunctions.generateAddress , ltcFunctions.generateAddressPrivateKey );
}

async function createTRXWallet(user_id) {
  return createWallet(user_id, 'TRX', tronFunctions.generateWallet, tronFunctions.generateAddress , tronFunctions.generateAddressPrivateKey);
}

async function createUSDCWallet(user_id) {
  return createWallet(user_id, 'USDC', ethFunctions.generateWallet, ethFunctions.generateAddress, ethFunctions.generateAddressPrivateKey );
}


async function createUSDTWallet(user_id) {
  return createWallet(user_id, 'USDT', ethFunctions.generateWallet, ethFunctions.generateAddress, ethFunctions.generateAddressPrivateKey );
}

async function createXRPWallet(user_id) {
  const { address: walletAddress, secret: privateKey } = await tatumdocs.xrpWallet();
  const tatumAccount = await tatumdocs.createAccount({
    customer: { accountingCurrency: 'USD', externalId: user_id },
    currency: 'XRP',
  });
  await tatumdocs.assignAddress({
    index: 1,
    id: tatumAccount.id,
    address: walletAddress
  });
  const assetData = {
    tatumAccountID: tatumAccount.id,
    currencyCode: 'XRP',
    user_id,
    walletAddress,
    privateKey,
    depositAddress: walletAddress,
  };
  const asset = new CryptoAsset(assetData);
  await asset.save();
  return assetData;
}

async function getWalletAddress(req, res) {
  try {
    const { crypto } = req.query;
    const address = await getWalletAddressForAsset(crypto, req.id)
    return res.status(200).json({address})
  } catch (error) {
    console.error('Error getting buy list:', error);
    res.status(500).json({ message: 'Error fetching buy list' });
  }
}

function validateTatumSignature(req) {
  const signature = req.headers['x-tatum-signature'];
  const payload = JSON.stringify(req.body);
  const hmac = crypto.createHmac('sha256', TATUM_WEBHOOK_SECRET);
  hmac.update(payload);
  const digest = hmac.digest('hex');
  return signature === digest;
}

// Webhook handler for Tatum notifications
async function tatumWebHook(req, res) {
  if (!validateTatumSignature(req)) {
    return res.status(401).send('Invalid signature');
  }
  const { type, data } = req.body;

  try {
    if (type === 'account.deposit' || type === 'account.withdrawal') {
      const { accountId, currency, availableBalance } = data;

      // Find the corresponding CryptoAsset
      const asset = await CryptoAsset.findOne({ tatumAccountID: accountId, currencyCode: currency.toUpperCase() });
      if (asset) {
        // Update the balance
        asset.balance = availableBalance;
        await asset.save();
      }
    }

    res.status(200).send('Webhook handled');
  } catch (error) {
    console.error('Error handling webhook:', error);
    res.status(500).send('Error handling webhook');
  }
}

module.exports = {
  getWalletAddress,
  tatumWebHook
};