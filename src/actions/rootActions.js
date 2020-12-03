const url = 'http://localhost:3000'

export const fetchAudience = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_AUDIENCE'})
        fetch(`${url}/audeinces`)
        .then(resp => resp.json())
        .then(audience => dispatch({type: 'AUDIENCE_LOADED', audience}))
    }
}

export const addAudience = (audience) => {
    return (dispatch) => {
        dispatch( {type: "ADD_AUDIENCE_STARTED" })
        
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(audience)
        };

        fetch(`${url}/audeinces`, configObj)
        .then(resp => resp.json())
        .then(audience => dispatch({type: 'ADD_AUDIENCE', audience}))
    }
}