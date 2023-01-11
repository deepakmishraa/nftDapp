// import React from "react";
// import { createAlchemyWeb3 } from "@alch/alchemy-web3";
// const API_URL =
//   "https://eth-goerli.g.alchemy.com/v2/_feaCR-lfDsfXZ3nF-BZH2lne9HZDSnc";

// const PUBLIC_KEY = "0xE167e7Dd530d13B60e0666006D56edBA69E28e78";
// const PRIVATE_KEY =
//   "82e809dcfca5c6edb412266e6657e9f11204929c38ae9c44b96b6e7a9a8a2697";

// const web3 = createAlchemyWeb3(API_URL);

// const contract = require("./assets/MyNFT.json");

// console.log(JSON.stringify(contract.abi));

// const contractAddress = "0x62c4fa2E59034D16846814A8bef9Cd846026545d";
// const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

// function TestingAch() {

//     async function mintNFT(tokenURI) {
//   console.log(tokenURI);
//   const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce

//   //the transaction
//   const tx = {
//     from: PUBLIC_KEY,
//     to: contractAddress,
//     nonce: nonce,
//     gas: 500000,
//     data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
//   };

//   const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
//   signPromise
//     .then((signedTx) => {
//       web3.eth.sendSignedTransaction(
//         signedTx.rawTransaction,
//         function (err, hash) {
//           if (!err) {
//             console.log(
//               "The hash of your transaction is: ",
//               hash,
//               "\nCheck Alchemy's Mempool to view the status of your transaction!"
//             );
//           } else {
//             console.log(
//               "Something went wrong when submitting your transaction:",
//               err
//             );
//           }
//         }
//       );
//     })
//     .catch((err) => {
//       console.log(" Promise failed:", err);
//     });
// }
//   return (
//     <>
//     vbgcdfbhcdf
// </>
// <button
//   onClick={() =>
//     mintNFT(
//       "https://gateway.pinata.cloud/ipfs/QmR9cmeToyY7paebR5F2CYyoPKq7CjJN33onExP2KtJTvU"
//     )
//   }
// >
//   Click me!
// </button>
//   );
// }

// export default TestingAch;

import { createAlchemyWeb3 } from "@alch/alchemy-web3";
const API_URL =
  "https://eth-goerli.g.alchemy.com/v2/_feaCR-lfDsfXZ3nF-BZH2lne9HZDSnc";

const PUBLIC_KEY = "0xE167e7Dd530d13B60e0666006D56edBA69E28e78";
const PRIVATE_KEY =
  "82e809dcfca5c6edb412266e6657e9f11204929c38ae9c44b96b6e7a9a8a2697";

const web3 = createAlchemyWeb3(API_URL);

// const contract = require("./assets/MyNFT.json");

// console.log(JSON.stringify(contract.abi));

const contractAddress = "0x62c4fa2E59034D16846814A8bef9Cd846026545d";
// const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

// async function mintNFT(tokenURI) {
//   console.log(tokenURI);
// //   const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce

//   //the transaction
// //   const tx = {
// //     from: PUBLIC_KEY,
// //     to: contractAddress,
// //     nonce: nonce,
// //     gas: 500000,
// //     data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
// //   };

// //   const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
// //   signPromise
// //     .then((signedTx) => {
// //       web3.eth.sendSignedTransaction(
// //         signedTx.rawTransaction,
// //         function (err, hash) {
// //           if (!err) {
// //             console.log(
// //               "The hash of your transaction is: ",
// //               hash,
// //               "\nCheck Alchemy's Mempool to view the status of your transaction!"
// //             );
// //           } else {
// //             console.log(
// //               "Something went wrong when submitting your transaction:",
// //               err
// //             );
// //           }
// //         }
// //       );
// //     })
// //     .catch((err) => {
// //       console.log(" Promise failed:", err);
// //     });
// }

const mintNFT =async (tokenURI)=>{
    console.log("token")
      const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce
    
  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
  };

  const signPromise =await  web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
//   console.log("signTx",signPromise)
//   signPromise
//     .then((signedTx) => {
//       web3.eth.sendSignedTransaction(
//         signedTx.rawTransaction,
//         function (err, hash) {
//           if (!err) {
//             console.log(
//               "The hash of your transaction is: ",
//               hash,
//               "\nCheck Alchemy's Mempool to view the status of your transaction!"
//             );
//           } else {
//             console.log(
//               "Something went wrong when submitting your transaction:",
//               err
//             );
//           }
//         }
//       );
//     })
//     .catch((err) => {
//       console.log(" Promise failed:", err);
//     });
}


const TestingAch = () => {
  return (
    <button
      onClick={() =>
        mintNFT(
          "https://gateway.pinata.cloud/ipfs/QmR9cmeToyY7paebR5F2CYyoPKq7CjJN33onExP2KtJTvU"
        )
      }
    >
      Click me!
    </button>
  );
};
export default TestingAch;
