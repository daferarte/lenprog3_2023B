import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import Axios from 'axios';

import apiConfig from '../config/api';

export const signUp = createAsyncThunk('user/signUp', async(credential)=>{
    //realizamos la operacion asincrona 
    let response = await Axios.post(`${apiConfig.domain}/users/`,{
        user: credential.credential
    })
    console.log(response);
    return response.data;
});

export const signIn = createAsyncThunk('user/signIn', async(credential)=>{
    let response = await Axios.post(`${apiConfig.domain}/users/login/`,{
        user: credential.credential
    })
    console.log(response);
    return response.data;
});

let userSlice = createSlice({
    name: 'user',
    initialState:{
        user:null,
        status:''
    },
    reducers: {
        logOut: (state)=>{
            state.user = null;
        }
    },extraReducers:{
        [signUp.pending]:(state, action)=>{
            state.status = 'loading...';
        },
        [signUp.fulfilled]:(state, action)=>{
            state.user=action.payload;
        },
        [signUp.rejected]:(state, action)=>{
            state.status = 'failed';
        },
        [signIn.pending]:(state, action)=>{
            state.status = 'loading...';
        },
        [signIn.fulfilled]:(state, action)=>{
            state.user=action.payload;
        },
        [signIn.rejected]:(state, action)=>{
            state.status = 'failed';
        }

    }
});

export const {logOut} = userSlice.actions;

export default userSlice.reducer;