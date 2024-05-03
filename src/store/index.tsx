import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootSlice";
import LikesReducer from "./LikesStateSlice";
import BoostReducer from "./BoostSlice";



export default configureStore({

    reducer: {
        mainState: rootReducer,
        LikesState: LikesReducer,
        BoostState: BoostReducer,
    }
})