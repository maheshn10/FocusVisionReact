import React, { Component } from 'react';
import { connect } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import { insertLog, winAuth } from './actions/logActions';

// @connect((store) => {   return {message: store.log.message} })

class App extends Component {
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
      Pass: ''
    };
  }

  componentWillMount() {
    const Loginfo = {
      Event_ID: 1,
      Request: '',
      Response: '',
      Source: '',
      Page: '',
      Comment: ''
    };
    this
      .props
      .dispatch(insertLog(Loginfo));
  }

  onUserChange(e) {
    this.setState({ User: e.target.value });
  }

  onPassChange(e) {
    this.setState({ Pass: e.target.value });
  }

  authenticate(e) {
    console.log(e);
    this
      .props
      .dispatch(winAuth(this.state.User, this.state.Pass));
  }

  render() {
    console.log(this.props);
    console.log('123');
    return (
      <div>{this.props.log.message}

        <input
          type="text"
          className="ts-input"
          value={this.state.User}
          onChange={(e) => this.onUserChange(e)}
        />
        <input
          type="text"
          className="ts-input"
          value={this.state.Pass}
          onChange={(e) => this.onPassChange(e)}
        />
        <button onClick={(e) => this.authenticate(e)}>Auth</button>
        <div className="auth">{this.props.log.IsLogged}</div>
      </div>
    );
  }
}

// export default App;

function mapStateToProps(state) {
  return { log: state.log };
}

export default connect(mapStateToProps)(App);
