// import { fromJS } from 'immutable';

const INCREMENT_COUNT = 'CARD_PAGE/INCREMENT_COUNT';

export const incrementCount = () => {
    return {
        type: INCREMENT_COUNT,
    };
}

// const initialState = fromJS({
//     counter: 0
// });
const initialState = {
    counter: 0
};
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {...state, counter: state.counter + 1};
            // return state.set('count', state.get('count') + 1);
        default:
            return state;
    }
}