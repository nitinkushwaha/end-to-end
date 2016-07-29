import React, { Component, PropTypes } from 'react';
import styles from './Episode.scss';

export default class Episode extends Component {

  static propTypes = {
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      speakers: PropTypes.array.isRequired,
      date: PropTypes.number.isRequired,
      duration: PropTypes.object.isRequired
  };

  render() {
    const { title } = this.props;

    return (
      <div>
        { title }
      </div>
    );

  }
}