import React, { useEffect, useState } from 'react';
import Layout from '../Home/Layout';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';

export default function SingleCategory() {
    const { category } = useParams(); // Matches ":category" in the route

    const [categoryData, setCategoryData] = useState(null);
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const fetchCategoryData = async () => {
        setLoading(true);
        setError(null);
        try {
            // Fetch the specific category data
            const categoryRes = await fetch(`${import.meta.env.VITE_API_URL}/categories?slug=${category}`);
            const categoryJson = await categoryRes.json();

            if (categoryJson.length > 0) {
                const categoryInfo = categoryJson[0];
                setCategoryData(categoryInfo);

                // Fetch posts for the specific category
                const postsRes = await fetch(
                    `${import.meta.env.VITE_API_URL}/posts?categories=${categoryInfo.id}`
                );
                const postsJson = await postsRes.json();
                setPosts(postsJson);
                setFilteredPosts(postsJson); // Initialize filtered posts
            } else {
                setError("Category not found.");
            }
        } catch (error) {
            setError("Error fetching category data.");
            console.error("Error fetching category or posts:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategoryData();
    }, [category]); // Re-run effect if `category` changes

    // Handle search input
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        // Filter posts based on the title
        const filtered = posts.filter((post) =>
            post.title.rendered.toLowerCase().includes(query)
        );
        setFilteredPosts(filtered);
    };

    return (
        <Layout>
            <section>
                <div className="mx-auto mt-6 w-8/12">
                    {loading ? (
                        <div className="w-full h-[70vh] flex items-center justify-center">
                            <Spinner className="w-16 h-16 text-orange-500" />
                        </div>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <div>
                            {/* Category Info */}
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h1 className="text-2xl font-semibold">{categoryData?.name}</h1>
                                    <p className="text-gray-700 mt-2">
                                        {categoryData?.description || "No description available."}
                                    </p>
                                </div>
                                {/* Search Bar */}
                                <div className="flex items-center h-[2.3rem] gap-2 mt-4 border-[0.1rem] border-orange-500 rounded-md  ">
                                    <FiSearch className="text-orange-500 border-r-[0.1rem] w-10 p-2 bg-orange-100 rounded-l-md border-orange-500 h-full " />
                                    <input
                                        type="text"
                                        placeholder="Search posts..."
                                        value={searchQuery}
                                        onChange={handleSearch}
                                        className="flex-grow outline-none py-2 px-2  text-orange-500 h-full w-[400px] text-sm bg-transparent "
                                    />
                                </div>
                            </div>

                            {/* Posts List */}
                            <div className="mt-6 grid grid-cols-3 gap-4">
                                {filteredPosts.length > 0 ? (
                                    filteredPosts.map((post) => (
                                        <div key={post.id} className="p-4 bg-orange-50 rounded shadow">
                                            <img
                                                src={post?.rttpg_featured_image_url?.thumbnail?.[0]}
                                                alt={post?.title?.rendered}
                                                className="w-full h-40 object-cover mb-2"
                                            />
                                            <h2 className="text-sm font-semibold">
                                                {post.title.rendered.length > 42
                                                    ? `${post.title.rendered.slice(0, 42)}...`
                                                    : post.title.rendered || "Untitled"}
                                            </h2>

                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        post.excerpt?.rendered.length > 180
                                                            ? `${post.excerpt?.rendered.slice(0, 180)}[...]`
                                                            : `${post.excerpt?.rendered}`,
                                                }}
                                            />
                                            <a
                                                href={`/blog-page/${post.slug}`}
                                                className="text-orange-500 mt-4 block"
                                            >
                                                Read More
                                            </a>
                                        </div>
                                    ))
                                ) : (
                                    <p>No posts match your search criteria.</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}
