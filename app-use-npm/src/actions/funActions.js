import axios from 'axios';

export const FETCH_BORED_START = 'FETCH_BORED_START';
export const FETCH_BORED_FAIL = 'FETCH_BORED_FAIL';
export const FETCH_BORED_SUCCESS = 'FETCH_BORED_SUCCESS';

export const getBored = () => dispatch => {
    dispatch({type: FETCH_BORED_START});
    axios
    .get("https://www.boredapi.com/api/activity/")
    .then(response => {
            console.log(response);
            dispatch({ type: FETCH_BORED_SUCCESS, payload: response.data});
        })
    .catch(err => {
            console.log(err);
            dispatch({type: FETCH_BORED_FAIL, payload:"Nobody PANIC.. but something is wrong"});
        });
    };