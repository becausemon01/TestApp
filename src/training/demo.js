import {createStore} from 'redux';
import {status,sort} from './actions/index';

var initialState = {
    status : false,
    sort : {
        by : "name",
        value : 1,
    }
};

var myReducer = (state = initialState, action) => {
    if(action.type === "TOGGLE_STATUS")
    {
        state.status = !state.status;
    }
    if(action.type ==="SORT"){
        var {by,value} = action.sort;
        var status = action;
        return {
            status : status,
            sort : {
                by : by,
                value : value
            }
        } 
    };
    return state
};

const store = createStore(myReducer);
console.log('Default: ',store.getState());



store.dispatch(status());

console.log('TOGGLE_STATUS: ',store.getState());



store.dispatch(sort({
    by : "name",
    value : -1
}));
console.log('SORT: ',store.getState());
