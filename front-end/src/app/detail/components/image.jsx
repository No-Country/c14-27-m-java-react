import React from 'react';

const Image = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card h-100">
            <img src="https://images.adsttc.com/media/images/5954/c1f4/b22e/38be/e300/0100/medium_jpg/2015_DEPTO_JSMH_SMA_PHOTO_by_Paul_Rivera__03.jpg?1498726896" className="img-fluid h-100 w-100" alt="..." />
          </div>
        </div>
        <div className="col-md-8">
          <div className="card w-50">
            <img src="https://images.adsttc.com/media/images/5954/c1f4/b22e/38be/e300/0100/medium_jpg/2015_DEPTO_JSMH_SMA_PHOTO_by_Paul_Rivera__03.jpg?1498726896" className="img-fluid" alt="..." />
          </div>
          <div className="card w-50 mt-3">
            <img src="https://images.adsttc.com/media/images/5954/c1f4/b22e/38be/e300/0100/medium_jpg/2015_DEPTO_JSMH_SMA_PHOTO_by_Paul_Rivera__03.jpg?1498726896" className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
