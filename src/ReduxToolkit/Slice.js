import {createSlice} from '@reduxjs/toolkit'

const  initialValue={
    value:0
}
export const Slice=createSlice({
    name:"bhu",
    initialState:initialValue,
    reducers:{
        ADD:(state)=>{
            state.value +=1
        },
        REMOVE:(state)=>{
            if(state.value >0){
                state.value -=1
            }
            
        }
    }

})
export const {ADD,REMOVE}=Slice.actions
export default Slice.reducer