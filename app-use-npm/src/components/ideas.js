import React from "react";
import { getBored } from "../actions/funActions";
import { connect } from "react-redux";

const FunIdeas = props => {
  return (
    <div>
      <button onClick={props.getBored}>Click here for ideas!</button>
      <div>
        <h5>Fun activity idea: &nbsp; {props.activitySetup.activity}</h5>
        <h5>Number of people: &nbsp; {props.activitySetup.participants}</h5>
        <h5>How accessible is it? &nbsp; {props.activitySetup.accessibility}</h5>
        <p>The number describing how accessible an experience may be is defined with zero being the most easily accessed.<br /> 
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


