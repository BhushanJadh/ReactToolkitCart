
import {configureStore} from '@reduxjs/toolkit'
import Slice from './Slice'
const Store=configureStore({
    reducer:{
        User:Slice
    }
})
export default Store