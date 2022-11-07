import React from 'react'
import { TbCoin } from 'react-icons/tb';

const Wallet = ({ data }) => {

    return (
        <div className='d-flex flex-row-reverse mb-3'>
            <div>
                <h5>Wallet</h5>
                <div>{data && data.coins} <TbCoin /></div>
            </div>
        </div>
    )
}

export default Wallet