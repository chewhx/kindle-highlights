import { readFileSync } from 'fs-extra';
import { JSDOM } from 'jsdom';
import _json from './lib/json';
import _markdown from './lib/markdown';

export default {
	json: (file: string) => {
		const html = readFileSync(file, 'utf-8');
		const dom = new JSDOM(html);
		const doc = dom.window.document;

		return _json(doc);
	},
	markdown: (file: string) => {
		const html = readFileSync(file, 'utf-8');
		const dom = new JSDOM(html);
		const doc = dom.window.document;

		return _markdown(doc);
	},
};
