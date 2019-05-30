import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom'

const DreamDetails = (props) => {
    const {dream, auth} = props;
     // if(!auth.uid) return <Redirect to="/signin" />
     //const id=props.match.params.id;
     console.log(props);
    //if(dream)
    //{
    return (
        <div className="container section dream-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Dream Title: {dream.title}</span>
                    <p> {dream.content}
                    </p>

                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Ayman{/*should be AuthorFirsLastName*/}</div>
                    <div>Date: {/*createdAt*/} </div>
                </div>
            </div>
        </div>
    )//}

    //else{
      //  return(
    //<div className="container center">Loading dream ... </div>
      //  )
    //}
}

const mapStateToProps = (state, ownProps) => {
    
    const id = ownProps.match.params.id;
    const dreams = state.firestore.data.dreams;
    const dream = dreams ? dreams[id] : null;
    return {
        dream : dream,
        auth: state.firestore.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'Dreams' }
    ])
)(DreamDetails)
