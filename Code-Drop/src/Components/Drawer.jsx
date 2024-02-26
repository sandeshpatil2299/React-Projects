import { useEffect, useState } from 'react'
import { ImMenu } from 'react-icons/im'
import { HiPlus } from 'react-icons/hi'
import { BiLogOutCircle } from 'react-icons/bi'
import { account, databases, getCurrentUser } from '../Helper/appwrite'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Query } from 'appwrite'

function Drawer() {
    const nevigate = useNavigate();
    const [doc, setDoc] = useState([]);
    const [reloading, setReloading] = useState(false);

    const logout = () => {
        const promise = account.deleteSession("current");
        promise
            .then(() => {
                nevigate("/login")
            })
            .catch((err) => {
                alert(err);
            })
    }

    //retriving documents
    useEffect(() => {
        //getCurrenUser can be used with asyc funtion only
        const fetchUser = async () => {
            const user = await getCurrentUser();
            const promise = databases.listDocuments('64f9cee07b8e348e3349', '64f9ceee62cb0ae0d34f', [Query.equal("owner", user.$id)]);
            promise
                .then((res) => setDoc(res.documents))
                .catch((err) => alert(err));
        }
        fetchUser();
    }, [nevigate, reloading])

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet context={[setReloading]}></Outlet>
                <label htmlFor="my-drawer-2" className="absolute top-0 -left-1 btn btn-ghost lg:hidden"><ImMenu size={32} /></label>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu gap-4 p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <Link to={"/create"} className='btn btn-accent text-xl font-bold'>
                        <HiPlus size={23} />
                        <span>Create</span>
                    </Link>
                    <hr></hr>
                    <div className='overflow-y-scroll h-[765px] flex flex-col gap-2'>
                        {
                            doc.map((element) => {
                                return (
                                    <Link to={"/" + element.$id} key={element.$id} className='bg-base-100 px-2 py-3 rounded-md text-base text-primary-content hover:bg-white/10'><a>{element.title}</a></Link>
                                )
                            })
                        }
                    </div>
                    <button className="btn btn-neutral text-xl text-white font-bold mt-auto" onClick={logout}>
                        <BiLogOutCircle size={25} />
                        <span>Logout</span>
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Drawer
