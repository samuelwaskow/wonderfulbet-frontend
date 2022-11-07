import React from 'react'
import Bet from './Bet'
import useFetch from './useFetch'

const Bets = ({ selectedSport }) => {

    const sport = selectedSport.toLowerCase()
    const [bets] = useFetch(`${process.env.REACT_APP_API_URL}${sport}`)

    return (
        <>
            <h3>Bets</h3>

            <div className="list-group list-group-flush">
                {
                    bets && bets.map((b) => (
                        <Bet key={b.id} sport={sport} bet={b} />
                    ))
                }
            </div>
        </>
    )
}

export default Bets