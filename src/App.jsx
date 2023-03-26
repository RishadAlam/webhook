import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Crm from "./components/crm/Crm"
import Webhook from "./components/webhook/Webhook"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Webhook />} />
          <Route path="/crm" element={<Crm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
