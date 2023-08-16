import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from 'redux/postsSlice';
export const PostItem = ({ title, body, id }) => {
  const dispatch = useDispatch();
  return (
    <li className="border-2 border-black px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer bg-white">
      <h2 className="text-2xl italic text-blue-300 font-bold">{title}</h2>
      <h5>{body}</h5>
      <div className="flex gap-3 my-2">
        <button
          onClick={() => dispatch(deletePost(id))}
          className="hover:bg-red-400 hover:text-white border-2 border-black px-3 rounded-md"
        >
          Delete
        </button>
        <button className="hover:bg-green-400 hover:text-white border-2 border-black px-3 rounded-md">
          Add to favourite
        </button>
      </div>
    </li>
  );
};
