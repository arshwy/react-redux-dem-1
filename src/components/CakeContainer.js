

import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/index.js'

const CakeContainer = (props) => {

  return(
    <div>
      <h2>Number of Cakes (By connect) - { props.number }</h2>
      <button onClick={ props.buyCake }>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    number: state.cake.number
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => {
      dispatch(buyCake())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)
