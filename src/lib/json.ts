export default function (doc: Document) {
	const json: {
		title: string;
		author: string;
		sections: {
			title: string;
			headings: { title: string; content: string }[];
		}[];
	} = {
		title: doc.querySelector('div.bookTitle')?.textContent?.trim() || '',
		author: doc.querySelector('div.authors')?.textContent?.trim() || '',
		sections: [],
	};

	const bodyContainerNode = doc.querySelector('div.bodyContainer');

	if (bodyContainerNode?.children.length) {
		let currentSectionIndex = -1;

		for (const node of bodyContainerNode.children) {
			const className = node.className;

			switch (className) {
				case 'sectionHeading':
					currentSectionIndex += 1;
					json.sections[currentSectionIndex] = {
						title: node?.textContent?.trim() || '',
						headings: [],
					};
					break;
				case 'noteHeading':
					if (!node?.textContent?.trim()?.startsWith('Bookmark')) {
						json.sections.at(currentSectionIndex)?.headings.push({
							title: node?.textContent?.trim() || '',
							content: node?.nextElementSibling?.textContent?.trim() || '',
						});
					}
					break;
			}
		}
	}
	return json;
}
