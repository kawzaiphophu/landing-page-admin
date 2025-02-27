export interface ISupplier {
  name: string;
  nameEn: string;
  email: string;
  tel: string;
  address: string;
  country: string;
  province: string;
  district: string;
  subDistrict: string;
  zipcode: string;
  createdAt?: Date;
  contactPersons: ContactPerson[];
  id?: number;
  status?: string;
  branch:string
  taxNumber:string;
}

export interface ContactPerson {
  name: string;
  tel: string;
  role: string;
  id?: number;
  email:string
}
