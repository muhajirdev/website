import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'

const timeout = 250

const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
    transform: 'translateX(-.5%)',
  },
  entered: {
    transition: `all ${timeout}ms ease-in-out`,
    opacity: 1,
    transform: 'translateX(0%)',
  },
  exiting: {
    transition: `all ${timeout}ms ease-in-out`,
    opacity: 0,
    transform: 'translateX(.5%)',
  },
}

const Transition = ({ children, location }) => (
  <TransitionGroup>
    <ReactTransition
      key={location.pathname}
      timeout={{
        enter: timeout,
        exit: timeout,
      }}
    >
      {status => (
        <div
          style={{
            ...getTransitionStyles[status],
          }}
        >
          {children}
        </div>
      )}
    </ReactTransition>
  </TransitionGroup>
)

export default Transition
