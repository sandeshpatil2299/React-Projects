import { useEffect } from 'react';
import {RiCodeBoxFill} from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom';
import { account } from '../Helper/appwrite';

const Landing = () => {
    const nevigate= useNavigate();
    useEffect(() => {
        const user= account.get();

        user.then(() => {
            nevigate("/");
        })
    }, [nevigate])

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1637166185518-058f5896a2e9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZ1dHVyaXN0aWN8ZW58MHx8MHx8fDA%3D'}}>
            {/* <div className="hero-overlay bg-opacity-30"></div> */}
            <div className="hero-content text-center text-neutral-content bg-white/40 makeBlur p-10 mx-3 border-[1px]">
                <div className="max-w-md flex flex-col gap-5">
                    <RiCodeBoxFill size={118} className='mx-auto text-black bg-white rounded-md'/>
                    <h1 className="text-5xl text-white font-bold glow">CodeDrop</h1>
                    <p>An open source code sharing platform with amazing powers of React and Appwrite</p>
                    <Link to={"/login"} className="btn bg-sky-400 hover:bg-sky-500 text-black font-bold rounded-3xl">Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;