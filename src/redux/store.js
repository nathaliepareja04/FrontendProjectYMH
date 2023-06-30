import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import serviceReducer from "./vehiclesSlice"

const store = configureStore({
    reducer: {
        authStore: authReducer,
        serviceStore: serviceReducer
    },
});
export default store;