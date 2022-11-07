import React, { useEffect, useState } from 'react'
import Bets from './Bets';
import Sports from './Sports';
import useFetch from './useFetch';
import Wallet from './Wallet';

const Home = () => {

  const [sport, setSport] = useState('Basketball');
  const [wallet, setWallet] = useState(0);

  const [walletApi] = useFetch(`${process.env.REACT_APP_API_URL}wallet`)

  const handleSportChange = (s) => {
    setSport(s)
  }

  useEffect(() => {
    if (walletApi.data != null) {
      setWallet(walletApi.data.coins)
    }
  }, [walletApi.data])

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-3'>
          <Sports selectedSport={sport} selectSport={handleSportChange} />
        </div>
        <div className='col-9'>
          <Wallet coins={wallet} />
          <Bets selectedSport={sport} coins={wallet} setWallet={setWallet} />
        </div>
      </div>
    </div>
  )
}

export default Home