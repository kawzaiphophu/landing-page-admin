export interface ISummary {
  totalProjects: number;
  totalCost: number;
  totalPrice: number;
  totalProfit: number;
}

export interface ISummaryYear {
  month: string;
  sales: number;
  profit: number;
  salesLastYear: number;
  profitLastYear: number;
}

export interface ILateProject {
  projectId:      number;
  customerId:     number;
  projectName:    string;
  projectScope:   string;
  projectStatus:  string;
  status:         string;
  projectWaranty: string;
  projectMa:      string;
  projectType:    string;
  projectDueDate: Date;
  projectPrice:   string;
  projectCost:    string;
  projectProfit:  string;
  createdAt:      Date;
  updatedAt:      Date;
  createdBy:      string;
  updatedBy:      string;
  late:           boolean;
  diffDate:       number;
}

export interface IMaProject {
  projectId:               number;
  projectName:             string;
  projectStartWarantyDate: Date;
  projectMa:               number;
  projectMaPerYear:        number;
  currentMa:               number;
  dueMaDate:               Date;
  diffDate:              number;
  expiredDate:             Date;
}

export interface Supplier {
  id:          number;
  name:        string;
  email:       string;
  tel:         string;
  address:     string;
  country:     string;
  province:    string;
  district:    string;
  subDistrict: string;
  zipcode:     string;
  status:      string;
  createdAt:   Date;
  update_by:   null;
  update_at:   null;
}

export interface IOrderWaranty {
  orderId:               number;
  projectId:             number;
  supplierId:            number;
  orderName:             string;
  orderWaranty:          string;
  orderStatus:           string;
  orderDueDate:          Date;
  orderStartWarantyDate: Date;
  remark:                string;
  orderCost:             string;
  createdAt:             Date;
  updatedAt:             Date;
  createdBy:             string;
  updatedBy:             string;
  endDateWaranty:        Date;
  remainingWarranty:     number;
  supplier:              Supplier;
}
export interface IFileMissing {
  projectId:               number;
  customerId:              number;
  projectName:             string;
  projectScope:            string;
  projectStatus:           string;
  status:                  string;
  projectWaranty:          string;
  projectStartWarantyDate: Date | null;
  projectMa:               number;
  projectMaPerYear:        number;
  currentMa:               number;
  projectType:             string;
  projectDueDate:          Date;
  projectPrice:            string;
  projectCost:             string;
  projectProfit:           string;
  createdAt:               Date;
  updatedAt:               Date;
  createdBy:               string;
  updatedBy:               string;
  currentPeriod:           number;
  periods:                 Period[];
  periodFileMissing:       number[];
}

export interface Period {
  id:         number;
  detail:     string;
  status:     string;
  paymentDue: string;
  periodDue:  string;
  amount:     number;
  receive:    number;
  isPaid:     boolean;
  documents:  Document[];
}

export interface Document {
  id:        number;
  filePath:  string;
  docType:   string;
  docPeriod: string;
  docNo:     string;
}
