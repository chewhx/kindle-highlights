# kindle-highlights

Extract kindle highlights from html file, into json or markdown.

## Installation

```
npm install kindle-highlights
```

## Imports

```javascript
const { json, markdown } = require('kindle-highlights');

// OR

import { json, markdown } from 'kindle-highlights';
```

## How to use

### Convert to json

```javascript
const jsonResponse = json('[filePath to kindle html export]');

/*
const jsonResponse = {
  title: 'Die with Zero - Bill Perkins',
	author: 'Bill Perkins',
	sections: [
    { title: 'Optimize Your Life', headings: [Array] },
		{ title: 'Invest in Experiences', headings: [Array] },
		{ title: 'Why Die with Zero?', headings: [Array] },
		{
      title:
				'How to Spend Your Money (Without Actually Hitting Zero Before You Die)',
			headings: [Array],
		},
		{ title: 'What About the Kids?', headings: [Array] },
		{ title: 'Balance Your Life', headings: [Array] },
		{ title: 'Start to Time-Bucket Your Life', headings: [Array] },
		{ title: 'Know Your Peak', headings: [Array] },
		{ title: 'Be Bold—Not Foolish', headings: [Array] },
	],
};
*/
```

### Convert to markdown

```javascript
const mdResponse = markdown('[filePath to kindle html export]');

/*
# Die with Zero - Bill Perkins
  Bill Perkins
  
  ## Optimize Your Life
  
  Maximizing your fulfillment from experiences—by planning how you will spend your time and money to achieve the biggest peaks you can with the resources you have—is how you maximize your life. By taking charge of these crucial decisions, you take charge of your life.
  
  Highlight(yellow) - Location 119
*/
```
