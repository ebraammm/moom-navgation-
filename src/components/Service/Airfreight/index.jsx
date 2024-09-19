import React, { useState } from 'react';

const CommodityDetail = ({ index, onRemove }) => {
  const [showCargoUpload, setShowCargoUpload] = useState(false);

  const handleCargoUploadChange = () => setShowCargoUpload(!showCargoUpload);

  return (
    <div className="commodity-detail mb-4">
      <h5>Commodity Details #{index + 1}</h5>
      <div className="mb-3">
        <label htmlFor={`commodity${index}`}>Commodity</label>
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
      <div className="row">
        <div className="col">
          <input type="number" className="form-control" placeholder="Cargo Quantity" />
        </div>
        <div className="col">
          <input type="number" className="form-control" placeholder="Length (cm)" />
        </div>
        {/* Cargo Width */}
  <div className="col">
    <input type="number" className="form-control" placeholder="Width (cm)" />
  </div>
  {/* Cargo Height */}
  <div className="col">
    <input type="number" className="form-control" placeholder="Height (cm)" />
  </div>
  {/* Cargo Weight */}
  <div className="col">
    <input type="number" className="form-control" placeholder="Weight (Kg)" />
  </div>
      </div>
      <div className="mb-3">
        <label htmlFor={`supportingFiles${index}`}>Supporting Files (Optional)</label>
        <input type="file" className="form-control" id={`supportingFiles${index}`} multiple />
        <small>Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel, PowerPoint.</small>
      </div>
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id={`cargoUpload${index}`} onChange={handleCargoUploadChange} />
        <label className="form-check-label" htmlFor={`cargoUpload${index}`}>
          I wish to upload cargo picture with lifting points
        </label>
        {showCargoUpload && (
          <input type="file" className="form-control mt-2" id={`cargoPicture${index}`} />
        )}
      </div>
      <div className="mb-3">
        <textarea className="form-control" id={`additionalInfo${index}`} rows="3" placeholder="Additional Information"></textarea>
      </div>
      <button type="button" className="btn btn-danger" onClick={() => onRemove(index)}>Remove This Commodity</button>
    </div>
  );
};

const AirFreightForm = () => {
  const [commodities, setCommodities] = useState([{}]);

  const addCommodity = () => setCommodities([...commodities, {}]);
  const removeCommodity = (index) => setCommodities(commodities.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    console.log('Form submitted');
  };

  return (
<div class="container-xxl py-5"> 
    <div className="container py-5">

      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 class="text-secondary text-uppercase">Service</h6>
                        <h1 class="mb-5">Air freight</h1>
                    </div>
      <form onSubmit={handleSubmit}>
        {/* Route Details */}
<div className="row mb-3">
  <div className="col">
    <label htmlFor="fromLocation" className="form-label">From (City, Country/Region):</label>
    <input type="text" id="fromLocation" className="form-control" placeholder="Enter origin" />
  </div>
  <div className="col">
    <label htmlFor="toLocation" className="form-label">To (City, Country/Region):</label>
    <input type="text" id="toLocation" className="form-control" placeholder="Enter destination" />
  </div>
</div>

{/* Service Mode */}
<div className="row mb-3">
  <div className="col">
    <label className="form-label">Service Mode From:</label>
    <div className="form-check">
      <input type="radio" id="serviceModeFromCY" name="serviceModeFrom" className="form-check-input" value="CY" />
      <label htmlFor="serviceModeFromCY" className="form-check-label">Container Yard (CY)</label>
    </div>
    <div className="form-check">
      <input type="radio" id="serviceModeFromSD" name="serviceModeFrom" className="form-check-input" value="SD" />
      <label htmlFor="serviceModeFromSD" className="form-check-label">Store Door (SD)</label>
    </div>
  </div>
  <div className="col">
    <label className="form-label">Service Mode To:</label>
    <div className="form-check">
      <input type="radio" id="serviceModeToCY" name="serviceModeTo" className="form-check-input" value="CY" />
      <label htmlFor="serviceModeToCY" className="form-check-label">Container Yard (CY)</label>
    </div>
    <div className="form-check">
      <input type="radio" id="serviceModeToSD" name="serviceModeTo" className="form-check-input" value="SD" />
      <label htmlFor="serviceModeToSD" className="form-check-label">Store Door (SD)</label>
    </div>
  </div>
</div>

{/* Ready to Load */}
<div className="mb-3">
  <label htmlFor="readyToLoadDate" className="form-label">Ready to Load Date:</label>
  <input type="date" id="readyToLoadDate" className="form-control" />
</div>

{/* Transportation By */}
<div className="mb-3">
  <label className="form-label">Transportation By:</label>
  <div className="form-check">
    <input type="radio" id="standardCargo" name="transportationBy" className="form-check-input" value="Standard Cargo" />
    <label htmlFor="standardCargo" className="form-check-label">Standard Cargo</label>
  </div>
  <div className="form-check">
    <input type="radio" id="uldContainer" name="transportationBy" className="form-check-input" value="ULD Container" />
    <label htmlFor="uldContainer" className="form-check-label">ULD Container</label>
  </div>
</div>

{/* Recommended Services */}
<div className="mb-3">
  <div className="form-check">
    <input type="checkbox" id="exportCustoms" className="form-check-input" />
    <label htmlFor="exportCustoms" className="form-check-label">Standard Export Customs Clearance</label>
  </div>
  <div className="form-check">
    <input type="checkbox" id="importCustoms" className="form-check-input" />
    <label htmlFor="importCustoms" className="form-check-label">Standard Import Customs Clearance</label>
  </div>
</div>

{/* Company Details */}
<div className="row mb-3">
  <div className="col">
    <input type="text" id="companyName" className="form-control" placeholder="Company Name" />
  </div>
  <div className="col">
    <input type="text" id="cityCountryRegion" className="form-control" placeholder="City, Country/Region" />
  </div>
</div>
<div className="mb-3">
  <input type="email" id="companyEmail" className="form-control" placeholder="Company Email" />
</div>
<div className="mb-3">
  <input type="email" id="additionalEmail" className="form-control" placeholder="Add Additional Email Address (Optional)" />
</div>


        {commodities.map((_, index) => (
          <CommodityDetail key={index} index={index} onRemove={removeCommodity} />
        ))}
        <button type="button" className="btn btn-secondary" onClick={addCommodity}>Add Another Commodity</button>

        {/* Company Details */}
<div className="mb-3">
  <h4>Company Details</h4>
  <div className="mb-3">
    <label htmlFor="companyName" className="form-label">Company Name:</label>
    <input type="text" id="companyName" className="form-control" placeholder="Enter company name" />
  </div>
  <div className="mb-3">
    <label htmlFor="companyLocation" className="form-label">City, Country/Region:</label>
    <input type="text" id="companyLocation" className="form-control" placeholder="Enter city, country/region" />
  </div>
  <div className="mb-3">
    <label htmlFor="companyEmail" className="form-label">Company Email:</label>
    <input type="email" id="companyEmail" className="form-control" placeholder="Enter company email" />
  </div>
  <div className="mb-3">
    <label htmlFor="additionalEmail" className="form-label">Add Additional Email Address (Optional):</label>
    <input type="email" id="additionalEmail" className="form-control" placeholder="Enter additional email" />
  </div>
</div>

{/* Recommended Services */}
<div className="mb-3">
  <h4>Recommended Services</h4>
  <div className="form-check">
    <input type="checkbox" id="exportCustoms" className="form-check-input" />
    <label htmlFor="exportCustoms" className="form-check-label">Standard Export Customs Clearance</label>
  </div>
  <div className="form-check">
    <input type="checkbox" id="importCustoms" className="form-check-input" />
    <label htmlFor="importCustoms" className="form-check-label">Standard Import Customs Clearance</label>
  </div>
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


        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary">Submit Request</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AirFreightForm;
