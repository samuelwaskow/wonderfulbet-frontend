import React, { useEffect, useState } from 'react'
import Sport from './Sport'


const Sports = ({ selectedSport, selectSport }) => {

    const [sports, setSports] = useState([])

    useEffect(() => {

        fetch(`${process.env.REACT_APP_API_URL}sports`)
        .then((res) => res.json())
        .then((data) => setSports(data))

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