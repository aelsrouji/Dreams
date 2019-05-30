import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'

class Signin extends Component {
    state = {
        email: '',
        password: ''
    }

    handelChange = (e) => {
        
        this.setState({
            [e.target.id]: e.target.value
        }
        )
    }
    handelSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
        
    }
    render() {
         // if(auth.uid) return <Redirect to="/" />
        const { authError } = this.props;
        return (
            <div className="container">
                <form onSubmit={this.handelSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In </h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" onChange={this.handelChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handelChange} />
                    </div>

                    <div className="input-field">
                        <input type="submit" className="btn blue" value="Log In" onSubmit={this.handelSubmit} />
                        <div className="text-red">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin)
