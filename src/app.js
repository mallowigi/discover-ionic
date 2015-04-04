import modules from './modules';
import run from './run';
import appRouter from './config/appRouter';

var app = angular.module('discover', modules)
  .config(appRouter)
  .run(run);

export default app;
