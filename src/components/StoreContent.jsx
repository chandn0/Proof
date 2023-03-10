import { Web3Storage } from "web3.storage";
import { WEB3STORAGE_TOKEN } from "../../constants";

function GetAccessToken() {
  return WEB3STORAGE_TOKEN;
}

function MakeStorageClient() {
  return new Web3Storage({ token: GetAccessToken() });
}

export const StoreContent = async (files) => {
  console.log("Uploading  IPFS ");
  const client = MakeStorageClient();
  const cid = await client.put([files]);
  console.log("stored files with cid:", cid);
  console.log("Uploaded to IPFS ");
  return cid;
};
