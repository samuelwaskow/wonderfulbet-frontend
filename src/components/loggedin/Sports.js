import React from 'react'
import Sport from './Sport'
import useFetch from './useFetch'

const Sports = ({ selectedSport, selectSport }) => {

    const [sports] = useFetch(`${process.env.REACT_APP_API_URL}sports`)

    return (
        <>
            <h3>Sports</h3>
            {
                sports && sports.map((s) => (
                    <Sport key={s.id} name={s.name} icon={s.icon} selected={selectedSport} selectSport={selectSport} />
                ))
            }
        </>
    )
}

export default Sports