import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../Home/Layout';
import { Spinner } from 'react-bootstrap';
import styles from './SingleBlogPage.module.css';  // Import the CSS module
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

export default function SingleBlogPage() {
    const { slug } = useParams();  // Get slug from URL params
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchBlog = async () => {
        setLoading(true);
        try {
            // URL-encode the slug to avoid issues with special characters
            const encodedSlug = encodeURIComponent(slug);

            const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?slug=${encodedSlug}`);
            const data = await res.json();
            console.log(data);
            setBlog(data[0]);  // Set the first post data into the blog state
        } catch (error) {
            console.error("Error fetching individual blog:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlog();
    }, [slug]);

    return (
        <Layout>
            <div className=" mx-auto mt-6 w-8/12 ">
                {loading ? (
                    <div className='flex justify-center'>
                        <Spinner className='text-orange-500 text-xl' />
                    </div>
                ) : blog ? (
                    <div className='border p-4 bg-white rounded-lg'>

                        <div className={styles.blogContent} dangerouslySetInnerHTML={{ __html: blog.content.rendered }} />
                    </div>
                ) : (
                    <p>Blog not found</p>
                )}

                <div>
                    <Link to={'/blog-page'} className='flex items-center gap-2 '>
                        <FaArrowCircleLeft /> Previous
                    </Link>
                </div>
            </div>

        </Layout>
    );
}
