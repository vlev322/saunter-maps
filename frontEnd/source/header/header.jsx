import React from 'react';

import styles from './header.sass';

const Header = props => {
	return (
		<div className={styles.header}>
			<div className={styles.header_l}>
				<img src="https://s1.logaster.com/static/v3/img/first_step_seo/example-1.png" alt="Main" className={styles.logo}/>
				<h1>Saunter</h1>
			</div>
			<div className={styles.header_r}>
				<button className={styles.btn}>Add path</button>
			</div>
		</div>
)};
  
export default Header;