import React, { useEffect, useState } from 'react'
import SideBar from '../adminLayout/SideBar'
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { FaArrowLeftLong, } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function NewCategory() {
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");


    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);



    useEffect(() => {

        if (
            name.trim().length >= 2 &&
            slug.trim().length >= 2
        ) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [name, slug]);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        const categoryData = {
            name,
            slug,
            description,
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/categories`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`, // Replace with your JWT token
                },
                body: JSON.stringify(categoryData),
            });

            if (response.ok) {
                const data = await response.json();
                setLoading(false);

                toast.success(`New Category Added Successfully ${data.name}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

                setName('')
                setDescription('')
                setSlug('')
            } else {
                const errorData = await response.json();

                toast.error(`Error: ${errorData.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setLoading(false);
            }


        } catch (error) {

            toast.error(`Failed creating category.`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            console.error("Error:", error);
        }
    };



    return (
        <SideBar>

            <section>
                <h2 className='text-xl text-gray-600 font-semibold'>Add New Category</h2>
                <Link to={'/admin/categories'} className='flex items-center gap-2  text-sm font-semibold'><FaArrowLeftLong /> Back</Link>
                <form onSubmit={handleSubmit} className='w-[300px] flex flex-col   mt-4 items-start bg-white shadow-lg p-4 rounded-lg'>

                    <div className='flex flex-col gap-2 mt-2 w-full'>
                        <label className='text-sm'><span>Category Name:</span> <sup className='text-red-500'>*</sup></label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className='border w-full border-gray-300 bg-gray-50 outline-slate-400 py-1 px-3 rounded-lg'
                            placeholder='Enter Category Name'
                            autoFocus
                        />
                    </div>
                    <div className='flex w-full flex-col gap-2 mt-3' >
                        <label className='text-sm'>Slug: <sup className='text-red-500'>*</sup> </label>
                        <input
                            type="text"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            className='border w-full border-gray-300 bg-gray-50 outline-slate-400 py-1 px-3 rounded-lg'
                            placeholder='Enter Category Slug'
                            autoFocus
                        />
                    </div>
                    <div className='flex w-full flex-col gap-2 mt-3'>
                        <label className='text-sm'>Description: (Optional)</label>
                        <textarea
                            rows={4}
                            minLength={5}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className='border w-full border-gray-300 bg-gray-50 outline-slate-400 py-1 px-3 rounded-lg'
                        />
                    </div>
                    <button type="submit " disabled={disabled} className={`w-full bg-gray-700 text-white mt-3 rounded-md  py-2 ${disabled ? "cursor-not-allowed opacity-45" : "cursor-auto optional:100"}`}>
                        {loading ? "Adding..." : "Add"}
                    </button>


                </form>
                <ToastContainer />
            </section>
        </SideBar>
    )
}

export default NewCategory