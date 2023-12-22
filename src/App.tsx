import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedOutlet from './components/ProtectedOutlet/index';
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedOutlet />}>
          <Route index element={<Dashboard />} />
          <Route path='create-account' element={<CreateAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
