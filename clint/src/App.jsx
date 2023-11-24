import { Route, Routes } from 'react-router-dom'
import { Dashboard } from "./pages/Dashboard";
function App() {
  return (
  <div> 
    <Routes>
        <Route path='*' element={<h1>Not Found</h1>} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
  </div>
  )
}

export default App;
