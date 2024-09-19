import React, { useState } from 'react';

const InlandServicesForm = () => {
  const [locations, setLocations] = useState([{ from: '', to: '' }]);
  const [containerDetails, setContainerDetails] = useState([{ typeAndSize: '', numContainers: '', weightPerContainer: '' }]);
  const [cargoes, setCargoes] = useState([{}]);

  const addLocation = () => setLocations([...locations, { from: '', to: '' }]);
  const addCargo = () => setCargoes([...cargoes, {}]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Process form data here
  };

  return (
    <div className="container-xxl py-5"> 
      <div className="container py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-secondary text-uppercase">Service</h6>
          <h1 className="mb-5">INLAND CONTAINER TRANSPORTATION</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Route Details */}
          {locations.map((location, index) => (
            <div key={index} className="mb-3">
              <label htmlFor={`fromLocation${index}`} className="form-label">From (City, Country/Region):</label>
              <input type="text" id={`fromLocation${index}`} className="form-control mb-2" placeholder="Enter origin" />
              <label htmlFor={`toLocation${index}`} className="form-label">To (City, Country/Region):</label>
              <input type="text" id={`toLocation${index}`} className="form-control" placeholder="Enter destination" />
            </div>
          ))}
          <button type="button" className="btn btn-secondary mb-3" onClick={addLocation}>Add Additional To and From Location</button>

          {/* Container Details */}
          {containerDetails.map((container, index) => (
            <div key={index} className="mb-3">
              <label htmlFor={`containerTypeAndSize${index}`} className="form-label">Container Type and Size:</label>
              <input type="text" id={`containerTypeAndSize${index}`} className="form-control mb-2" placeholder="Enter container type and size" />
              <label htmlFor={`numContainers${index}`} className="form-label">Number of Containers:</label>
              <input type="number" id={`numContainers${index}`} className="form-control mb-2" />
              <label htmlFor={`weightPerContainer${index}`} className="form-label">Weight per Container (kg):</label>
              <input type="number" id={`weightPerContainer${index}`} className="form-control" />
            </div>
          ))}

          {/* Commodity Details */}
          {cargoes.map((cargo, index) => (
            <div key={index} className="mb-4">
              <label htmlFor={`commodity${index}`} className="form-label">Commodity:</label>
              <input type="text" id={`commodity${index}`} className="form-control mb-2" placeholder="Type the commodity" />
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id={`dangerousCargo${index}`} />
                <label className="form-check-label" htmlFor={`dangerousCargo${index}`}>
                  This cargo is considered dangerous
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id={`temperatureControl${index}`} />
                <label className="form-check-label" htmlFor={`temperatureControl${index}`}>
                  This Cargo requires temperature control
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id={`oversizedCargo${index}`} />
                <label className="form-check-label" htmlFor={`oversizedCargo${index}`}>
                  This cargo is oversized
                </label>
              </div>
              <label htmlFor={`supportingFiles${index}`} className="form-label">Supporting Files (Optional):</label>
              <input type="file" id={`supportingFiles${index}`} className="form-control mb-2" multiple />
              <small className="form-text">Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel, and PowerPoint.</small>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id={`cargoUpload${index}`} />
                <label className="form-check-label" htmlFor={`cargoUpload${index}`}>
                  I wish to upload cargo picture with lifting points
                </label>
              </div>
              <label htmlFor={`additionalInfo${index}`} className="form-label">Additional Information:</label>
              <textarea id={`additionalInfo${index}`} className="form-control mb-3" rows="3" placeholder="Additional Information"></textarea>
            </div>
          ))}
          <button type="button" className="btn btn-secondary mb-3" onClick={addCargo}>+ Add Additional Container / Cargo Details</button>

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
              <li>For quote requests with long-term validity, please contact us.</li>
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

export default InlandServicesForm;
