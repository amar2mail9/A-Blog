import React, { useEffect, useState } from 'react';
import SideBar from '../adminLayout/SideBar';
import { FiGlobe, FiPlusCircle, FiEdit, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaComment } from 'react-icons/fa';
import { Spinner } from 'react-bootstrap';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [totalPosts, setTotalPosts] = useState(0);

    // Fetch posts from the API with pagination
    const fetchPosts = async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/posts?status=any&page=${currentPage}&per_page=${postsPerPage}`,
                {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
                    },
                }
            );

            if (!res.ok) {
                throw new Error('Failed to fetch posts');
            }

            const data = await res.json();
            setTotalPosts(parseInt(res.headers.get('X-WP-Total'))); // Set total posts count from response header

            if (data.length > 0) {
                setPosts(data);
            } else {
                setError('No Posts Found');
            }
        } catch (err) {
            setError('Error fetching posts.');
            console.error('Error fetching posts:', err);
        } finally {
            setLoading(false);
        }
    };

    // Fetch posts on component mount and when page or posts per page changes
    useEffect(() => {
        fetchPosts();
    }, [currentPage, postsPerPage]);

    // Filter posts based on the search query
    useEffect(() => {
        setFilteredPosts(
            posts.filter((post) =>
                post.title?.rendered?.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [posts, searchQuery]);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <SideBar>
            <section className="p-4">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Posts</h2>
                    <div>
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            type="text"
                            className="border text-gray-700 text-sm w-80 rounded-lg h-10 py-1 px-2 outline-none font-mono"
                            placeholder="Search..."
                        />
                    </div>
                    <div>
                        <Link to={`/admin/posts/new`}>
                            <button className="bg-blue-500 text-white px-3 py-1 rounded-md flex items-center gap-2">
                                <FiPlusCircle /> New Post
                            </button>
                        </Link>
                    </div>
                </div>
                <hr className="my-2" />

                {/* Posts Section */}
                <div className="h-[70vh] overflow-y-auto p-2 bg-transparent">
                    {loading ? (
                        <div className="w-full h-[70vh] flex justify-center items-center">
                            <Spinner className='w-16 h-16 text-orange-600'/>
                        </div>
                    ) : error ? (
                        <div className="text-red-500 text-center">{error}</div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4">
                            {filteredPosts.length > 0 ? (
                                filteredPosts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="bg-white items-center shadow-lg rounded-lg p-3 flex gap-5"
                                    >
                                        {/* Post Thumbnail */}
                                        <img
                                            src={
                                                post?.rttpg_featured_image_url?.thumbnail?.[0] ||
                                                'https://via.placeholder.com/120'
                                            }
                                            alt={post.title?.rendered || 'Untitled'}
                                            className="w-20 rounded-full h-20 object-cover"
                                        />
                                        {/* Post Details */}
                                        <div className="w-full">
                                            <h3 className="text-[1rem] font-semibold">
                                                {post.title?.rendered?.length > 60
                                                    ? `${post.title?.rendered.slice(0, 60)}...`
                                                    : post.title?.rendered || 'Untitled Post'}
                                            </h3>
                                            {/* Post Excerpt */}
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: post.excerpt?.rendered
                                                        ? post.excerpt?.rendered.length > 180
                                                            ? `${post.excerpt?.rendered.slice(0, 180)}[...]`
                                                            : post.excerpt?.rendered
                                                        : 'No excerpt available',
                                                }}
                                            />

                                            <div className="flex items-center w-full justify-between">
                                                {/* Post Comments */}
                                                <div>
                                                    <span className="gap-1 flex items-center text-sm text-gray-500">
                                                        {post?.rttpg_comment || 0}
                                                        <FaComment className="inline-block text-gray-600" />
                                                    </span>
                                                </div>
                                                {/* Post Status */}
                                                <div className="flex items-center gap-2">
                                                    <span
                                                        className={`text-sm font-semibold ${post.status === 'publish' ? 'text-green-500' : 'text-red-500'}`}
                                                    >
                                                        {post.status === 'publish' ? (
                                                            <FiGlobe className="inline-block" />
                                                        ) : (
                                                            <FiLock className="inline-block" />
                                                        )}
                                                    </span>
                                                    {/* Edit Post Button */}
                                                    <Link
                                                        to={`/admin/posts/edit/${post.id}`}
                                                        className="text-blue-500 hover:underline text-sm block"
                                                    >
                                                        <FiEdit className="inline-block mr-1" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center text-rose-600">No Post Available</div>
                            )}
                        </div>
                    )}

                    {/* Pagination Section */}
                    <div className="flex justify-between items-center mt-4">
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>
                            Page {currentPage} of {Math.ceil(totalPosts / postsPerPage)}
                        </span>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={() => handlePageChange(currentPage < Math.ceil(totalPosts / postsPerPage) ? currentPage + 1 : currentPage)}
                            disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>
        </SideBar>
    );
}
