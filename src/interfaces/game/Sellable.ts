export interface Sellable {
  type: "sellable";
  name: string;
  description: Array<string>;
  value: number;
}
