import angular = require("angular");
import barDirective from "./barDirective";



export default angular
	.module("bar", [])
	.directive("bar", barDirective)
	.name;