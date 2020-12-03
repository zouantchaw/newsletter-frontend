const url = 'http://localhost:3000'

export const fetchAudience = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_AUDIENCE'})
        fetch(`${url}/audeinces`)
        .then(resp => resp.json())
        .then(audience => dispatch({type: 'AUDIENCE_LOADED', audience}))
        // .then(x => {
        //     debugger
        //     dispatch({type: 'AUDIENCE_LOADED', x})
        // })
    }
}