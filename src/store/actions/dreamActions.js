export const createDream = (dream) =>{
    return(dispatch, getState, {getFirebase,getFirestore})=>{
        //make async call
        const firestore= getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('Dreams').add({
            ...dream,
        // authorFirstName: profile.firstName,
        //    authorLastName: profile.lastName, }
         //   authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type:'Create-Dream', dream});
        }).catch((err) =>{
        dispatch({type: 'Create-Dream-Error',err})
        })
        
}
};