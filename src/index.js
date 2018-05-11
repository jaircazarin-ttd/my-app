import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import { counterReducer, increment, decrement, getCounter } from './reducers/counter'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(counterReducer)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={getCounter(store.getState())}
    onIncrement={() => store.dispatch(increment())}
    onDecrement={() => store.dispatch(decrement())}
  />,
  rootEl
)

render()
store.subscribe(render)
registerServiceWorker();
