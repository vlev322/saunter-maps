import React, {Fragment} from 'react';
import Path from './pathItem'
import styles from './routes.sass';

const Routes = () => {
    return (
			<div className={styles.content}>	
				<div>
					<input type="text"/>
					<button>Search</button>
				</div>
        <div className={styles.list}>
					<Path description={'Quis ipsum laboris elit irure excepteur minim nulla dolor Lorem voluptate.Aute in voluptate anim non magna eu.'} distance={2.35} name={'Path name'}/>
					<Path description={'Quis ipsum laboris elit irure excepteur minim nulla dolor Lorem voluptate.Aute in voluptate anim non magna eu.'} distance={2.35} name={'Path name'}/>
					<Path description={'Quis ipsum laboris elit irure excepteur minim nulla dolor Lorem voluptate.Aute in voluptate anim non magna eu.'} distance={2.35} name={'Path name'}/>
        </div>
			</div>
)};
  
export default Routes;