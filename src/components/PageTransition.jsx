import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Root from './index.style';

class PageTransition extends Component {
	state = {
		active: true,
	};

	componentDidUpdate() {
		// Check if children are different to previous children
		// If true, set this.state.active to false
		// After 1000ms transition, set to true again
	}

render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </Container>
    )
  }
}