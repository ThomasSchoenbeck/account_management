/* tslint:disable */


export type examples__JSON = any;

export interface Query {
  employee?: Employee | null; 
  company?: Company | null; 
  user?: User | null; 
  team?: Team | null; 
  project?: Project | null; 
  allCompanies: Company[]; 
  allUsers: User[]; 
  allTeams: Team[]; 
  allProjects: Project[]; 
}

export interface Employee {
  firstName?: string | null; 
  lastName?: string | null; 
  address?: string | null; 
  subordinates: Employee[]; 
  company?: Company | null; 
}

export interface Company {
  name?: string | null; 
  industry?: string | null; 
  employees: Employee[]; 
}

export interface User {
  dblegiud?: string | null; 
  firstName?: string | null; 
  lastName?: string | null; 
  email?: string | null; 
}

export interface Team {
  name?: string | null; 
  projects: Project[]; 
}

export interface Project {
  name?: string | null; 
  key?: string | null; 
  description?: string | null; 
}

export interface fake__options {
  useFullAddress?: boolean | null; /* Only for &#x60;type: streetAddress&#x60; */
  minMoney?: number | null; /* Only for type &#x60;money&#x60; */
  maxMoney?: number | null; /* Only for type &#x60;money&#x60; */
  imageWidth?: number | null; /* Only for type &#x60;imageUrl&#x60; */
  imageHeight?: number | null; /* Only for type &#x60;imageUrl&#x60; */
  imageCategory?: fake__imageCategory | null; /* Only for type &#x60;imageUrl&#x60; */
  randomizeImageUrl?: boolean | null; /* Only for type &#x60;imageUrl&#x60; */
  emailProvider?: string | null; /* Only for type &#x60;email&#x60; */
  passwordLength?: number | null; /* Only for type &#x60;password&#x60; */
  loremSize?: fake__loremSize | null; /* Only for type &#x60;lorem&#x60; */
}
export interface EmployeeQueryArgs {
  id?: string | null; 
}
export interface CompanyQueryArgs {
  id?: string | null; 
}
export interface UserQueryArgs {
  id?: string | null; 
}
export interface TeamQueryArgs {
  id?: string | null; 
}
export interface ProjectQueryArgs {
  id?: string | null; 
}

export type fake__Locale = "az" | "cz" | "de" | "de_AT" | "de_CH" | "en" | "en_AU" | "en_BORK" | "en_CA" | "en_GB" | "en_IE" | "en_IND" | "en_US" | "en_au_ocker" | "es" | "es_MX" | "fa" | "fr" | "fr_CA" | "ge" | "id_ID" | "it" | "ja" | "ko" | "nb_NO" | "nep" | "nl" | "pl" | "pt_BR" | "ru" | "sk" | "sv" | "tr" | "uk" | "vi" | "zh_CN" | "zh_TW";


export type fake__Types = "zipCode" | "city" | "streetName" | "streetAddress" | "secondaryAddress" | "county" | "country" | "countryCode" | "state" | "stateAbbr" | "latitude" | "longitude" | "colorName" | "productCategory" | "productName" | "money" | "productMaterial" | "product" | "companyName" | "companyCatchPhrase" | "companyBS" | "dbColumn" | "dbType" | "dbCollation" | "dbEngine" | "pastDate" | "futureDate" | "recentDate" | "financeAccountName" | "financeTransactionType" | "currencyCode" | "currencyName" | "currencySymbol" | "bitcoinAddress" | "internationalBankAccountNumber" | "bankIdentifierCode" | "hackerAbbr" | "hackerPhrase" | "imageUrl" | "avatarUrl" | "email" | "url" | "domainName" | "ipv4Address" | "ipv6Address" | "userAgent" | "colorHex" | "macAddress" | "password" | "lorem" | "firstName" | "lastName" | "fullName" | "jobTitle" | "uuid" | "word" | "words" | "locale" | "filename" | "mimeType" | "fileExtension" | "semver";


export type fake__imageCategory = "abstract" | "animals" | "business" | "cats" | "city" | "food" | "nightlife" | "fashion" | "people" | "nature" | "sports" | "technics" | "transport";


export type fake__loremSize = "word" | "words" | "sentence" | "sentences" | "paragraph" | "paragraphs";

