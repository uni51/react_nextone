import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
// import Hello from './App';
// import registerServiceWorker from './registerServiceWorker';

const Hello = (props) => {
  return <div>こんにちは、{props.name}さん</div>
}

Hello.defaultProps = {
  name: '坂本龍馬'
}

Hello.propTypes = {
  name: PropTypes.string
}

ReactDOM.render(
  <Hello name="西郷隆盛" />,
  document.getElementById('root')
);
// registerServiceWorker();
