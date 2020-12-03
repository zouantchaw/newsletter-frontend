export default function rootReducer(state = {newsletters: [], audience: [], socials: [], loading: false}, action) {
    debugger
    switch (action.type) {
        case 'LOADING_AUDIENCE':
            return {...state, audience: [...state.audience], loading: true};
        case 'AUDIENCE_LOADED':
            return {...state, audience: [...state.audience], loading: false};
        case 'test':
        return 'update state with audience'
        default:
            return state;
    }
}


// const exState = {
//     newsletters: [
//         { issue: 'Some date', headline: {content: 'test'}, body: {content: "test"}},
//         { issue: 'Some date', logo: {link: "test"}, headline: {content: 'test'}, body: {content: "test"}}
//     ],
//     emails: [
//         "wiel@google.com", "jerry@yahoo.com", "lesly@hey.com"
//     ],
//     socials: [
//         {twitter: 'test'},
//         {instagram: 'test test'},
//         {youtube: 'test test test'}
//     ]
    // logo: [

    // ] Should the logo be stored on the client side?
// }