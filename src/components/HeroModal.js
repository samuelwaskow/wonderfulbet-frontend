import React, { useState } from 'react'

const HeroModal = ({ closeModal, storeUser }) => {

    const [state, setState] = useState('')


    const saveUsername = (e) => {
        e.preventDefault()

        if (!state) {
            alert('Please enter your name')
            return
        }

        storeUser(state)
        setState('')
    }

    return (
        <div className="modal modal-signin position-static d-block bg-secondary py-5" tabIndex="-1" role="dialog" id="modalSignin">
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h1 className="fw-bold mb-0 fs-2">Sign up for free</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form onSubmit={saveUsername}>
                            <div className="form-floating mb-3">
                                <input type="name" className="form-control rounded-3" id="floatingInput" value={state} onChange={(e) => setState(e.target.value)} />
                                <label htmlFor="floatingInput">Your Name</label>
                            </div>
                            <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
                            <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroModal