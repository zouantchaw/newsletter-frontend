const url = 'http://localhost:3000'

export const fetchAudience = () => {
    debugger
    return (dispatch) => {
        dispatch({ type: 'LOADING_AUDIENCE'})
        fetch(`${url}/audiences`)
        .then(resp => resp.json())
        .then(audience => dispatch({type: 'AUDIENCE_LOADED', audience}))
    }
}