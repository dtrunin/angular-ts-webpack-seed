import angular = require("angular");
import fooDirective from "./fooDirective";



export default angular
	.module("foo", [])
	.directive("foo", fooDirective)
	.name;