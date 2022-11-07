import { useEffect, useReducer } from "react";

const useFetch = (url) => {

    const initialState = {
        loading: false,
        data: null,
        error: null
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'fetchDataStart':
                return {
                    ...state,
                    loading: true,
                    data: null,
                    error: null
                }
            case 'fetchDataSuccess':
                return {
                    ...state,
                    loading: false,
                    data: action.data,
                    error: null
                }
            case 'fetchDataFail':
                return {
                    ...state,
                    loading: false,
                    data: null,
                    error: action.error
                }
            default: return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: 'fetchDataStart' })
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: 'fetchDataSuccess',
                    data: data
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'fetchDataFail',
                    error: err
                })
                console.log(err)
            })

    }, [url])

    return [state]
};

export default useFetch
