import React, { useEffect } from 'react'
import { useState } from 'react'
import Bet from './Bet'

const Bets = ({ selectedSport }) => {

    const [bets, setBets] = useState([])

    const sport = selectedSport.toLowerCase()

    useEffect(() => {

        const fetchBets = async () => {
            const res = await fetch(`http://localhost:5000/${sport}`)
            return await res.json()
        }

        const getBets = async () => {
            const betsFromServer = await fetchBets()
            setBets(betsFromServer)
        }
        getBets()
    }, [sport])

    return (
        <>
            <h3>Bets</h3>
            <div className="list-group list-group-flush">
                {
                    bets.map((b) => (
                        <Bet key={b.id} bet={b} />
                    ))
                }
            </div>
        </>
    )
}

export default Bets