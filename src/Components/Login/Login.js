import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Auth, ShowData } from '../../actions/LoginActions';

import './Login.css';

// @connect((store) => {   return {message: store.log.message} })

class Login extends Component {
  constructor(props) {
    super(props);
    this.onUserChange = this
          .onUserChange
          .bind(this);
    this.onPassChange = this
          .onPassChange
          .bind(this);
    this.authenticate = this
          .authenticate
          .bind(this);
    this.state = {
      User: '',
      Pass: '',
      focusInfo: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login.loginInfo != null) {
      if (nextProps.login.loginInfo !== this.props.login.loginInfo) {
        this.props.dispatch(ShowData(nextProps.login.loginInfo.access_token));
      }
    }
    if (nextProps.login.focusInfo !== this.props.login.focusInfo) {
      this.setState({ focusInfo: nextProps.login.focusInfo });
    }
  }

  onUserChange(e) {
    this.setState({ User: e.target.value });
  }

  onPassChange(e) {
    this.setState({ Pass: e.target.value });
  }

  authenticate(e) {
    console.log(e);
    this.props.dispatch(Auth(this.state.User, this.state.Pass));
  }

  render() {
    const dStyle = {
      display: this.props.login.logged ? 'none' : 'block'
    };
    const showdata = this.props.login.focusInfo.map((item, i) => (
      <div key={i}>
        {JSON.stringify(item)}
        <hr />
      </div>
    ));
    return (
      <div className="login-page">
        <div className="form" style={dStyle}>
          <input
            type="text" placeholder="username" value={this.state.User}
            onChange={(e) => this.onUserChange(e)}
          />
          <input
            type="password" placeholder="password"
            value={this.state.Pass}
            onChange={(e) => this.onPassChange(e)}
          />
          <button onClick={(e) => this.authenticate(e)}>login</button>
          <p className="message">Not registered? <a>Create</a></p>
        </div>
        <div>
          {showdata}
        </div>
      </div>
    );
  }
}

// export default App;

function mapStateToProps(state) {
  return { login: state.login };
}

export default connect(mapStateToProps)(Login);
