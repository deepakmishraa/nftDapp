import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import contractAbi from "../assets/contract.json";
import { ethers } from "ethers";
import AppPinata from "./AppPinata";
import { Link } from "react-router-dom";

function MintNft(props) {
  const injected = new InjectedConnector({});
  const { active, account, activate } = useWeb3React();

  console.log(contractAbi);
  const [mintMessage, setMintMessage] = useState({
    message: "",
    transactionHash: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const [fromAddress, setFromAddresss] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [tokenids, setTokenids] = useState("");

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    "0xfcFe37d1914b0fd6e1224336718752f23c3dDE49",
    contractAbi,
    signer
  );

  const mintNFTHandler = async (uris) => {
    const mintResponse = await contract.safeMint(account, uris);
    setMintMessage({
      message: "Kyc Minted Succesfully",
      transactionHash: mintResponse.hash,
    });
  };
  const transferHandler = async () => {
    await contract.transferFrom(fromAddress, toAddress, tokenids);
    setStatusMessage("Transfer Done");
  };

  return (
    <div style={{ backgroundColor: "#2596be" }}>
      <>
        {!active && (
          <button onClick={() => activate(injected)}>
            Connect Your Wallets
          </button>
        )}
        <h3>Your Metamask Address: {account}</h3>
        <hr></hr>
        <AppPinata handleClick={mintNFTHandler} />
        <hr></hr>
        <p style={{ backgroundColor: "#76b5c5" }}>{mintMessage.message}</p>
        <p style={{ backgroundColor: "#76b5c5" }}>
          {mintMessage.transactionHash}
        </p>
        <Link
          to="#"
          onClick={(e) => {
            window.open(
              `https://mumbai.polygonscan.com/tx/${mintMessage.transactionHash}`,
              "_blank"
            );
            e.preventDefault();
          }}
        >
          <button>
            Click Here To Check Transaction Hash & Token ID on Ethereum
            Blockchain
          </button>
        </Link>
        <hr></hr>
        <hr></hr>
        <input
          type={"text"}
          placeholder="fromAddress"
          value={fromAddress}
          onChange={(e) => setFromAddresss(e.target.value)}
        />
        <input
          type={"text"}
          placeholder="toAddress"
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value)}
        />
        <input
          type={"text"}
          placeholder="Token Id"
          value={tokenids}
          onChange={(e) => setTokenids(e.target.value)}
        />
        <button onClick={transferHandler}>Transfer Token</button>
        <p style={{ backgroundColor: "#76b5c5" }}> {statusMessage}</p>
        <hr></hr>
      </>
    </div>
  );
}

export default MintNft;
