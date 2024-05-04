import { useState } from 'react'
import './Popup.css'

function App() {
  const [crx, setCrx] = useState('create-chrome-ext')

  return (
    <main>
      <h3>This extension will auto close the tabs blocked by ublock</h3>

      <h6>v 0.0.0</h6>

    </main>
  )
}

export default App
