import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "../Features/todoSlice"
export const store = configureStore({
reducer:{
    todos1:todoreducer
}
})