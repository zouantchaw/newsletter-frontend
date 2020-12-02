export default function rootReducer(state = exState, action) {
    switch (action.type) {
        case 'ADD_NEWSLETTER':
            return "Return a state";
    
        default:
            return  ;
    }
}


const exState = {
    newsletters: [
        { issue: 'Some date', logo: {link: "test"}, headline: {content: 'test'}, body: {content: "test"}, social: {twitter: "test", instagram: "test", youtube: "test" }},
        { issue: 'Some date', logo: {link: "test"}, headline: {content: 'test'}, body: {content: "test"}, social: {twitter: "test", instagram: "test", youtube: "test" }}
    ]
}