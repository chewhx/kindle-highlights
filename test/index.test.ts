import kindleformatter from '../src/index';

describe('json()', () => {
	it('Should be defined', () => {
		expect(kindleformatter.json).toBeDefined();
	});

	it('Should be return js object', () => {
		const res = kindleformatter.json('test/test.html');
		console.log(res);
		expect(res).toHaveProperty('title', 'Die with Zero - Bill Perkins');
		expect(res).toHaveProperty('author', 'Bill Perkins');
	});
});

describe('markdown()', () => {
	it('Should be defined', () => {
		expect(kindleformatter.markdown).toBeDefined();
	});

	it('Should be return markdown', () => {
		const res = kindleformatter.markdown('test/test.html');
		console.log(res);
		expect(typeof res).toBe('string');
	});
});


