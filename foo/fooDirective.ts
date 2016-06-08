import './foo.less';
//import fooTemplate = require("./foo.html");

export default function fooDirective() {
	return {
		template: "<div class=\"foo__title\">foo</div>"
	}
}