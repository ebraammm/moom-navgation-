import React, { useState } from 'react';

const RoroShipForm = () => {
  const [locations, setLocations] = useState([{ from: '', to: '', isOpen: true }]);
  const [cargoes, setCargoes] = useState([{ commodity: '', quantity: 1, length: '', width: '', height: '', weight: '', isOpen: true }]);

  const addLocation = () => setLocations([...locations, { from: '', to: '', isOpen: true }]);
  const addCargo = () => setCargoes([...cargoes, { commodity: '', quantity: 1, length: '', width: '', height: '', weight: '', isOpen: true }]);

  const removeLocation = (index) => setLocations(locations.filter((_, i) => i !== index));
  const removeCargo = (index) => setCargoes(cargoes.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Process form data here
  };

  return (
    <div className="container-xxl py-5"> 
      <div className="container py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-secondary text-uppercase">Service</h6>
          <h1 className="mb-5">ROLL-ON ROLL-OFF (RORO SHIP)</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Route Details */}
          {locations.map((location, index) => (
            <div key={index} className="mb-3">
              <label htmlFor={`fromLocation${index}`} className="form-label">From (City, Country/Region):</label>
              <input type="text" id={`fromLocation${index}`} className="form-control mb-2" placeholder="Enter origin" />
              <label htmlFor={`toLocation${index}`} className="form-label">To (City, Country/Region):</label>
              <input type="text" id={`toLocation${index}`} className="form-control mb-2" placeholder="Enter destination" />
              {index !== 0 && (
                <button type="button" className="btn btn-danger mb-2" onClick={() => removeLocation(index)}>Remove Route</button>
              )}
            </div>
          ))}
          <button type="button" className="btn btn-secondary mb-3" onClick={addLocation}>Add Additional To and From Location</button>

          {/* Cargo Details */}
          {cargoes.map((cargo, index) => (
            <div key={index} className="mb-3">
              <label htmlFor={`commodity${index}`} className="form-label">Commodity:</label>
              <input type="text" className="form-control mb-2" id={`commodity${index}`} placeholder="Type the commodity" />
              <div className="input-group mb-2">
                <label className="input-group-text" htmlFor={`quantity${index}`}>Cargo quantity:</label>
                <input type="number" id={`quantity${index}`} className="form-control" defaultValue={1} />
              </div>
              <div className="row g-3 mb-2">
                <div className="col">
                  <label htmlFor={`cargoLength${index}`} className="form-label">Cargo length (cm):</label>
                  <input type="number" id={`cargoLength${index}`} className="form-control" />
                </div>
                <div className="col">
                  <label htmlFor={`cargoWidth${index}`} className="form-label">Cargo width (cm):</label>
                  <input type="number" id={`cargoWidth${index}`} className="form-control" />
                </div>
                <div className="col">
                  <label htmlFor={`cargoHeight${index}`} className="form-label">Cargo height (cm):</label>
                  <input type="number" id={`cargoHeight${index}`} className="form-control" />
                </div>
                <div className="col">
                  <label htmlFor={`cargoWeight${index}`} className="form-label">Weight of cargo (kg):</label>
                  <input type="number" id={`cargoWeight${index}`} className="form-control" />
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor={`supportingFiles${index}`} className="form-label">Supporting Files (Optional):</label>
                <input type="file" className="form-control" id={`supportingFiles${index}`} multiple />
                <div className="form-text">Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel, PowerPoint.</div>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id={`cargoUpload${index}`} />
                <label className="form-check-label" htmlFor={`cargoUpload${index}`}>
                  I wish to upload cargo picture with lifting points
                </label>
              </div>
              {index !== 0 && (
                <button type="button" className="btn btn-danger mb-2" onClick={() => removeCargo(index)}>Remove Cargo</button>
              )}
            </div>
          ))}
          <button type="button" className="btn btn-secondary mb-3" onClick={addCargo}>+ Enter the commodity</button>

          {/* Dates */}
          <div className="mb-3">
            <label htmlFor="effectiveDate" className="form-label">Effective Date:</label>
            <input type="date" id="effectiveDate" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="expiryDate" className="form-label">Expiry Date:</label>
            <input type="date" id="expiryDate" className="form-control" />
          </div>

          {/* Service Contract */}
          <div className="mb-3">
            <label htmlFor="serviceContract" className="form-label">Service contract (Optional):</label>
            <input type="text" id="serviceContract" className="form-control" placeholder="Enter service contract number" />
          </div>

          {/* Value Added Services */}
          <div className="mb-3">
            <label htmlFor="valueAddedService" className="form-label">Value Added Services:</label>
            {/* Include options for value added services */}
          </div>

          {/* Company Details */}
          <div className="mb-3">
            <label htmlFor="companyName" className="form-label">Company Name:</label>
            <input type="text" id="companyName" className="form-control mb-2" placeholder="Enter company name" />
            <label htmlFor="cityCountryRegion" className="form-label">City, Country/Region:</label>
            <input type="text" id="cityCountryRegion" className="form-control mb-2" placeholder="Enter city, country/region" />
            <label htmlFor="companyEmail" className="form-label">Company Email:</label>
            <input type="email" id="companyEmail" className="form-control mb-2" placeholder="Enter company email" />
            <label htmlFor="additionalEmail" className="form-label">Add Additional Email Address (Optional):</label>
            <input type="email" id="additionalEmail" className="form-control" placeholder="Enter additional email" />
          </div>

          {/* Important Information */}
          <div className="alert alert-info" role="alert">
            <h4>Important Information</h4>
            <ul>
              <li>Please do not enter personal or financial information, such as phone numbers, credit card details, or debit card details anywhere in your request.</li>
              <li>Please note that when you submit your quote request, an automated confirmation e-mail will be sent to you containing the details you entered in this form.</li>
            </ul>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit Request</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoroShipForm;
