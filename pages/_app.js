import { Provider } from 'react-redux'
import '../styles/globals.css'
import showReducer from "../features/show"
import showtwoReducer from "../features/showtwo"
import showthreeReducer from "../features/showthree"
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    show: showReducer,
    showtwo: showtwoReducer,
    showthree: showthreeReducer,
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>)
}

export default MyApp
