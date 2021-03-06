import ReactDOM from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import App from './components/app'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')

)
