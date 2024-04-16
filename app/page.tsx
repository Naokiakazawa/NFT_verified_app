'use client'
import { useAccount } from 'wagmi';
import { useQuery } from '@tanstack/react-query';
import { fetchNFTs } from './fetchNFT';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { address, isConnected } = useAccount();
  const navigate = useNavigate();

  const { data: nfts } = useQuery({
    queryKey: ['nfts', address],
    queryFn: () => fetchNFTs(address),
    enabled: isConnected && !!address,
  });

  const hasNFT = nfts && nfts.length > 0;

  if (isConnected && hasNFT) {
    navigate('/verified');
  }

  return (
    <div>
      <p>You should have the required NFT.</p>
    </div>
  );
}
