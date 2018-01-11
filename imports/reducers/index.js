const modalSample = (state = {}, action) => {
    const NAMESPACE = 'modals/sample-modal/';

    switch (action.type) {
        case NAMESPACE + 'OPEN':
        case NAMESPACE + 'CLOSE':
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
}

export default {
    modalSample
}