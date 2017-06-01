import {createStore} from "redux";

const reducer = function(state, action) {
    if (action.type === 'INC') {
        return state += action.payload;
    }
    if (action.type === 'DESC') {
        return state -= action.payload;
    }
    return state;
};
const store = createStore(reducer, 0);

store.subscribe(() => {
    console.log("Store getState(): " + store.getState());
});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "DESC", payload: 2});
