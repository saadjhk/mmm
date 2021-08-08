require('dotenv').config();
const ethers = require('ethers');

const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);
const wallet = new ethers.Wallet(process.env.P_KEY);

provider.getBalance(wallet.address).then(val => {
    console.log(+val / 1e18);
    process.exit(1);
});