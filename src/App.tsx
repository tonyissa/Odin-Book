import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Redirect from './pages/Redirect/index';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Redirect />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
