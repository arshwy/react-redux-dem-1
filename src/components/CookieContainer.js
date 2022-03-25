

import React from 'react'
import { connect } from 'react-redux'
import { buyCookie } from '../redux/index.js'

const CookieContainer = (props) => {
  return(
    <div>
      <h2>Number of Cookies (By connect) - { props.number }</h2>
      <button onClick={ props.buyCookie }>Buy Cookie</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    number: state.cookie.number
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCookie: () => {
      dispatch(buyCookie())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (CookieContainer)
