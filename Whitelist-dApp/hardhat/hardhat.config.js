require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
    solidity: "0.8.9",
    networks: {
        goerli: {
            url: "https://radial-quick-moon.ethereum-goerli.discover.quiknode.pro/3c7860204c665c82cb45892677f5b461211a6d83/",
            accounts: [PRIVATE_KEY],
        },
    },
};

// require("@nomiclabs/hardhat-waffle");
// require("dotenv").config({ path: ".env" });

// const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

// const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;

// module.exports = {
//   solidity: "0.8.4",
//   networks: {
//     goerli: {
//       url: ALCHEMY_API_KEY_URL,
//       accounts: [GOERLI_PRIVATE_KEY],
//     },
//   },
// };
