import { configureStore } from "@reduxjs/toolkit";
import  TeamSlice  from "./Reducer/Teams";

export default configureStore({
    reducer: {
        teams: TeamSlice
    }
})