require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember undo hunt option flip gather'; 
let testAccounts = [
"0x4a6391a998620ff8784be938bd2b671c43e4179401f6b4a089748a8225c23675",
"0xa0217340ad1c078484df081a514e7ed84f75cf985d30b9683151722837690ab8",
"0x0d85a47ab5646995257b148d849b7f87881f8a265177175066869d7565bb2ef0",
"0xf277b7ae7952ac1ed332a7c86fbfa0debbfcba758a7dad5543f8035ea72330c2",
"0x7896745d6fe5426dffe3fb98af6631891a02bab922ce95a2b2ca3df9b6698cf6",
"0xe4845429048644606e6cf589ff603ebb2adfb3a73d98b70e1857cd2cf2fc865e",
"0x1ad407e0ab55e54ca19ec530f32247eedc6a4f6f3f367865a02cc53cf1029f26",
"0xff4de3785468dd734513d1ba5c7ee46d5dc960910ec42291e6113654b59cadd8",
"0x382cadc6b940d9f16fd15f351d52701f607bee58d130b3d6aa4f74fa914adbe2",
"0x713714574d219d56ad6a379a6f88229770d9b6fb4f56b6e3978e6e1416429094"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

