



import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/index.js'

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  // this container example comes with input to specify the number of cakes you want
  return(
    <div>
      <h2>Number of Cakes (By connect) - { props.number }</h2>
      <input onChange={e => setNumber(e.target.value)} value={number} />
      <button onClick={ () => props.buyCake(number) }>Buy {number} of Cakes</button>
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
    buyCake: (number) => {
      dispatch(buyCake(number))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (NewCakeContainer)
