import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    services:[],
    service: {},
    client: "",
    isLoading: false
}

export const getServices = createAsyncThunk( "serviceSlice,getServices",
async(arg, {dispatch, rejectWithValue}) => {
    try {
        const {data} = await axios.get("/service")
        return data.data
    } catch (error) {
        console.log(error.response.data.message)
        return rejectWithValue(error.response.data.message)
    }
})

export const getServicesById = createAsyncThunk( "serviceSlice,getServicesById",
async(id, {dispatch, rejectWithValue}) => {
    try {
        const {data} = await axios.get(`/service/${id}`)
        return data.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const getServicesByClient = createAsyncThunk( "serviceSlice,getServicesByClient",
async(id, {dispatch, rejectWithValue}) => {
    try {
        const {data} = await axios.get(`/service/client/${id}`)
        return data.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

const serviceSlice = createSlice({
    name: "serviceSlice",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = action.payload
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getServicesByClient.pending, (state, action) =>{
            state.isLoading = true
        })

        builder.addCase(getServicesByClient.fulfilled, (state, action) => {
            state.services = action.payload;
            state.client = action.payload.client;
            state.isLoading = false;
        });
      
        builder.addCase(getServicesByClient.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(getServicesById.pending, (state, action) =>{
            state.isLoading = true
        })

        builder.addCase(getServicesById.fulfilled, (state, action) => {
            state.service = action.payload;
            state.isLoading = false;
        });
      
        builder.addCase(getServicesById.rejected, (state, action) => {
            state.isLoading = false;
        });

        
    }
})

export const {setLoading} = serviceSlice.actions;

export default serviceSlice.reducer