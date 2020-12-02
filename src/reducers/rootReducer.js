export default function rootReducer(state = exState, action) {
    switch (action.type) {
        case 'ADD_NEWSLETTER':
            return "Return a state";
        default:
            return state;
    }
}


const exState = {
    newsletters: [
        { issue: 'Some date', headline: {content: 'test'}, body: {content: "test"}},
        { issue: 'Some date', logo: {link: "test"}, headline: {content: 'test'}, body: {content: "test"}}
    ],
    emails: [
        "wiel@google.com", "jerry@yahoo.com", "lesly@hey.com"
    ],
    socials: [
        {twitter: 'test'},
        {instagram: 'test test'},
        {youtube: 'test test test'}
    ]
    // logo: [

    // ] Should the logo be stored on the client side?
}