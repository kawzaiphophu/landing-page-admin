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
}

export interface Order {
  projectId?: number;
  orderId?: number;
  supplierId: number | null;
  orderName: string;
  orderStatus: string;
  orderDueDate: string;
  orderWaranty: string;
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
  filePath?: string;
}
