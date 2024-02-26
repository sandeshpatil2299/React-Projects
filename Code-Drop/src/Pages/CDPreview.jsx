import { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { databases } from '../Helper/appwrite';
import MarkdownEditor from '@uiw/react-markdown-editor';
import { MdEditSquare } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import { BsShareFill } from 'react-icons/bs';

const CDPreview = () => {
    const { id } = useParams();
    const [code, setCode] = useState({});
    const navigate = useNavigate();
    const [setReloading] = useOutletContext();

    //deleting codedrop from database
    const deleteCodeDrop = () => {
        const promise = databases.deleteDocument('64f9cee07b8e348e3349', '64f9ceee62cb0ae0d34f', id);
        promise
            .then(() => {
                //updating drawer
                setReloading(true);
                alert("Deleted Succesfully...");
                navigate("/");
            })
            .catch((err) => alert(err));
    }

    setReloading(false);

    //getting data from database
    useEffect(() => {
        const promise = databases.getDocument('64f9cee07b8e348e3349', '64f9ceee62cb0ae0d34f', id);
        promise
            .then((res) => {
                setCode(res);
            })
            .catch(() => {
                alert("Unable to find document");
                navigate("/");
            });
    }, [id, navigate])

    return (
        <div className='min-h-screen w-full p-2'>
            <h1 className='flex justify-between text-4xl text-emerald-300 text-center px-2 pt-10 py-3 border-b border-green-200 font-bold'>
                {code.title}
                <button
                    className='btn btn-circle btn-neutral'
                    onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link Copied...");
                    }}>
                    <BsShareFill size={18} />
                </button>
            </h1>
            <MarkdownEditor.Markdown
                source={code.codeDrop}
                className='text-xl rounded-lg py-2 px-4 mt-3 h-[82%] md:h-[82%]'
                style={{ fontSize: 22 }}
            />
            <div className='grid grid-cols-2 gap-3 pt-2 max-w-xs mx-auto'>
                <Link to={"/edit/" + id} className="btn btn-info text-white md:text-lg">
                    <MdEditSquare size={20} />
                    Edit
                </Link>
                <button onClick={deleteCodeDrop} className='btn btn-error text-white md:text-lg'>
                    <AiFillDelete size={20} />
                    Delete
                </button>
            </div>
        </div>
    )
}

export default CDPreview
