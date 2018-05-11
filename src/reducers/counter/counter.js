/**
 * Actions - are function that return plain objects, optional payloads can be included along with a required type.
 */
export const increment = () => {
  return { type: 'INCREMENT' };
}

export const decrement = () => {
  return { type: 'DECREMENT' }
}

/**
 * Reducers are pure functions that take the current state, an action and return the new state of the application.
 * If this particular reducer cannot handle the given action then the previous state must be returned.
 * 
 * Reducers should never mutate any inputs but instead create new objects that represent the new state.
 * The spread operator { ...foo, bar: 1 } can be used to accomplish that.
 */
export default (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
}

/**
 * Selectors are functions that transform the current state to a different form that is suitable for views to be consumed
 * Selectors must be pure functions as well because they can be cached in the state didn't change.
 */
export const getCounter = (state) => {
  return state;
}