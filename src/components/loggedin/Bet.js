import React, { useEffect } from 'react'
import { FaTimes, FaUserFriends } from 'react-icons/fa'
import useMyBet from './useMyBet'

const Bet = ({ sport, bet }) => {

    const [mine, setMine] = useMyBet(bet.mine)

    const dt = new Date(bet.datetime)

    const statTotal = bet.bets.reduce((acc, obj) => {
        return acc + obj
    }, 0)

    const statTeam1 = (bet.bets[0] / statTotal) * 100
    const statDraw = (bet.bets[1] / statTotal) * 100
    const statTeam2 = (bet.bets[2] / statTotal) * 100

    useEffect(() => {

        setMine(bet.mine)

    }, [setMine, bet.mine])

    const addBet = async (b) => {
        await fetch(`${process.env.REACT_APP_API_URL}${sport}/${b.id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(b)
            }
        )
    }

    const clickBet = (choice) => {

        if(mine === -1){
            bet.bets[choice]++
        }
        setMine(choice)
        bet.mine = choice
        addBet(bet)
    }

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
                            <button type="button" className={`btn btn-outline-primary ${mine === 0 ? 'active' : ''}`} onClick={() => clickBet(0)}>{statTeam1.toFixed(2)} %</button>
                            <button type="button" className={`btn btn-outline-primary ${mine === 1 ? 'active' : ''}`} onClick={() => clickBet(1)}>{statDraw.toFixed(2)} %</button>
                            <button type="button" className={`btn btn-outline-primary ${mine === 2 ? 'active' : ''}`} onClick={() => clickBet(2)}>{statTeam2.toFixed(2)} %</button>
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
                            <small className='float-end'>{statTotal} <FaUserFriends /></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bet