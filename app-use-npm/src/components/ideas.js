import React from "react";
import { getBored } from "../actions/funActions";
import { connect } from "react-redux";

const FunIdeas = props => {
  return (
    <div>
      <button onClick={props.getBored}>Click here for ideas!</button>
      <div>
        <h5>Fun activity idea: {props.activitySetup.activity}</h5>
        <h5>Number of people: {props.activitySetup.participants}</h5>
        <h5>How accessible is it?  {props.activitySetup.accessibility}</h5>
        <p>A factor describing how accessible an event may be to attend is defined with zero being the most easily accessed.<br /> 
        This range was created by <a href="https://www.boredapi.com/" style={{color: 'gold'}}>The Bored API</a></p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activitySetup: state.activitySetup,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getBored }
)(FunIdeas);


