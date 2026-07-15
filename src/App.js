import './App.css';
import Login from './Screens/Login'
import SignUp from './Screens/SignUp';
import ForgotPassword from './Screens/ForgotPassword';
import ResetPassword from './Screens/ResetPassword';
import OTPscreen from './Screens/ForgotPassword'
import Vector2 from "./Assets/vector2.png";
import Vector3 from "./Assets/vector3.png";
import DashBoard from './Screens/DashBoard';
import Appointment from './Screens/Appointment';
import Scanner from './Screens/Scanner';
import PatientRecord from './Screens/PatientRecord';
import Settings from './Screens/Settings';
import Messages from './Screens/Messages';
import Report from './Screens/Report';
import MedicalRecord from './Screens/Report';
import PatientRecordProfile from './Screens/PatientRecordProfile';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>

    <Routes>
      <Route  path='/' element={<Login/>} />
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Dashboard' element={<DashBoard/>}/>
        <Route path='/Appointment' element={<Appointment/>}/>
        <Route path='/Scanner' element={<Scanner/>}/>
        <Route path='/PatientRecord' element={<PatientRecord/>}/>
        <Route path='/Settings' element={<Settings/>}/>
        <Route path='/ForgotPassword' element={<ForgotPassword heading="Forgot Password" 
        description="Lost Your Password ? Enter Your email address to reset your password"
        image={Vector2}
        buttonLabel="Send Link"
        />}/>
         <Route path='/OTPscreen' element={<OTPscreen heading="Enter OTP" 
        description="Check your email for the 6-digit OTP. Enter the code below to verify your identity.
         If you don’t see it, check your spam folder"
        image={Vector3}
        buttonLabel="Submit"
        />}/>
        <Route path='/ResetPassword' element={<ResetPassword/>}/>
        <Route path='/Messages' element={<Messages/>}/>
        <Route path='/Report' element={<Report title="Scanner"/>}/>
        <Route path='/MedicalRecord' element={<MedicalRecord title="Obaidullah Scan Report - 01"/>}/>
        <Route path='/PatientRecordProfile' element={<PatientRecordProfile/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
