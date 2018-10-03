import React, { Component, fragment } from 'react';
import '../App.css';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';

export default class extends Component {
  render() {
    return <fragment>
        <Header />

        <Exercises />

        <Footer />
      </fragment>
  }
}
