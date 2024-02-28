import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screen component/HomeScreen';
import AboutUs from './screen component/AboutUs';
import ExaminationGuidelines from './Examination Component/ExaminationGuidelines';
import ResultLoginPage from './Examination Component/ResultLoginPage';
import ResultPage from './Examination Component/ResultPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/'index = {true}  element = {<HomeScreen/>} />
      <Route path='/about' element = {<AboutUs/>} />
      <Route path='/exam-guidelines' element = {<ExaminationGuidelines/>} />
      <Route path='/result/loginpage' element = {<ResultLoginPage/>} />
      <Route path='/resultpage' element = {<ResultPage/>} />

    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
