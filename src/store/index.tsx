import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootSlice";
import LikesReducer from "./LikesStateSlice";
import BoostReducer from "./BoostSlice";
import ProtectSlice from "./ProtectSlice";
import VideoChatSlice from "./VideoChatSlice";



export default configureStore({

    reducer: {
        mainState: rootReducer,
        LikesState: LikesReducer,
        BoostState: BoostReducer,
        ProtectState: ProtectSlice,
        VideoChatState: VideoChatSlice
    }
})