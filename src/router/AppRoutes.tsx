import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/pages/HomePage/HomePage';
import AttractionPage from '../components/pages/AttractionPage/AttractionPage';
import ChecklistPage from '../components/pages/ChecklistPage/ChecklistPage';
import NotFoundPage from '../components/pages/NotFoundPage/NotFoundPage';

/** Карта маршрутов сайта. */
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/place/:slug" element={<AttractionPage />} />
      <Route path="/checklist" element={<ChecklistPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
