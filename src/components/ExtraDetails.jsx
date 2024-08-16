import React from 'react';

function ExtraDetails({time, uv, humidity, aq, feelslike, ap}) {
    return (
        <div className="extra">
            <div>
              <h3>Time</h3>
              {time}
            </div>
            <div>
              <h3>UV</h3>
              {uv}
            </div>
            <div>
              <h3>Humid</h3>
              {humidity}%
            </div>
            <div>
              <h3>AQ</h3>
              {aq}
            </div>
            <div>
              <h3>FEELS LIKE</h3>
              {feelslike}&deg;
            </div>
            <div>
              <h3>Air Pressure</h3>
              {ap}
            </div>
          </div>
    );
}

export default ExtraDetails;