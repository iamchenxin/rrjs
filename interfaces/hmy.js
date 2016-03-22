 /* HMy */
 /*
declare module hmy{
  declare type HMy = {
    doSome(txt:string): string;
    hello(id:number): string;
  }
  declare var ts: string;
  declare var ds: string;

  declare function doSome(txt:string): string;
  declare function hello(id:number): string;
//  declare var exports: HMy;
}
*/
declare module hmy2{
  declare type HMy = {
    doSome(txt:string): string;
    hello(id:number): string;
    ts: string;
    ds: string;
    es: number;
  }
  declare var exports: HMy;
}
