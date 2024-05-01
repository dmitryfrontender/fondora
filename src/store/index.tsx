import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootSlice";
import LikesReducer from "./LikesStateSlice";



export default configureStore({

    reducer: {
        mainState: rootReducer,
        LikesState: LikesReducer
    }
})