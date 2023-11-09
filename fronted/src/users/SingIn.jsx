import React from "react";
import { useDispatch, useSelector} from 'react-redux';

import {logOut, signIn, signUp} from '../store/user';

let SignIn = (props) => {
    let dispatch = useDispatch();

    let user = useSelector(state => state.user.user);

    console.log(user);

    let doSignIn = () => {
        dispatch(
            // signIn({
            //     email: 'daniel@daniel.com',
            //     token: 'dnwqjeh3872yre87wf'
            // })
            signUp({
                credential:{
                    email: 'danss@daniel.com',
                    name: 'dan redux'
                }
            })
        )
    }

    let doLogOut = () => {
        dispatch(
            logOut()
        )
    }

    return(
        <div>
            {
                user?<button onClick={doLogOut}>Log Out</button>:<button onClick={doSignIn}>Sign In</button>
            }
            
            
        </div>
    )
}

export default SignIn;