import { formatAsISO } from "./formatAsISO";

export const createUpdateCandPayload = (data) => ({
  firstName: data.firstName,
  middleName: data.middleName,
  lastName: data.lastName,
  gender: data.gender,
  nativeLanguage: data.nativeLanguage,
  birthDate: formatAsISO(data.birthDate),
  photoIDType: data.photoIDType,
  photoIDNumber: data.photoIDNumber,
  photoIDIssueDate: formatAsISO(data.photoIDIssueDate),
  email: data.email,
  address: data.address,
  addressLine2: data.addressLine2,
  countryOfResidence: data.countryOfResidence,
  stateOrTerritoryOrProvince: data.stateOrTerritoryOrProvince,
  townOrCity: data.townOrCity,
  postalCode: data.postalCode,
  landlineNumber: data.landlineNumber,
  mobileNumber: data.mobileNumber,
  password: data.password,
});
