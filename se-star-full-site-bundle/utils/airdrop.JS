import { ethers } from 'ethers';
import AirdropABI from '../abis/Airdrop.json';

const AIRDROP_CONTRACT = "0xYourAirdropContractAddress";

export async function sendAirdrop(walletAddress, tokenAmount) {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const airdrop = new ethers.Contract(AIRDROP_CONTRACT, AirdropABI, signer);

  const tx = await airdrop.airdropTokens(walletAddress, ethers.parseUnits(tokenAmount, 18));
  return tx.hash;
}
