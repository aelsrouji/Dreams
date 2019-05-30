const initState = {
    dreams: [
        { id: 1, title: 'my aha dream 1', content: 'dream 1 content' },
        { id: 2, title: 'my dream 2', content: 'dream 2 content' },
        { id: 3, title: 'my dream 3', content: 'dream 3 content' }
    ]
}

const dreamReducer = (state = initState, action) => {
    switch (action.type) {
        case 'Create-Dream':
            console.log('created a dream', action.dream);
            return state;
        case 'Create-Dream-Error':
            console.log('Creat dream error', action.err);
            return state;
        default:
            return state;
    }

}

export default dreamReducer
