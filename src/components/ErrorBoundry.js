import React, { Component } from 'react';


class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errInfo: ''
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, errInfo: info })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Yikes! Houston, We have a problem!</h1>
    }
    return this.props.children;
  }
}

export default ErrorBoundry;