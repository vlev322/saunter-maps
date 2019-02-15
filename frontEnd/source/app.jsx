import React, {Component, Fragment} from 'react';

import styles from './styles/main.sass';
import Routes from "./routes/index.jsx";
import Header from './header/header';

class App extends Component {
  render() {
    return (
			<Fragment>
				<Header/>
				<Routes/>
			</Fragment>
			
    );
  }
}

export default App;
