import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Redirect from './components/Redirect/index';
import CreateAccount from './pages/CreateAccount';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Redirect />} />
          <Route path='create-account' element={<CreateAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
