import React from 'react';
import { Layout } from 'components/Layout';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { Posts } from 'pages/Posts';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
