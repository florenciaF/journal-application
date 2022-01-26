import React from 'react';
import {
    Route,
    Routes,
    Navigate
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return ( 
        <div className="auth__main">
            <div className="auth__box-container">
                <Routes>
                    <Route 
                        path="login"
                        element={< LoginScreen />} 
                        exact
                    />
                    <Route 
                        path="register"
                        element={< RegisterScreen />} 
                        exact
                    />

                    <Route path="*" element={<Navigate replace to="/auth/login" />} />
                </Routes>

            </div>
           
            
        </div>
    )
}
