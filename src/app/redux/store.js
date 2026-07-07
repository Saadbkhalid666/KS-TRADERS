const {ConfigureStore} = require("@reduxjs/toolkit")
import {reducer} = from "./slice"
export const store = ConfigureStore({
    reducer
})