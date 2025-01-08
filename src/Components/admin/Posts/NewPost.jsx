import React, { useEffect, useState } from 'react';
import SideBar from '../adminLayout/SideBar';
import ReactQuill from 'react-quill';
import { FiLock, FiUnlock } from 'react-icons/fi'; // Icons for private/public toggle
import 'react-quill/dist/quill.snow.css';
import { Bounce, toast, ToastContainer } from 'react-toastify';

export default function NewPost() {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [isPublic, setIsPublic] = useState(true); // Visibility state (public or private)
  const [disabled, setDisabled] = useState(true);
  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
    }
  };

  const handleVisibilityToggle = () => {
    setIsPublic(!isPublic);
  };

  const handleSubmit = async () => {

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('status', isPublic ? 'publish' : 'private'); // Toggle visibility
    if (thumbnail) {
      formData.append('thumbnail', thumbnail);
    }

    try {
      setIsPostsLoading(true); // Start loading
      const response = await fetch('https://polytechub.in/wp-json/wp/v2/posts', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3BvbHl0ZWNodWIuaW4iLCJpYXQiOjE3MzYzMDk0MzUsIm5iZiI6MTczNjMwOTQzNSwiZXhwIjoxNzM2OTE0MjM1LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ._EBDPimn6nCi7QJQt_7l0o9ilr0jset90iptNej-coE', // Replace with your JWT token
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to save post');
      }

      const result = await response.json();
      console.log('Post saved successfully:', result);
      toast.success(` Added Successfully ${result.title?.rendered}`, {
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

      // Reset form after successful submission
      setTitle('');
      setContent('');
      setThumbnail(null);
    } catch (error) {
      toast.error(` Failed Try again `, {
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
    } finally {
      setIsPostsLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    // Check if the title is empty or exceeds 45 characters
    if (title.length < 45) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [title]);

  return (
    <SideBar>
      <section className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Create New Post</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title <sup className='text-rose-500'>*</sup>
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              className="border text-gray-700 text-sm w-full rounded-lg h-10 py-1 px-2 outline-none font-mono"
            />
          </div>

          {/* Thumbnail Upload */}
          <div>
            <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">
              Thumbnail
            </label>
            <input
              id="thumbnail"
              type="file"
              accept="image/*"
              onChange={handleThumbnailChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {/* Rich Text Editor */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <ReactQuill
              id="content"
              value={content}
              onChange={handleContentChange}
              theme="snow"
              placeholder="Write your post content here..."
              className="h-64"

            />
          </div>
          <br />
          <br />
          {/* Visibility Toggle */}
          <div className='flex items-center justify-between'>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handleVisibilityToggle}
                className="flex items-center gap-2 px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200"
              >
                {isPublic ? (
                  <>
                    <FiUnlock className="text-green-500" /> Public
                  </>
                ) : (
                  <>
                    <FiLock className="text-red-500" /> Private
                  </>
                )}
              </button>
              <span className="text-sm text-gray-500">
                Current visibility: {isPublic ? 'Public' : 'Private'}
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={disabled}
              className={`bg-blue-500 text-white px-4 py-2 rounded-md ${disabled ? "cursor-not-allowed opacity-45" : 'cursor-auto opacity:100'}`}
            >
              {isPostsLoading ? 'Saving...' : 'Save Post'}
            </button>
          </div>
        </form>
        <ToastContainer />
      </section>
    </SideBar>
  );
}
