import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { Header, Link, Footer, MainWrapper } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <Header>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
      </Header>

      <MainWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainWrapper>

      <Footer>2022, GoIT Homework - Movies, Falconoff ©</Footer>
    </>
  );
}
