import { useEffect, useState } from 'react'
import { RiCodeBoxFill } from 'react-icons/ri'
import { account } from '../Helper/appwrite'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const nevigate = useNavigate();
  const [name, setName] = useState("User");
  useEffect(() => {
    const user = account.get();
    user
      .then((response) => {
        setName(response.name);
      })
      .catch(() => {
        nevigate("/landing")
      })
  }, [nevigate])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5 text-center text-primary-content">
      <RiCodeBoxFill size={118} className='mx-auto text-black bg-white rounded-md' />
      <h1 className="text-5xl text-white font-bold glow">Hello... {name}</h1>
      <p>Start by Creating/Opening a New CodeDrop</p>
    </div>
  )
}

export default Dashboard
