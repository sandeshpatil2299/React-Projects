import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { account } from '../Helper/appwrite';

const Auth = ({ title, discription, button, instruction, instructionLink, instructionName, name, setName, email, setEmail, password, setPassword }) => {

    const nevigate= useNavigate();
    useEffect(() => {
        const user= account.get();

        user.then(() => {
            nevigate("/");
        })
    }, [nevigate])

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center">{title}</h1>
                    <p className="py-6 text-center">{discription}</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <div className="card-body">
                        {
                            setName && <div className="form-control">
                                        <label className="label">
                                            <span   span className="label-text text-base">Name</span>
                                        </label>
                                        <input type="email" placeholder="Enter your name" className="input input-bordered text-base" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your Email" className="input input-bordered text-base" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Password (Min Char 8)</span>
                            </label>
                            <input type="Password" placeholder="Create password" className="input input-bordered text-base" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        {button}

                        <h1 className='text-center mt-3'>{instruction}<Link to={instructionLink} href='#' className='text-blue-400'>{instructionName}</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
