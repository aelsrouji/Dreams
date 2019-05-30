import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {signUp} from '../../store/actions/authActions'
import {connect} from 'react-redux'

class Signup extends Component {
    state = {
        email : '',
        password: '',
        firstName:'',
        lastName:''
    }
    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        }
        )
    }
    handelSubmit = (e) => {
            e.preventDefault();
            this.props.signUp(this.state)
    }

    render() {
        const {auth, authError} = this.props;
        
        return (
            <div className="container">
                <form onSubmit={this.handelSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up </h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" onChange={this.handelChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handelChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handelChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handelChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn blue">Sign Up</button>
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
 auth: state.firebase.auth,
 authError: state.auth.authError
}}

const mapDispatchToProps = (dispatch) => {
return{
    signUp: (newUser) => dispatch(signUp(newUser))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup)
