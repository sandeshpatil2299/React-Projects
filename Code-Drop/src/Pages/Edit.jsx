import { useEffect, useState } from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { BsSave2Fill } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';
import { databases, getCurrentUser } from '../Helper/appwrite';

const Edit = () => {
    const { id } = useParams()
    const [code, setCode] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [changed, setChanged] = useState(false);
    const [initialCD, setInitialCD] = useState({});
    const [setReloading]= useOutletContext();
    const [isPublic, setIsPublic] = useState(false);

    const editCodeDrop = async (e) => {
        e.preventDefault();
        setLoading(true)

        const promise = databases.updateDocument('64f9cee07b8e348e3349', '64f9ceee62cb0ae0d34f', id, { title: title, codeDrop: code, isPublic: isPublic })

        promise
            .then(() => {
                setReloading(true);
                navigate("/" + id);
            })
            .catch((res) => alert(res))
            .finally(() => setLoading(false));
    }

    setReloading(false);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getCurrentUser();
            const promise = databases.getDocument('64f9cee07b8e348e3349', '64f9ceee62cb0ae0d34f', id);
            promise
                .then((res) => {
                    if (res.owner !== user.$id) {
                        alert("Can't be edited. Because it does not belong to you...");
                        navigate("/");
                    }
                    setCode(res.codeDrop);
                    setTitle(res.title);
                    setInitialCD(res);
                    setIsPublic(res.isPublic);
                })
                .catch((err) => alert(err));
        }
        fetchUser();
    }, [id, navigate])

    useEffect(() => {
        if (title !== initialCD.title || code !== initialCD.codeDrop || isPublic !== initialCD.isPublic)
        {
            setChanged(true);
        }
        else setChanged(false);
    }, [title, code, isPublic, initialCD.title, initialCD.codeDrop, initialCD.isPublic])

    return (
        <form onSubmit={editCodeDrop} className='min-h-screen w-full p-2'>
            <h1 className='text-3xl text-emerald-300 text-center py-3 border-b border-green-200 font-bold'>Edit CodeDrop</h1>
            <div className='flex flex-wrap gap-3 justify-center mt-3 mb-4 items-center'>
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
                    checked={isPublic}
                    type="checkbox" 
                    className="toggle toggle-success"
                    value={isPublic}
                    onChange={(e) => setIsPublic(e.target.checked)}
                    />
                <h1 className='text-lg'>Make CodeDrop Public?</h1>
            </div>
            <div className='grid grid-cols-2 gap-3 py-2 max-w-xs mx-auto'>
                <button type='submit' disabled={!changed} className={`btn btn-accent md:text-lg ${loading ? "loading mx-auto" : ""}`}>
                    <BsSave2Fill size={20} />
                    Update
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

export default Edit
