import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const instance = axios.create({
  maxContentLength: 100 * 1024 * 1024,
});

function AppPinata(props) {
  // State to store the selected file
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentStatus, setCurrentStatus] = useState({
    message: "",
    IpfsHash: "",
    PinataGateway: "",
    YourName: "",
  });
  const [name, setName] = useState("");

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("image", selectedFile);

    try {
      // Use Axios to post the file to the server
      const result = await instance.post("http://localhost:5000/upload", data);
      console.log(result.data.IpfsHash);

      let uris = "https://gateway.pinata.cloud/ipfs/" + result.data.IpfsHash;

      await props.handleClick(uris);

      // console.log(uris);
      setCurrentStatus({
        YourName: name,
        message: " Your Kyc has been Successfully Uploaded",
        PinataGateway: "https://gateway.pinata.cloud/ipfs/",
        IpfsHash: result.data.IpfsHash,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 style={{ backgroundColor: "#f8dfa8" }}>Mint NFt</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          <h4>Fill This Form</h4>
          <input
            type={"text"}
            placeholder="Type Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <hr></hr>
          <input type="file" onChange={onFileChange} />
        </div>
        <button type="submit">Upload & Submit Your NFT</button>
        <h5>{currentStatus.YourName}</h5>
        <p>{currentStatus.message}</p>
        <Link
          to="#"
          onClick={(e) => {
            window.open(
              `https://gateway.pinata.cloud/ipfs/${currentStatus.IpfsHash}`,
              "_blank"
            );
            e.preventDefault();
          }}
        >
          <button>Click Here To Check Your Documents on IPFS</button>
        </Link>
      </form>
    </div>
  );
}

export default AppPinata;
