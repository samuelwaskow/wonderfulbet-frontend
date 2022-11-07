import React, { useEffect } from 'react'
import { useState } from 'react'
import Bet from './Bet'

const Bets = ({ selectedSport }) => {

    const [bets, setBets] = useState([])

    const sport = selectedSport.toLowerCase()

    useEffect(() => {

        fetch(`${process.env.REACT_APP_API_URL}${sport}`)
        .then((res) => res.json())
        .then((data) => setBets(data))
        
    }, [sport])

    return (
        <>
            <h3>Bets</h3>
            
            <div className="list-group list-group-flush">
                {
                    bets.map((b) => (
                        <Bet key={b.id} sport={sport} bet={b} />
                    ))
                }
            </div>
        </>
    )
}

export default Bets