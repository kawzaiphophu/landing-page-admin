export interface IProject {
  projectId?: number;
  customerId?: number;
  projectName: string;
  projectScope: string;
  projectStatus: string;
  projectType: string;
  projectWaranty: string;
  projectMa: number;
  projectMaPerYear: number;
  projectDueDate: string;
  projectPrice: number;
  projectCost: number;
  projectProfit: number;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  orders: Order[];
  documents: Document[];
  documentsMa: Document[];
  projectStartWarantyDate?:string
  expiredDate?:string
  currentMa?:string
  dueMaDate?:string
  currentPeriod?:number
  periods:Period[]
}

export interface Order {
  projectId?: number;
  orderId?: number;
  supplierId: number | null;
  orderName: string;
  orderStatus: string;
  orderStatusOther: string;
  orderDueDate: string;
  orderWaranty: string;
  orderStartWarantyDate?: string;
  remark: string;
  orderCost: number;
  documents: Document[];
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
}

// export interface File {
//   id: number;
//   filePath: string;
//   fileName: string;
//   fileSize: number;
// }

export interface Document {
  docPeriod: string;
  docNo: string;
  docType: string;
  filePath: string;
}

interface Period {
  detail:string
  status:string
  statusOther:string
  periodDue:string
  paymentDue:string
  amount:number
  receive:number
  isPaid:boolean
  documents: Document[];
}