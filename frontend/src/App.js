import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Item from './pages/Item/Item'

import { text } from './constants/constants'
import styles from './App.module.scss'

const App = () => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{text.header}</h1>
      </div>
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/:itemId'
              element={<Item />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App