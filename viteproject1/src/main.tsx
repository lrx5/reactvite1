import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.tsx';
import KarzhynWebsite from './KarzhynWebsite.tsx';
import FriendsList from './FriendsList.tsx';
import NoProject from './NoProject.tsx';
import './index.css';
import './Projects.css';
import './ProjectsBlog.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/karzhyn-website" element={<KarzhynWebsite />} />
        <Route path="/friends-list-website" element={<FriendsList />} />
        <Route path="/:NoProject" element={<NoProject />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);