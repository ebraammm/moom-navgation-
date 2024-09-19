import React, { useState } from 'react';

const CargoDetail = ({ index, onRemove }) => {
  const [showCargoUpload, setShowCargoUpload] = useState(false);

  const handleCargoUploadChange = () => setShowCargoUpload(!showCargoUpload);

  return (
    <div className={`cargo-detail mb-4 ${index !== 0 ? 'border-top pt-4' : ''}`}>
      <div className="mb-3">
        <label htmlFor={`commodity${index}`} className="form-label">Commodity:</label>
        <input type="text" className="form-control" id={`commodity${index}`} placeholder="Type the commodity" />
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id={`temperatureControl${index}`} />
          <label className="form-check-label" htmlFor={`temperatureControl${index}`}>
            This Cargo requires temperature control
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id={`dangerousCargo${index}`} />
          <label className="form-check-label" htmlFor={`dangerousCargo${index}`}>
            This cargo is considered dangerous
          </label>
        </div>
      </div>
      <div className="row g-3 mb-3">
        {/* Quantity, Dimensions and Weight input fields */}
      </div>
      <div className="mb-3">
        <label htmlFor={`supportingFiles${index}`} className="form-label">Supporting Files (Optional):</label>
        <input type="file" className="form-control" id={`supportingFiles${index}`} multiple />
        <div className="form-text">Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel, PowerPoint.</div>
      </div>
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id={`cargoUpload${index}`} onChange={handleCargoUploadChange} />
        <label className="form-check-label" htmlFor={`cargoUpload${index}`}>
          I wish to upload cargo picture with lifting points
        </label>
      </div>
      {showCargoUpload && (
        <div className="mb-3">
          <label htmlFor={`cargoPicture${index}`} className="form-label">Cargo Picture with Lifting Points:</label>
          <input type="file" className="form-control" id={`cargoPicture${index}`} />
        </div>
      )}
      <div className="mb-3">
        <textarea className="form-control" id={`additionalInfo${index}`} rows="3" placeholder="Additional Information"></textarea>
      </div>
      {index !== 0 && (
        <button type="button" className="btn btn-danger" onClick={() => onRemove(index)}>Remove This Cargo</button>
      )}
    </div>
  );
};

const InlandServicesForm = () => {
  const [cargoes, setCargoes] = useState([{}]);

  const addCargo = () => setCargoes([...cargoes, {}]);
  const removeCargo = (index) => setCargoes(cargoes.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Process form data here
  };

  return (
    <div class="container-xxl py-5"> 
    <div className="container py-5">

      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 class="text-secondary text-uppercase">Service</h6>
                        <h1 class="mb-5">INLAND SERVICES</h1>
                    </div>
      <form onSubmit={handleSubmit}>
        {/* Route Details */}
        <div className="mb-3">
          <label htmlFor="fromLocation" className="form-label">From (City, Country/Region):</label>
          <input type="text" id="fromLocation" className="form-control" placeholder="Enter origin" />
        </div>
        <div className="mb-3">
          <label htmlFor="toLocation" className="form-label">To (City, Country/Region):</label>
          <input type="text" id="toLocation" className="form-control" placeholder="Enter destination" />
        </div>
        {/* ...other route details... */}

        {/* Date */}
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Select Date:</label>
          <input type="date" id="date" className="form-control" />
        </div>

        {/* Cargo Details */}
        {cargoes.map((cargo, index) => (
          <CargoDetail key={index} index={index} onRemove={removeCargo} />
        ))}
        <button type="button" className="btn btn-secondary" onClick={addCargo}>Add Additional Cargo Details</button>
        {/* Value Added Service */}
        <div className="mb-3">
         
        <div className="form-check">
        <input className="form-check-input" type="checkbox" id="inlandContainerTransportation" />
         <label className="form-check-label" htmlFor="inlandContainerTransportation">
          Inland Container Transportation
        </label>
         </div>
        </div>


        {/* Company Details */}
        {/* ...companydetails fields... */}
        <div className="mb-3">
      <label htmlFor="companyName" className="form-label">Company Name:</label>
      <input type="text" id="companyName" className="form-control" placeholder="Enter company name" />
    </div>
    <div className="mb-3">
      <label htmlFor="cityCountryRegion" className="form-label">City, Country/Region:</label>
      <input type="text" id="cityCountryRegion" className="form-control" placeholder="Enter city, country/region" />
    </div>
    <div className="mb-3">
      <label htmlFor="companyEmail" className="form-label">Company Email:</label>
      <input type="email" id="companyEmail" className="form-control" placeholder="Enter company email" />
    </div>
    <div className="mb-3">
      <label htmlFor="additionalEmail" className="form-label">Add Additional Email Address (Optional):</label>
      <input type="email" id="additionalEmail" className="form-control" placeholder="Enter additional email" />
    </div>

    {/* Value Added Service */}
    <div className="mb-3">
      <label htmlFor="valueAddedService" className="form-label">Value Added Service:</label>
      {/* Include options for value added services */}
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
    <div className="text-center">
      <button type="submit" className="btn btn-primary">Submit Request</button>
    </div>
  </form>
</div>
</div>
);
};

export default InlandServicesForm;
