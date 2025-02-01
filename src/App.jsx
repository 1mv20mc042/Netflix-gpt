import { useState} from 'react'
import {Provider} from 'react-redux'
import Body from './Components/Body'
import './App.css'
import appStore from './utils/appStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={appStore}>
    <Body />
    </Provider>

    </>
  )
}

export default App
