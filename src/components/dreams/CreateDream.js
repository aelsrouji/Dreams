import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDream } from '../../store/actions/dreamActions';
import {Redirect} from 'react-router-dom'

class CreateDream extends Component {
    state = {
        title: '',
        content: '',
        authorFirstName: '',
        authorLastName: ''
    }
    handelSubmit = (e) => {
        e.preventDefault();
        this.props.createDream(this.state);
        this.props.history.push('/');
    }
    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        })
    }

    render() {
        const {auth} = this.props;
         // if(!auth.uid) return <Redirect to="/signin" />
        return (
            <div>
                <form onSubmit={this.handelSubmit} className="white">
                    <label htmlFor="title">Dream Title</label>
                    <input type="text" id="title" className="text-field" onChange={this.handelChange}/>

                    <label htmlFor="content">Content</label>
                    <input type="text" name="content" id="content" className="text-field" onChange={this.handelChange}/>

                    <input type="submit" className="btn blue" value="Create" onSubmit={this.handelSubmit}/>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
    auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createDream: (dream) => dispatch(createDream(dream))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateDream)
