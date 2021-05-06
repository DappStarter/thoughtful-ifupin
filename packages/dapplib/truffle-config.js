require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad harvest crisp foster spoon'; 
let testAccounts = [
"0x57030fa02e30f74966dbedd65c131c83ecdb93f5d79c33c386230725e033cb38",
"0x7a852120bb05a7d46a74efecc99b2b69fbef882d459c5f41cdfc59c44a4fb22b",
"0xe539a58d5ce08e8a2adca2124a9da9aab1a70b33c96c2fe13ebef9b56d153516",
"0x7b417cebcb024239668e2d1fa4fcbb149f53f69d578427141433f6e3cd298145",
"0xe0ca50bab8c70eff7d441c829eb1c4c73eaeb66c737cfd8a8952a1e2f85511f9",
"0x411d8127b58924615cc02ab4844220046e6c17bf3ec7d9e081ba94912939b7e6",
"0x43157de93f6e66b496aae3000b24cf697dd98e58d56b63911fa1f59ef0e68166",
"0x6312e5d37fd5ed251fb7b9efba4c1b9e14efc8eb886e9e74b373f6a1acc5609a",
"0x0ded0bef38e9a56089b518c2230051e52f3d92741c5e6a7fcaf9f2780dcb380e",
"0x92470c45258072760be53edc56c305991e29f96cb574984415ab830b3f5c9916"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
