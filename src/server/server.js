/**
 * Created by iamchenxin on 1/15/16.
 */
import express from 'express';

import webpack from 'webpack';
import path from 'path';



function run(port){
  let server=express();
  let staticPath = path.resolve(__dirname,"../client");
  console.log(staticPath);
  server.use('/',express.static(staticPath));
  server.listen(port,()=>{
    console.log(`listen at ${port}`);
  });
}

run(5000);
