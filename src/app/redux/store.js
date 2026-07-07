import reducer from "./slice"

const {ConfigureStore} = require("@reduxjs/toolkit")
export const store = ConfigureStore({
    reducer
})