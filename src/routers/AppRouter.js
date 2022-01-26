import React, { useEffect, useState } from 'react';
import {
    Navigate,
    Route,
    Routes,
  } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';



export const AppRouter = () => {

    const dispatch = useDispatch();
 
    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    //pendiente de los cambios de la autenticacion
    useEffect(() => {
            
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) =>{
            
            if ( user ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );

                dispatch( startLoadingNotes(user.uid) );
            } else {
               setIsLoggedIn( false );
            }

            setChecking(false);
        })
            
    }, [ dispatch, setChecking,setIsLoggedIn]);

    if ( checking ) {
        return (
            <h1>Wait...</h1>
        )
    }

    return (
        // <Routes>
        //     <Route 
        //         path="/auth/*"
        //         element={< AuthRouter />} 
        //     />
        //     <Route 
        //         path="/"
        //         element={ <JournalScreen /> }
        //         exact
        //     />                    
        // </Routes>



          
     
         
                        // <Routes>
                        //     <Route path="/"
                        //      element={<PrivateRoute isAuthenticated={isLoggedIn}
                        //       element={<JournalScreen />} />} /> 
         
                        //     <Route path="*"
                        //      element={<PublicRoute isAuthenticated={isLoggedIn}
                        //       element={<AuthRouter />}  />} /> 
         
                        //    {/*  <Route path="*" element={<AuthRouter />} /> */}
                        // </Routes>

                        <Routes>
                        {isLoggedIn ?
                            (<Route
                                path='/'
                                element={<JournalScreen />}
                            />
                            
                            )
                            :
                            <Route
                                path='/*'
                                element={<Navigate replace to='auth/login'/>}
                            />
                        }
         
                        {isLoggedIn &&
                            <Route
                                path='/auth/*'
                                element={<Navigate replace to='/'/>}
                            />
                        
                        }
                        
                         <Route
                             path='auth/*'
                             element={<AuthRouter/>}
                            />
         
         
                    </Routes>
         
             
    )
}
