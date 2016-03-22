/**
 * @flow
 * @typechecks
 */
 /* HMy */

import React from 'hmy';
//import type {React} from 'hmy';

type subTS = {
  a:string;
  b:string;
};

type TS = {
  Children: any;
  DOM: any;
  PropTypes: ReactPropTypes;
  version: string;

  initializeTouchEvents(shouldUseTouch: boolean): void;

  cloneElement<T> (
    element: subTS,
    attributes: T,
    children?: any
  ): subTS;


  createElement<T>(
    name: subTS,
    attributes: T,
    children?: any
  ): subTS;
};

import dns from 'dns';

function ts(){

  //const t:TS ={a:'22',b:1,c:2};


  /*
  const aa = f.es;
  var ts = f.ts+'addas';
  f.hello(1);
  const a = f.doSome('1')
  console.log('aa:='+a);
  */
}

ts();
