import React from 'react'
import { TbCoin } from 'react-icons/tb';

const Wallet = ({ coins }) => {

    return (
        <div className='d-flex flex-row-reverse mb-3'>
            <div>
                <h5>Wallet</h5>
                <div>{coins} <TbCoin /></div>
            </div>
        </div>
    )
}

export default Wallet