import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HttpLink} from 'apollo-link-http';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from '@apollo/react-hooks';
import {InMemoryCache} from 'apollo-cache-inmemory';
import store from './store';
import App from './components/App';

const cache = new InMemoryCache();

const link = new HttpLink({uri: 'https://graphql-pokemon.now.sh/'});

const client = new ApolloClient({
	cache,
	link,
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Provider store={store}>
				<App/>
			</Provider>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

