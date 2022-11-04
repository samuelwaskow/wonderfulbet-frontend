import React, { useState } from 'react'
import Bets from './Bets';
import Sports from './Sports';

const Home = () => {

  const [sport, setSport] = useState('Basketball');

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
          <Bets selectedSport={sport} />
        </div>
      </div>
    </div>
  )
}

export default Home