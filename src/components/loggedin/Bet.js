import React, { useEffect, useState } from 'react'
import { FaTimes, FaUserFriends } from 'react-icons/fa'

const Bet = ({ sport, bet }) => {

    const [team1, setTeam1] = useState(false)
    const [draw, setDraw] = useState(false)
    const [team2, setTeam2] = useState(false)

    const dt = new Date(bet.datetime)

    const statTotal = bet.bets.reduce((acc, obj) => {
        return acc + obj
    }, 0)

    const statTeam1 = (bet.bets[0] / statTotal) * 100
    const statDraw = (bet.bets[1] / statTotal) * 100
    const statTeam2 = (bet.bets[2] / statTotal) * 100

    useEffect(() => {

        setTeam1(bet.mine === 0)
        setDraw(bet.mine === 1)
        setTeam2(bet.mine === 2)

    }, [bet.mine])

    const addBet = async (b) => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}${sport}/${b.id}`,
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

        if(!team1 && !draw && !team2){
            bet.bets[choice]++
        }

        setTeam1(false)
        setDraw(false)
        setTeam2(false)

        if(choice === 0){
            setTeam1(true)
        } else if(choice === 1){
            setDraw(true)
        } else {
            setTeam2(true)
        }

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
                            <button type="button" className={`btn btn-outline-primary ${team1 ? 'active' : ''}`} onClick={() => clickBet(0)}>{statTeam1.toFixed(2)} %</button>
                            <button type="button" className={`btn btn-outline-primary ${draw ? 'active' : ''}`} onClick={() => clickBet(1)}>{statDraw.toFixed(2)} %</button>
                            <button type="button" className={`btn btn-outline-primary ${team2 ? 'active' : ''}`} onClick={() => clickBet(2)}>{statTeam2.toFixed(2)} %</button>
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