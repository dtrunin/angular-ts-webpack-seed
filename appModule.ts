import angular = require("angular");
import fooModule from "./foo/fooModule";
import barModule from "./bar/barModule";


angular.module("webpackApp", [fooModule, barModule]);