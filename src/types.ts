export type Unit = 'cm' | 'm' ;

export interface Conversion {
  from: Unit;
  to: Unit;
  factor: number;
}
