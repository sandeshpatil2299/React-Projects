import { useState } from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import { addCodeDroptoDB } from '../Helper/appwrite';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { BsSave2Fill } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';

const Create = () => {
    const [code, setCode] = useState("")
    const [title, setTitle] = useState("")
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [setReloading] = useOutletContext();
    const [isPublic, setIsPublic] = useState(false);

    const createCodeDrop = async (e) => {
        e.preventDefault();
        setLoading(true)
        const res = await addCodeDroptoDB({
            title: title,
            codeDrop: code,
            isPublic: isPublic,
        });

        if (!res) {
            alert("Unable to Create. Please login first...");
            setLoading(false);
            return;
        }
        setLoading(false);
        setReloading(true);
        navigate("/create");
    }

    setReloading(false);

    return (
        <form onSubmit={createCodeDrop} className='min-h-screen w-full p-2'>
            <h1 className='text-3xl text-emerald-300 text-center py-3 border-b border-green-200 font-bold'>Create CodeDrop</h1>
            <div className='flex flex-wrap gap-3 mt-3 mb-4 justify-center items-center'>
                <div className="flex-wrap flex-grow w-[45%]">
                    <label htmlFor="title" className="label">
                        <span className="label-text text-base md:text-xl">Title<span className='text-red-600'> *</span></span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter title here"
                        className="input input-bordered text-base w-full  md:text-xl md:w-2/3"
                        id='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required />
                </div>
            </div>
            <MarkdownEditor
                value={code}
                onChange={setCode}
                className='text-xl h-[74%] md:h-[69%]'
            />
            <div className='flex gap-3 items-center mt-3'>
                <input 
                    type="checkbox" 
                    className="toggle toggle-success"
                    value={isPublic}
                    onChange={(e) => setIsPublic(e.target.checked)}
                    />
                <h1 className='text-lg'>Make CodeDrop Public?</h1>
            </div>
            <div className='grid grid-cols-3 gap-3 py-2 max-w-lg mx-auto'>
                <button type='submit' disabled={!code} className={`btn btn-primary md:text-lg ${loading ? "loading mx-auto" : ""}`}>
                    <BsSave2Fill size={20} />
                    Save
                </button>
                <button
                    onClick={() => navigate("/")}
                    className='btn btn-secondary md:text-lg'>
                    <ImCancelCircle size={20} />
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default Create
