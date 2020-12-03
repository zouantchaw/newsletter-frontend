export default function rootReducer(state = {newsletters: [], audience: [], socials: [], loading: false}, action) {
    switch (action.type) {
        // Audience 
        case 'LOADING_AUDIENCE':
            return {...state, audience: [...state.audience], loading: true};
        case 'AUDIENCE_LOADED':
            return {...state, audience: [...action.audience], loading: false};
        case 'ADD_AUDIENCE_STARTED':
            return {...state, audience:[ ...state.audience], loading: true}
        case 'ADD_AUDIENCE':
            return {...state, audience: [...state.audience, action.audience], loading: false}

        //Socials
        case 'LOADING_SOCIALS':
            return {...state, socials: [...state.socials], loading: true}
        case 'SOCIALS_LOADED':
            return {...state, socials: [...action.social]}
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