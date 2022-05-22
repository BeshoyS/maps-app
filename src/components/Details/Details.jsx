import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import Pdf from "react-to-pdf";
import Button from "../Button/Button";

const Details = ({ summary, pdfRef }) => {
  const { totalDistance } = summary;
  const [rate, setRate] = useState(0);
  const [drivingHours, setDrivingHours] = useState(100);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    summary ? setLoading(false) : setLoading(true);
  }, [summary]);

  return (
    <div className="details">
      {loading ? (
        <FaSpinner className="loading icon-spin" />
      ) : totalDistance ? (
        <>
          {" "}
          <h2>Calculate your trip</h2>
          <p className="totalDistance">
            Distance : {(totalDistance / 1000).toFixed(2)} Km
          </p>
          <div className="costInps">
            <p>
              You can drive:{" "}
              <input
                type="number"
                inputMode="numeric"
                placeholder="100"
                value={drivingHours}
                className="costInp"
                onChange={(e) => setDrivingHours(e.target.value)}
              />{" "}
              Km/day
            </p>
            <p>
              Cost per Km: $
              <input
                type="number"
                inputMode="decimal"
                placeholder="0"
                value={rate}
                className="costInp"
                onChange={(e) => setRate(e.target.value)}
              />
              /Km
            </p>
          </div>
          <div className="costDetails">
            <p>
              Total costs of your trip is{" "}
              <span>${((totalDistance / 1000) * rate * 1.1).toFixed(2)}</span>
            </p>
            <p>
              You are able to arrive to the destination within{" "}
              <span>{Math.ceil(totalDistance / 1000 / drivingHours)} days</span>
            </p>
          </div>
          {/*Download the page as a pdf*/}
          <Pdf
            targetRef={pdfRef}
            filename="download.pdf"
            options={{ orientation: "landscape" }}
          >
            {({ toPdf }) => (
              <Button title="Download bdf" onClick={toPdf} customStyle="pdfBtn" />
            )}
          </Pdf>
        </>
      ) : (
        <h3 className="errMsg" data-testid="errMsg">No Route avaliable for your destination</h3>
      )}
    </div>
  );
};

export default Details;
