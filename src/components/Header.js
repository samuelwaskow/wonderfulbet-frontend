import React from 'react'

const Header = ({ username, logout }) => {


    return (
        <header className="pb-3 mb-4 border-bottom d-flex justify-content-between">
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                <img className="navbar-brand d-flex" style={{ height: 55, width: 55 }} src="logo.svg" alt="Logo" />
                <span className="fs-4">Wonderful Bet</span>
            </a>
            <div>
                {username &&
                    username.length > 0 &&
                    <>
                        <span>{`Hello ${username}!`}</span>
                        <button type="button" className="btn btn-outline-primary btn-sm px-4 me-md-2 ms-3" onClick={logout}>Logout</button>
                    </>
                }
            </div>
        </header>
    )
}

export default Header