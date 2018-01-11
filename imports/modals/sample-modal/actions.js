const NAMESPACE = 'modals/sample-modal/';

export const openSampleModal = () => {
    return {
        type: NAMESPACE + 'OPEN',
        payload: {
            isOpen: true
        }
    };
}

export const closeSampleModal = () => {
    return {
        type: NAMESPACE + 'CLOSE',
        payload: {
            isOpen: false
        }
    };
}