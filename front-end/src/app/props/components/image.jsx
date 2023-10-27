import React from 'react';

const Image = ({ data }) => {
  console.log('dataImg:', data)
  const [firstImage, secondImage, thirdImage] = data.slice(0, 3);
  console.log('firstImage:',firstImage)
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 ">
          <div className="card h-100 justify-content-center">
            <img src={firstImage?.route} className="img-fluid w-100" alt="..." />
          </div>
        </div>
        {secondImage && thirdImage && (
        <div className="col-md-3 mb-3">
          <div className="card mb-3">
            <img src={secondImage?.route} className="img-fluid w-100" alt="..." />
          </div>
          <div className="card">
            <img src={thirdImage?.route} className="img-fluid w-100" alt="..." />
          </div>
        </div>
)}
      </div>
    </div>
  );
};

export default Image;
