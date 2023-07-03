import {configureStore} from "@reduxjs/toolkit";
import counterSlicereducer from "../Featues/Counter/counterSlice";
export const store = configureStore({
    reducer : {
        counter:counterSlicereducer,
    }
})