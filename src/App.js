import { createContext } from 'react'
import './App.css'

const App = () => {
  const AppContext = createContext()

  return (
    <AppContext.Provider value={{}}>
      <div className="App">Masło masło masło masło masło</div>
    </AppContext.Provider>
  )
}

export default App
