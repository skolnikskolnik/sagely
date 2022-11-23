import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'

import styles from './App.module.scss'

const App = () => {

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App