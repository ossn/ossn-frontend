// global settings
// import androidChrome from './favicon/android-chrome-144x144.png';
import appleTouch from './favicon/apple-touch-icon.png';
// import msTile from './favicon/mstile-150x150.png';
import safari from './favicon/safari-pinned-tab.svg';
import favicon16x16 from './favicon/favicon-16x16.png';
import favicon32x32 from './favicon/favicon-32x32.png';
// import faviconIcon from './favicon/favicon.ico';
// import siteWebmanifest from './favicon/site.webmanifest';

export const api = "https://07rqzpwj55.lp.gql.zone/graphql";

export const metadata =  [
		meta('msapplication-TileColor', '#000000'),
		meta('theme-color', '#ffffff'),
	];

export const link =  [
		favicon('apple-touch-icon', `${appleTouch}`, '180x180'),
		favicon('icon', `${favicon32x32}`, '32x32', 'image/png'),
		favicon('icon', `${favicon16x16}`, '16x16', 'image/png'),
		favicon('mask-icon', `${safari}`, null, null, '#5bbad5'),
	];

function meta(name, content) {
	return {
		name: name,
		content: content
	}
}

function favicon(rel=null, href=null, sizes=null, type=null, color=null) {
	let bundle = {};
	if (rel) bundle.rel = rel;
	if (href) bundle.href = href;
	if (sizes) bundle.sizes = sizes;
	if (type) bundle.type = type;
	if (color) bundle.color = color
	return bundle;
}
