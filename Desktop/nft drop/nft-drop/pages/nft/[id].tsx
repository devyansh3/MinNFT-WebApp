import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";


function NFTDropPage() {
// auth 

  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect(); 

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* left screen */}
      <div className="to bg-orange-500 bg-gradient-to-tr from-yellow-400 lg:col-span-4 ">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="to rounded-xl bg-red-600 bg-gradient-to-br from-purple-600 p-2">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png?w=631"
              alt="nft image"
            />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="font-mono text-4xl font-bold text-white">
              SEHGAL CARDS🚀
            </h1>
            <h2 className="font-mono text-2xl text-black-300">
              A collections of NFT cards
            </h2>
          </div>
        </div>
      </div>
      {/* right screen */}
      <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
        {/* header */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer font-mono text-xl font-extralight sm:w-80">
            {' '}
            <span className="font-extrabold underline decoration-yellow-400/50">
              {' '}
              SEHGAL'S
            </span>{' '}
            NFT MARKETPLACE
          </h1>
          <button onClick={() => address ? disconnect() : connectWithMetamask()} className="rounded-full bg-orange-400 px-4 py-2 text-xs text-white lg:px-5 lg:py-3 lg:text-base">
            {address ? "Sign Out" : "Sign In"}
          </button>
        </header>

        <hr className='my-2 border'></hr>
        {address ? 
        (<p className='text-center text-sm text-rose-400'>you're logged In with wallet {address.substring(0,5)}...{address.substring(address.length-5)}</p>) : <p className='text-center text-sm text-rose-400'>Sign In to view your wallet details</p>}
        {/* content */}
        <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center'>
            <img className='w-80 object-cover pb-10 lg:h-40 ' src='https://links.papareact.com/bdy'/>
            <h1 className='text-2xl font-mono font-light lg:font-bold lg:text-5xl'>Devyansh's coding club | NFT Drop</h1>
            <p className='pt-3 text-red-300 text-xl'>14//21 NFT'S claimed</p>
        </div>
        {/* mint button */}
        <button className='h-16 rounded-full w-full bg-red-700  text-base text-white mt-10 font-bold'>
            Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  )
} 

export default NFTDropPage
