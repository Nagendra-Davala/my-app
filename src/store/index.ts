import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currencyReducer from "./slices/currencySlice";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlicce";
import loadingReducer from "./slices/loadingSlice";
import dataReducer from "./slices/dataSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { watchAllSagas } from "./sagas";
// here we are exporting the reducers as default.so we can use any name to represent.
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "@my-app",
  storage, //localstorage for the web
  blacklist: ["loading", "data"],
};

const rootReducer = combineReducers({
  //data: reducer.: here the currency data manages by the currencyreducer.
  currency: currencyReducer,
  cart: cartReducer,
  user: userReducer,
  loading: loadingReducer,
  data: dataReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

export const persistor = persistStore(store);

sagaMiddleware.run(watchAllSagas);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
