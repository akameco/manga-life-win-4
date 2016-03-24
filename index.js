'use strict';
const got = require('got');
const cheerio = require('cheerio');

module.exports = url => {
	return got(url)
		.then(res => {
			const $ = cheerio.load(res.body);
			return $('.bookR a').map((i, el) => {
				return $(el).attr('href');
			}).get();
		}).catch(err => {
			console.log(err);
		});
};
