import React from 'react'
import { FaTimes, FaUserFriends } from 'react-icons/fa'


const Bet = ({ bet }) => {

    const dt = new Date(bet.datetime)
    const total = bet.bets.reduce((acc, obj) => {
        return acc + obj
    }, 0)

    const team1 = (bet.bets[0] / total) * 100
    const draw = (bet.bets[1] / total) * 100
    const team2 = (bet.bets[2] / total) * 100

    return (
        <div className="list-group-item list-group-item-action" aria-current="true">
            <div className='row'>
                <div className='col-9'>
                    <div className="row mb-2">
                        <div className='col text-center'>
                            <h6>{bet.team1}</h6>
                        </div>
                        <div className='col text-center'>
                            <FaTimes />
                        </div>
                        <div className='col text-center'>
                            <h6>{bet.team2}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary">{team1.toFixed(2)} %</button>
                            <button type="button" className="btn btn-outline-primary">{draw.toFixed(2)} %</button>
                            <button type="button" className="btn btn-outline-primary">{team2.toFixed(2)} %</button>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='row'>
                        <div className='col'>
                            <small className='float-end'>{dt.toLocaleDateString()}</small>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col'>
                            <small className='float-end'>{total} <FaUserFriends /></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bet