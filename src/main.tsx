import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ConfigProvider } from 'antd';

import store from './store';

import HomePage from './pages/home';
import DashBoardPage from '@/pages/admin';

import LoginPage from '@/pages/admin/login';
import MenuPage from '@/pages/admin/menu';
import PostPage from '@/pages/admin/post';
import NotFoundPage from './pages/NotFoundPage';

import './index.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<DashBoardPage />} />
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin/menu" element={<MenuPage />} />
          <Route path="/admin/post/:id?" element={<PostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
