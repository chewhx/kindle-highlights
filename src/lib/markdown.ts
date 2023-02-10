import json2md, { DataObject } from 'json2md';

export default function (doc: Document) {
	const markdown: DataObject[] = [
		{ h1: doc.querySelector('div.bookTitle')?.textContent?.trim() || '' },
		{ p: doc.querySelector('div.authors')?.textContent?.trim() || '' },
	];

	const bodyContainerNode = doc.querySelector('div.bodyContainer');

	if (bodyContainerNode?.children.length) {
		let currentSection: DataObject = {};

		for (const node of bodyContainerNode.children) {
			const className = node.className;

			switch (className) {
				case 'sectionHeading':
					currentSection = {
						h2: node?.textContent?.trim(),
					};
					break;
				case 'noteHeading':
					if (!node?.textContent?.trim()?.startsWith('Bookmark')) {
						markdown.push(currentSection);
						markdown.push({
							p: node?.nextElementSibling?.textContent?.trim(),
						});
						markdown.push({
							p: node?.textContent?.trim(),
						});
					}
					break;
			}
		}
	}

	return json2md(markdown);
}
