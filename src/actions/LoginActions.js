import axios from 'axios';

export const Configs = {
  CONFIG: {
    headers: {
      'Content-Type': 'application/json'
    }
  }
};

export function Auth(userName, password) {
  return function (dispatch) {
    axios
      .post('http://localhost:65444/token', `grant_type=password&username=${userName}&password=${password}`, Configs)
      .then(response => {
        dispatch({ type: 'AUTH_LOG', loginInfo: response.data });
      })
      .catch(err => {
        dispatch({ type: 'ERROR_LOG', message: err.message });
      });
  };
}

export function ShowData(token) {
  const TConfigs = {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      Authorization: `Bearer ${token}`
    }
  };
  return function (dispatch) {
    axios
      .get('http://localhost:65444/api/FocusVision', TConfigs)
      .then(response => {
        dispatch({ type: 'SHOW_DATA', focusInfo: response.data });
      })
      .catch(err => {
        dispatch({ type: 'ERROR_LOG', message: err.message });
      });
  };
}
