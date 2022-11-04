import React, { useState } from 'react'
import HeroModal from './HeroModal'

const Hero = ({ storeUser }) => {

    const [state, setState] = useState({
        showModal: false
    })

    const openModal = () => {
        setState({ showModal: true })
    }

    const closeModal = () => {
        setState({ showModal: false })
    }

    if (state.showModal) {
        return (
            <HeroModal closeModal={closeModal} storeUser={storeUser} />
        )
    } else {
        return (
            <div className="container col-xxl-8 px-4 py-5" >
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="stadium.jpg" className="d-block mx-lg-auto img-fluid" alt="Stadium" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Join us and enter a world full of emotions</h1>
                        <p className="lead">We do not just talk about fun and bet skills, we actually make it happen. The best: we create the excitement together</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={openModal}>Start Betting Now</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }


}

export default Hero