import React, { useState } from 'react';
import { ethers } from 'ethers';
import PresaleABI from '../abis/Presale.json';

const PRESALE_ADDRESS = "0xYourPresaleContract";

const PresaleForm = () => {
  const [ethAmount, setEthAmount] = useState("");
  const [status, setStatus] = useState("");

  const handleBuy = async () => {
    try {
      if (!window.ethereum) return alert("MetaMask required");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(PRESALE_ADDRESS, PresaleABI, signer);

      const tx = await signer.sendTransaction({
        to: PRESALE_ADDRESS,
        value: ethers.parseEther(ethAmount),
      });

      setStatus("Transaction Sent: " + tx.hash);
    } catch (e) {
      console.error(e);
      setStatus("Transaction Failed");
    }
  };

  return (
    <div>
      <h3>Buy SST Tokens</h3>
      <input
        type="number"
        placeholder="ETH Amount"
        onChange={(e) => setEthAmount(e.target.value)}
      />
      <button onClick={handleBuy}>Buy Tokens</button>
      <p>{status}</p>
    </div>
  );
};

export default PresaleForm;