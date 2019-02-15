import React, { Fragment } from 'react';

import styles from './path.sass';

const Path = props => {
	const { name, description, distance } = props;
	return (
		<Fragment>
			<div className={styles.path}>
				<img src="https://s1.logaster.com/static/v3/img/first_step_seo/example-1.png" alt="Main"/>
				<div className={styles.path_info}>
					<span>&#9734;</span>
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
				<div>
				{distance} km
				</div>
				<span>&gt;</span>
			</div>
		</Fragment>
	)
};

export default Path;