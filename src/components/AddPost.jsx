import { nanoid } from 'nanoid';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addPost } from 'redux/postsSlice';
import { selectPosts } from 'redux/selectors';

export const AddPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !body) {
      // проверка что не записали ниче в инпут
      toast.error('Write your post!');
      return;
    }
    const existedPost = posts.find(post => post.title === title);
    if (existedPost) {
      toast.error(`Post with this value: ${title}, already exist`);
      return;
    }
    const newPost = {
      title,
      body,
      id: nanoid(),
    };
    dispatch(addPost(newPost));
    setTitle('');
    setBody('');
  };
  return (
    <div className="border-2 border-black rounded-lg shadow-md p-6 max-w-md mx-auto mt-4 bg-purple-100">
      <h1 className="text-2xl font-bold mb-4">Add a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border-2 border-black px-4 py-2 rounded-md text-lg focus:outline-none focus:border-purple-500"
          placeholder="Enter your title..."
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className="border-2 border-black px-4 py-2 rounded-md text-lg focus:outline-none focus:border-purple-500 resize-none"
          placeholder="Enter your body..."
          rows={4}
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-400 text-white rounded-md py-2 w-1/2 mx-auto hover:bg-purple-500 focus:outline-none border-2 border-black"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};
