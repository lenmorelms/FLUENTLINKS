import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import VerifyScreen from './screens/VerifyScreen';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomeScreen />} />
        <Route exact path='/signup' element={<RegisterScreen />} />
        <Route exact path='/signin' element={<LoginScreen />} />
        <Route exact path='/forgot-password' element={<ForgotPasswordScreen />} />
        <Route exact path='/reset-password' element={<ResetPasswordScreen />} />
        <Route exact path='verify/:token' element={<VerifyScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
