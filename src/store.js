import { rootReducer } from './redux/reducer/rootReducer'
import {createStore} from 'redux'
import {persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// need to create key to store in back

const persistKey ={
    key: "User_Info",
    storage
}

const persistedReducer = persistReducer(persistKey, rootReducer)

// to create store
const store = createStore(
    persistedReducer
)

// to persistStore
const persistor = persistStore(store)

export default store;
export {persistor}