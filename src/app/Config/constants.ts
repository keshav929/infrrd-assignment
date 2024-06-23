export type Employee = {
    id?: string;
    name: string;
    email: string;
    companyName: string;
    contactNumber: string;
    designation: string;
    dateOfJoining?: string;
    experience?: string;
    avatar: string;
}

export const DesignationConfigValues = [
    {id: '1', value: 'Software Developer' },
    {id: '2', value: 'Senior Software Developer' },
    {id: '3', value: 'Quality Assurance' },
    {id: '4', value: 'Technical Lead' },
    {id: '5', value: 'Manager' }
] 

export const emailValidationPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const contactNumberPattern = "^[-+()0-9]{13}$";

export const localStorageIdentifierLabel = 'employees';

