import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/routes';

function App() {
  return (
    <main>
      <Routes>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </main>
  );
}

export default App;
