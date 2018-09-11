import React, { Component } from 'react';
import styled from 'styled-components';

import Profile from './profile/Profile'
import Experience from './experience/Experience'


class App extends Component {
  state = {
    profileHeight: 'auto'
  }

  setProfileHeight = (height) => {
    if (height !== this.state.profileHeight) {
      this.setState({profileHeight: height});
    }
  }

  render() {
    const Container = styled.div`
      width: 1280px;
      margin: 0 auto;
    `;

    return (
      <Container>
        <div className="container">
          <Profile height={this.state.profileHeight}></Profile>
          <Experience setProfileHeight = {this.setProfileHeight}></Experience>
        </div>
      </Container>
    );
  }
}

export default App;
