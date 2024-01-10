export type RowID = number;
export interface RowElement {
  firstName: string;
  lastName: string;
  role: string;
  id: RowID;
  age?: number;
}
