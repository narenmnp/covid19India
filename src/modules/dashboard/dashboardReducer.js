import { ACTION_TYPES as types } from './action'



const initialState = {
    countryData: [],
    stateData: [],
    districtData: []
};


export default function covid19Reducer(state = initialState, action) {
    var newState = Object.assign({}, state);
    switch (action.type) {
        case types.GET_CUMULATIVE_DATA_SUCCESS:
            if (action.payload.data) {
                var cumulativeArray = action.payload.data.statewise;
                newState.countryData = cumulativeArray.slice(0, 1)[0];
                newState.stateData = cumulativeArray.slice(1, cumulativeArray.length)
            }
            return newState;

        case types.ADD_COMPANY_FAILED:
            newState.stateData = [];
            return newState;

        default:
            return newState;
    }
}