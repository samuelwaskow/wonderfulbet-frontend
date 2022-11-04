import React, { useEffect, useState } from 'react'
import Sport from './Sport'


const Sports = ({ selectedSport, selectSport }) => {

    const [sports, setSports] = useState([])

    useEffect(() => {

        const fetchSports = async () => {
            const res = await fetch('http://localhost:5000/sports')
            return await res.json()
        }

        const getSports = async () => {
            const sportsFromServer = await fetchSports()
            setSports(sportsFromServer)
        }
        getSports()
    }, [])

    return (
        <>
            <h3>Sports</h3>
            {
                sports.map((s) => (
                    <Sport key={s.id} name={s.name} icon={s.icon} selected={selectedSport} selectSport={selectSport} />
                ))
            }
        </>
    )
}

export default Sports