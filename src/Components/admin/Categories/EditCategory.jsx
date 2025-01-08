import React, { useEffect, useState } from "react";
import SideBar from "../adminLayout/SideBar";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { Link, useParams, useNavigate } from "react-router-dom";

function EditCategory() {
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const { id } = useParams();
    const navigate = useNavigate(); // Correct way to use navigation
    const [category, setCategory] = useState({});

    const fetchCategory = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/categories/${id}`, {
                method: "GET", // Use GET for fetching category details
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`, // Replace with your JWT token
                },
            });
            const data = await response.json();
            setCategory(data);

            setName(data.name);
            setSlug(data.slug);
            setDescription(data.description);
        } catch (error) {
            console.error("Error fetching category:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/categories/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
                },
                body: JSON.stringify({
                    name,
                    slug,
                    description,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                // Success toast notification
                toast.success(`Category "${data.name}" updated successfully!`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

                // Redirect to categories page after success
                setTimeout(() => {
                    navigate("/admin/categories");
                }, 2000); // Add a slight delay for user experience
            } else {
                // Handle error response
                toast.error("Failed to update category. Please try again.", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                console.error("Error updating category:", data);
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("An unexpected error occurred.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, [id]);

    useEffect(() => {
        // Enable button only if name and slug are not empty
        if (name && slug) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [name, slug]);

    return (
        <SideBar>
            <section>
                <h2 className="text-xl text-gray-600 font-semibold">Edit Category {id}</h2>
                <Link to="/admin/categories" className="flex items-center gap-2 text-sm font-semibold">
                    <FaArrowLeftLong /> Back
                </Link>
                <form onSubmit={handleUpdate} className="w-[300px] flex flex-col mt-4 items-start bg-white shadow-lg p-4 rounded-lg">
                    <div className="flex flex-col gap-2 mt-2 w-full">
                        <label className="text-sm">
                            <span>Category Name:</span> <sup className="text-red-500">*</sup>
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="border w-full border-gray-300 bg-gray-50 outline-slate-400 py-1 px-3 rounded-lg"
                            placeholder="Enter Category Name"
                            autoFocus
                        />
                    </div>
                    <div className="flex w-full flex-col gap-2 mt-3">
                        <label className="text-sm">
                            Slug: <sup className="text-red-500">*</sup>{" "}
                        </label>
                        <input
                            type="text"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            className="border w-full border-gray-300 bg-gray-50 outline-slate-400 py-1 px-3 rounded-lg"
                            placeholder="Enter Category Slug"
                            autoFocus
                        />
                    </div>
                    <div className="flex w-full flex-col gap-2 mt-3">
                        <label className="text-sm">Description: (Optional)</label>
                        <textarea
                            rows={4}
                            minLength={5}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="border w-full border-gray-300 bg-gray-50 outline-slate-400 py-1 px-3 rounded-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={disabled}
                        className={`w-full bg-gray-700 text-white mt-3 rounded-md py-2 ${disabled ? "cursor-not-allowed opacity-45" : "cursor-auto"}`}
                    >
                        {loading ? "Updating..." : "Update"}
                    </button>
                </form>
                <ToastContainer />
            </section>
        </SideBar>
    );
}

export default EditCategory;
