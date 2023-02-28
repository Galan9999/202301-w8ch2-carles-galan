interface Client {
  dni: string;
  name: string;
  lastNames: string;
  averageBalance: number;
  maximumBalance: number;
  domiciledPayroll: true;
  homePhone: number;
  mobilePhone: number;
}
export type Clients = Client[];
