import React , {Component} from 'react';
import Notifications from './notifications';
import DreamList from '../dreams/DreamList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class Dashboard  extends Component{
    render(){
        const {dreams, auth} = this.props; 
       // if(!auth.uid) return <Redirect to="/signin" />
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <DreamList dreams={dreams}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{

    dreams: state.firestore.ordered.Dreams,
    auth: state.firebase.auth
    }
}

export default  compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'Dreams'}
    ])
    )(Dashboard)