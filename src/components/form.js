import React from "react";

const Form = props => {
  return (
    <div className="container">
      <form onSubmit={props.showWeather}>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
              autoComplete="off"
            />
          </div>
          <div className="col-md-12 mt-md-0 mt-2 text-md-left ">
            <button className="btn primary_btn">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};


export default Form;