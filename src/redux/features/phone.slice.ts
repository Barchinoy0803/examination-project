import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Phone } from '../../types'


export interface PhoneState {
    phone: Phone
}

const initialState: PhoneState = {
    phone: {
        title: "",
        description: "",
        image: "",
        price: 0,
        colorId: ""
    }
}

export const PhonesState = createSlice({
    name: 'phones',
    initialState,
    reducers: {
        setPhone: (state, action: PayloadAction<Phone>) => {
            state.phone = action.payload
        }
    },
})

export const { setPhone } = PhonesState.actions
export default PhonesState.reducer
