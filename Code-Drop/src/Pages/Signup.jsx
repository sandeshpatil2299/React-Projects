import React, { useState } from 'react'
import Auth from '../Components/Auth'
import { account } from '../Helper/appwrite'
import { ID } from 'appwrite'
import { useNavigate } from 'react-router-dom'

const SignupBtn = ({ onClick }) => {
    return <button onClick={onClick} className="btn btn-accent text-xl font-bold mt-5">Signup</button>
}

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nevigate = useNavigate();

    const createAccount = async () => {
        const promise = account.create(ID.unique(), email, password, name);

        promise
            .then((response) => {
                nevigate("/login");
            })
            .catch((err) => {
                alert(arr)
            });
    }

    return (
        <Auth
            title={"Create Account"}
            discription={"Create an account and Start your journey in CodeDrop..."}
            button={<SignupBtn onClick={createAccount} />}
            instruction={"Already have an account? "}
            instructionLink={"/login"}
            instructionName={" Login"}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
        />
    )
}

export default Signup