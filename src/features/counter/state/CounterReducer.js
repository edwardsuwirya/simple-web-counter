 const initialState = {
    nilai: 0
}

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case "counter/incremented":
            return {...state, nilai: state.nilai + action.counter};
        case "counter/decremented":
            return {...state, nilai: state.nilai - action.counter};
        default:
            return state;
    }
}

export default counterReducer;
