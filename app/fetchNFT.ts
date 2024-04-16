import Moralis from 'moralis';

export const fetchNFTs = async (address: string | undefined) => {
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  // アドレスがない場合をいい感じで処理
  if (!address) {
    return [];
  }

  const nftList = await Moralis.EvmApi.nft.getWalletNFTs({
    address: address,
    tokenAddresses: ['0x...'], // NFTコントラクトアドレス
  });

  return nftList.raw.result;
};