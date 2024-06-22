const QRCode = require('qrcode');
const { error_message } = require('../error_message');
const { Web_Base_Url } = require('../configs');

class Utils {
    constructor() { }

    async generateQRCode(code = this.handleCreateReferralToken()) {
        return new Promise(async (resolve, reject) => {
            try {
                const url = Web_Base_Url + "/signup?c=" + code || '';
                const qrCodeImage = await QRCode.toDataURL(url);
                resolve(qrCodeImage)
            } catch (err) {
                console.error('Error generating QR code:', err);
                reject(err)
            }
        })
    }

    async handleCreateReferralToken(length = 9) {
        return new Promise((resolve, reject) => {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let referralToken = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                referralToken += characters[randomIndex];
            }
            resolve(referralToken);
        })
    }

}

module.exports = { Utils }