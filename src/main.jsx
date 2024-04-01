import ReactDOM from 'react-dom/client'
import App from "./app/App.jsx"
import './style/index.css'
import { BrowserRouter } from "react-router-dom";
import styled, {createGlobalStyle} from "styled-components";


const Global=createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <BrowserRouter>
       <Global/>
       <App />
   </BrowserRouter>
  </>,
)
