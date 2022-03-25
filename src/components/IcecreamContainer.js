
import React from 'react'
import { connect } from 'react-redux'
import { buyIcecream} from '../redux/index.js'

const IcecreamContainer = (props) => {

  return(
    <div>
      <h2>Number of Icecreams (By connect) - { props.number }</h2>
      <button onClick={ props.buyIcecream }>Buy Icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    number: state.icecream.number
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIcecream: () => {
      dispatch(buyIcecream())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (IcecreamContainer)
