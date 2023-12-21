import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Redirect from './components/Redirect/index';
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Redirect />}>
          <Route index element={<Dashboard />} />
          <Route path='create-account' element={<CreateAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
