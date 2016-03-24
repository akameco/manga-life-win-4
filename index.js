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

module.exports.getImage = url => {
	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return $('#extMdlSeriesMngrArticle-inner78 img').attr('src');
	}).then(url => {
		return got(url, {encoding: null}).then(res => res.body);
	});
};
