import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './Component/Navbar'

import Homepage from './Page/Homepage'
import Aboutpage from './Page/Aboutpage'
import Singlepage from './Page/Singlepage'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about-us" element={<Aboutpage />} />
          <Route exact path="/signleshow/:id" element={<Singlepage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
