import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedOutlet from './components/ProtectedOutlet/index';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedOutlet />}>
          <Route index element={<Dashboard />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
