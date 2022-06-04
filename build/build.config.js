const path = require("path");

const cwd = file => path.join(process.cwd(), file || "");

module.exports = {
	cwd
};
