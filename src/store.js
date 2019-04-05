import { createStore } from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: ''
}

export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_ADDRESS = "UPDATE_ADDRESS"
export const UPDATE_CITY = "UPDATE_CITY"
export const UPDATE_STATE = "UPDATE_STATE"
export const UPDATE_ZIPCODE = "UPDATE_ZIPCODE"