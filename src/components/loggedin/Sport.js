import React from 'react'


const Sport = ({ name, icon, selected, selectSport }) => {

    const active = selected === name ? 'text-white bg-primary' : 'text-dark bg-light'

    return (
        <div className={`card p-2 mb-2 ${active}`} style={{ cursor: 'pointer' }} onClick={() => selectSport(name)}>
            <div className="card-header">
                {name}
            </div>
            <div className="card-body">
                <img src={icon} width="50" height="50" alt="Sport Icon"/>
            </div>
        </div>
    )
}

export default Sport