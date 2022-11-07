import React from 'react'
import Bet from './Bet'
import Loading from './Loading'
import useFetch from './useFetch'

const Bets = ({ selectedSport, wallet }) => {

    const sport = selectedSport.toLowerCase()
    const [bets] = useFetch(`${process.env.REACT_APP_API_URL}${sport}`)

    return (
        <>
            <h3>Bets</h3>

            <div className="list-group list-group-flush">
                {
                    bets.loading ? <Loading /> : ''
                }
                {
                    bets.data && bets.data.map((b) => (
                        <Bet key={b.id} sport={sport} bet={b} wallet={wallet}/>
                    ))
                }
            </div>
        </>
    )
}

export default Bets