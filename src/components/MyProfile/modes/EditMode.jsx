import React from "react"

const EditMode = ({candidate, handleInputChange, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="myprofile-form">
          <div className="myprofile-form-group">
          <label htmlFor="firstName" className="myprofile-label">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={candidate.firstName}
            onChange={handleInputChange}
            className="myprofile-input"
          />
        </div>
        <div className="myprofile-form-group">
          <label htmlFor="middleName" className="myprofile-label">
            Middle Name:
          </label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={candidate.middleName}
            onChange={handleInputChange}
            className="myprofile-input"
          />
        </div>
        <div className="myprofile-form-group">
          <label htmlFor="lastName" className="myprofile-label">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={candidate.lastName}
            onChange={handleInputChange}
            className="myprofile-input"
          />
        </div>
        <div className="myprofile-form-group">
          <label htmlFor="gender" className="myprofile-label">
            Gender:
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={candidate.gender}
            onChange={handleInputChange}
            className="myprofile-input"
          />
        </div>
        <div className="myprofile-form-group">
          <label htmlFor="nativeLanguage" className="myprofile-label">
            Native Language:
          </label>
          <input
            type="text"
            id="nativeLanguage"
            name="nativeLanguage"
            value={candidate.nativeLanguage}
            onChange={handleInputChange}
            className="myprofile-input"
          />
        </div>
        <div className="myprofile-form-group">
          <label htmlFor="birthDate" className="myprofile-label">
            Birthday:
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={candidate.birthDate}
            onChange={handleInputChange}
            className="myprofile-input"
          />
        </div>
        <div className="myprofile-form-group">
          <label htmlFor="photoIDType" className="myprofile-label">
            Photo ID type:
          </label>
          <input
            type="text"
            id="photoIDType"
            name="photoIDType"
            value={candidate.photoIDType}
            onChange={handleInputChange}
            className="myprofile-input"
          />
        </div>
        <div className="myprofile-form-group">
          <label htmlFor="photoIDNumber" className="myprofile-label">
            Photo ID number:
          </label>
          <input
            type="text"
            id="photoIDNumber"
            name="photoIDNumber"
            value={candidate.photoIDNumber}
            onChange={handleInputChange}
            className="myprofile-input"
          />
        </div>
        <div className="myprofile-form-group">
          <label htmlFor="photoIDIssueDate" className="myprofile-label">
            Photo ID Issue Date:
          </label>
          <input
            type="date"
            id="photoIDIssueDate"
            name="photoIDIssueDate"
            value={candidate.photoIDIssueDate}
            onChange={handleInputChange}
            className="myprofile-input"
          />
        </div>

        <div className="myprofile-form-group">
          <label htmlFor="address" className="myprofile-label">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={candidate.address}
            onChange={handleInputChange}
            className="myprofile-input"
          />
        </div>
        <div className="myprofile-form-group">
          <label htmlFor="addressLine2" className="myprofile-label">
            Address Line 2:
          </label>
          <input
            type="text"
            id="addressLine2"
            name="addressLine2"
            value={candidate.addressLine2}
            onChange={handleInputChange}
            className="myprofile-input"
          />
        </div>
        <div className="myprofile-form-group">
          <label htmlFor="countryOfResidence" className="myprofile-label">
            Country of Residence:
          </label>
          <input
            type="text"
            id="countryOfResidence"
            name="countryOfResidence"
            value={candidate.countryOfResidence}
            onChange={handleInputChange}
            className="myprofile-input"
          />
        </div>
        <div className="myprofile-form-group">
          <label htmlFor="stateOrTerritoryOrProvince" className="myprofile-label">
            State/Territory/Province:
          </label>
          <input
            type="text"
            id="stateOrTerritoryOrProvince"
            name="stateOrTerritoryOrProvince"
            value={candidate.stateOrTerritoryOrProvince}
            onChange={handleInputChange}
            className="myprofile-input"
          />
        </div>
        <div className="myprofile-form-group">
          <label htmlFor="townOrCity" className="myprofile-label">
            Town/City:
          </label>
          <input
            type="text"
            id="townOrCity"
            name="townOrCity"
            value={candidate.townOrCity}
            onChange={handleInputChange}
            className="myprofile-input"
          />
        </div>
        <div className="myprofile-form-group">
          <label htmlFor="postalCode" className="myprofile-label">
            Postal Code:
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={candidate.postalCode}
            onChange={handleInputChange}
            className="myprofile-input"
          />
        </div>
        <div className="myprofile-form-group">
          <label htmlFor="landlineNumber" className="myprofile-label">
            Landline Number:
          </label>
          <input
            type="text"
            id="landlineNumber"
            name="landlineNumber"
            value={candidate.landlineNumber}
            onChange={handleInputChange}
            className="myprofile-input"
          />
        </div>
        <div className="myprofile-form-group">
          <label htmlFor="mobileNumber" className="myprofile-label">
            Mobile Number:
          </label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={candidate.mobileNumber}
            onChange={handleInputChange}
            className="myprofile-input"
          />
        </div>
        <button type="submit" className="myprofile-button">
          Save
        </button>
        </form>
    )
}

export default EditMode;