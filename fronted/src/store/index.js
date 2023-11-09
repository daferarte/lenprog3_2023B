import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userSlice from './user';

const reducer= combineReducers({
    user:userSlice
});

const persistConfg = {
    key:'root',
    storage: storage
}

const persistedReducer = persistReducer(persistConfg, reducer);


export const store = configureStore({
    reducer:{
        user:persistedReducer
    }
});

export const persistor = persistStore(store);