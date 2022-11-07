import React, { useState } from 'react'
import Bets from './Bets';
import Sports from './Sports';
import useFetch from './useFetch';
import Wallet from './Wallet';

const Home = () => {

  const [sport, setSport] = useState('Basketball');

  const [wallet] = useFetch(`${process.env.REACT_APP_API_URL}wallet`)

  const handleSportChange = (s) => {
    setSport(s)
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-3'>
          <Sports selectedSport={sport} selectSport={handleSportChange} />
        </div>
        <div className='col-9'>
          <Wallet data={wallet.data}/>
          <Bets selectedSport={sport} wallet={wallet.data} />
        </div>
      </div>
    </div>
  )
}

export default Home