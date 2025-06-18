import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface PhoneState {
    title: string;
    image: string;
    description: string;
    colorId?: string;
    price: number;
}

const initialState: PhoneState = {
    title: "",
    image: "",
    description: "",
    colorId: "",
    price: 0
}

export const PhonesState = createSlice({
    name: 'phones',
    initialState,
    reducers: {
        setPhone: (state, action: PayloadAction<string>) => {
            state.title = action.payload
            state.image = action.payload
            state.description = action.payload
            state.colorId = action.payload
            state.price = Number(action.payload)
        }
    },
})

export const { setPhone } = PhonesState.actions
export default PhonesState.reducer
