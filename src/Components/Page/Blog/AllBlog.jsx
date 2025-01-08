import React, { useEffect, useState } from 'react';
import Layout from '../Home/Layout';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

function AllBlog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState([]);
    const [latestPost, setLatestPost] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?search=${searchQuery}`);
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchLatestPost = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?per_page=3&orderby=date&order=desc`);
            const data = await res.json();
            setLatestPost(data);
        } catch (error) {
            console.error("Error fetching latest posts:", error);
        }
    };

    const fetchCategory = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/categories`);
            const data = await res.json();
            setCategory(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
        fetchCategory();
        fetchLatestPost();
    }, [searchQuery]);

    return (
        <Layout>
            <section className='lg:flex md:w-11/12 w-full mx-auto mt-6 justify-between'>
                <div className='lg:w-[70%] w-full px-3  bg-orange-100 lg:px-4 py-6 rounded-lg'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-xl font-semibold text-gray-800'>Blog Page</h1>

                        {/* seacrh */}
                        <div className='flex items-center lg:hidden  bg-orange-50 text-orange-500 mb-2 lg:w-full w-[60%] h-10 border rounded-lg'>
                            <FiSearch className='text-xl h-10 ml-2' />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className='w-full bg-transparent h-full rounded-md px-2 outline-none'
                            />
                        </div>
                        <select name="" id="">
                            <option value="">All Categories</option>
                        </select>
                    </div>

                    <div>
                        {loading ? (
                            <div className='flex justify-center w-full h-[70vh] items-center'>
                                <Spinner className='text-orange-500 text-xl' />
                            </div>
                        ) : (
                            posts.length !== 0 ? (
                                <div className='w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-5'>
                                    {posts.map((item) => (
                                        <Link to={`/blog-page/${item.slug}`} key={item.id} className='w-full'>
                                            <div className='p-3 sm:block hidden bg-orange-50 shadow-lg rounded-lg hover:scale-105  hover: duration-500'>
                                                <div className='flex justify-center w-full rounded-lg '>
                                                    <img
                                                        src={item?.rttpg_featured_image_url?.thumbnail?.[0]}
                                                        alt={item?.title?.rendered}
                                                        className='object-cover w-full h-36 object-center rounded-lg  bg-gray-200'
                                                    />
                                                </div>
                                                <h2 className='text-[0.9rem] font-semibold'>
                                                    {item?.title?.rendered.length > 30 ? `${item?.title?.rendered.slice(0, 30)}...` : item?.title?.rendered || "Untitled"}
                                                </h2>
                                                <div

                                                    dangerouslySetInnerHTML={{
                                                        __html: item?.excerpt?.rendered
                                                            ? item.excerpt?.rendered.length > 100
                                                                ? `${item.excerpt?.rendered.slice(0, 100)}[...]`
                                                                : item.excerpt?.rendered
                                                            : 'No excerpt available',
                                                    }}
                                                />
                                                <Link to={`/blog-page/${item.slug}`} className='text-orange-500 hover:text-orange-600 text-[0.8rem] duration-500'>Read More</Link>

                                            </div>

                                            <div
                                                key={item.id}
                                                className="bg-white  sm:hidden items-center shadow-lg rounded-lg p-3 flex gap-5"
                                            >
                                                {/* Post Thumbnail */}
                                                <img
                                                    src={
                                                        item?.rttpg_featured_image_url?.thumbnail?.[0] ||
                                                        'https://via.placeholder.com/120'
                                                    }
                                                    alt={item.title?.rendered || 'Untitled'}
                                                    className="w-20 rounded-full h-20 object-cover"
                                                />
                                                {/* Post Details */}
                                                <div className="w-full">
                                                    <h3 className="text-[1rem] font-semibold">
                                                        {item.title?.rendered?.length > 60
                                                            ? `${item.title?.rendered.slice(0, 60)}...`
                                                            : item.title?.rendered || 'Untitled Post'}
                                                    </h3>
                                                    {/* Post Excerpt */}
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: item.excerpt?.rendered
                                                                ? item.excerpt?.rendered.length > 180
                                                                    ? `${item.excerpt?.rendered.slice(0, 180)}[...]`
                                                                    : item.excerpt?.rendered
                                                                : 'No excerpt available',
                                                        }}
                                                    />

                                                    
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : <p>No blog posts available</p>
                        )}
                    </div>
                </div>

                <div className='lg:w-[28%] lg:block hidden  bg-orange-200 px-4 py-6 rounded-lg'>
                    <div className='flex items-center bg-orange-50 text-orange-500 mb-2 w-full h-10 border rounded-lg'>
                        <FiSearch className='text-xl h-10 ml-2' />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='w-full bg-transparent h-full rounded-md px-2 outline-none'
                        />
                    </div>

                    <div className='w-full rounded-md  text-gray-600  mx-auto '>
                        <h4 className='text-lg font-semibold px-2'>Latest Posts</h4>
                        <div className='grid grid-cols-1 gap-3'>
                            {latestPost.length > 0 ? latestPost.map((item) => (
                                <Link to={`/blog-page/${item.slug}`} key={item.id}>
                                    <div className='w-[85%] bg-white rounded-md mx-auto p-3 '>
                                        <div className='flex justify-center w-full h-28'>
                                            <img
                                                src={item?.rttpg_featured_image_url?.thumbnail?.[0]}
                                                alt={item?.title?.rendered}
                                                className='object-cover object-center bg-gray-200'
                                            />
                                        </div>
                                        <h2 className='text-xs font-normal'>
                                            {item?.title?.rendered.length > 32 ? `${item?.title?.rendered.slice(0, 32)}...` : item?.title?.rendered || "Untitled"}
                                        </h2>
                                    </div></Link>
                            )) : <p>No latest posts available</p>}
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 mt-3 '>
                        <h2 className='text-lg font-normal text-gray-600'>Categories({category.length})</h2>
                        <div className='px-4 flex flex-col gap-2'>
                            {category.map((item) => (
                                <Link to={`/category/${item.slug}`} className='text-sky-600 hover:text-gray-800 text-[0.8rem] duration-500' key={item.id}>
                                    {item.name} {`(${item.count})`}
                                </Link>

                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default AllBlog;
