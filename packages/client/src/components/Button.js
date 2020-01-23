import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { title } = this.props;
    return (
      <>
        <button type="button" className="btn btn-primary">{title}</button>
      </>
    )
  }
}