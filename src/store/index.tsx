import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootSlice";
import LikesReducer from "./LikesStateSlice";
import BoostReducer from "./BoostSlice";
import ProtectSlice from "./ProtectSlice";
import VideoChatSlice from "./VideoChatSlice";
import ShareProfileSlice from "./ShareProfileSlice";
import NewLikeSlice from "./NewLikeSlice";



export default configureStore({

    reducer: {
        mainState: rootReducer,
        LikesState: LikesReducer,
        BoostState: BoostReducer,
        ProtectState: ProtectSlice,
        VideoChatState: VideoChatSlice,
        ShareProfileState: ShareProfileSlice,
        NewLikeState: NewLikeSlice,
    }
})