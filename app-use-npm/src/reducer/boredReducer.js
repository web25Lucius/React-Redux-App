import {
    FETCH_BORED_START,
    FETCH_BORED_SUCCESS, 
    FETCH_BORED_FAIL
    } from "../actions/funActions";

    const initialState = {
        activitySetup: "",
        error: "", 
        isLoading: false
    };

    const boredReducer = (state = initialState, action) => {
        switch (action.type) {
            case FETCH_BORED_START:
                return {
                    ...state,
                    error: "", 
                    isLoading: true
                };
            case FETCH_BORED_SUCCESS:
                return{
                    ...state,
                    isLoading: true, 
                    activitySetup: action.payload // this is where you set res.data to activitySetup
                };

            case FETCH_BORED_FAIL:
                return{
                    ...state, 
                    isLoading: false,
                    error: action.payload
                };
            default: 
                return state; 
        }
    };

    export default boredReducer;