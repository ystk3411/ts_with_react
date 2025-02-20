import './App.css'
import UserList from './userlist'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={<UserList/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
