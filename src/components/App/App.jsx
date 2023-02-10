import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { Layout } from 'components/layout/layout';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const NotFound = lazy(() => import('../../pages/NotFound'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
};
