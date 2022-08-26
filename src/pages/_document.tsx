import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class SpecialDocument extends Document {
	render() {
		return (
			<Html className='overflow-hidden'>
				<Head />
				<body className='overflow-hidden'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default SpecialDocument;
