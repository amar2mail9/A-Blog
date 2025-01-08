import React, { useEffect, useState } from "react";
import SideBar from "../adminLayout/SideBar";
import { Link } from "react-router-dom";
import { FiPlusCircle, FiTrash } from "react-icons/fi";
import { Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCategories = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/categories`, {
                method: "GET",
            });
            const data = await res.json();
            setCategories(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        // SweetAlert confirmation dialog
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${import.meta.env.VITE_API_URL}/categories/${id}`, {
                        method: "DELETE",
                        headers: {
                            Authorization: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`, // Replace with your JWT token
                        },
                    });

                    if (res.ok) {
                        // Remove deleted category from state
                        setCategories(categories.filter((category) => category.id !== id));

                        Swal.fire(
                            "Deleted!",
                            "The category has been deleted.",
                            "success"
                        );
                    } else {
                        Swal.fire(
                            "Error!",
                            "Failed to delete the category.",
                            "error"
                        );
                    }
                } catch (error) {
                    console.error("Error deleting category:", error);
                    Swal.fire(
                        "Error!",
                        "An error occurred. Please try again.",
                        "error"
                    );
                }
            }
        });
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <SideBar>
            <section className="w-full">
                <div className="flex justify-between items-center w-full">
                    <h2>Categories</h2>
                    <Link to={'/admin/category/new'} className="flex gap-2 items-center bg-sky-500 text-white px-4 py-2 rounded-lg ">
                        <FiPlusCircle className="text-xl" /> <span className="text-sm">Add New</span>
                    </Link>
                </div>

                <br />
                <div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : categories.length === 0 ? (
                        <p>No Category Found</p>
                    ) : (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Slug</th>
                                    <th>Description</th>
                                    <th>Count Data</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.slug}</td>
                                            <td>{item.description}</td>
                                            <td>{item.count}</td>
                                            <td className="flex items-center gap-2 justify-center">
                                                <button
                                                    className="text-lg p-2 text-rose-100 bg-rose-500 rounded-lg"
                                                    onClick={() => handleDelete(item.id)}
                                                >
                                                    <FiTrash />
                                                </button>
                                                <Link
                                                    to={`/admin/category/edit/${item.id}`}
                                                    className="text-xl p-2 text-green-100 bg-green-500 rounded-lg"
                                                >
                                                    <FaRegEdit />
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    )}
                </div>
                <ToastContainer />
            </section>
        </SideBar>
    );
}
