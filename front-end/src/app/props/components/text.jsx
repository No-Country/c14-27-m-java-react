import React from "react";


function Text({ data }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>{data?.name}</h3>
          <small>Algun texto que describe a colinas mojadas </small>
      
          <p className="m-2 py-1">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Text;

