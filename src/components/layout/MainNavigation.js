import { Link, NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link to='/quotes' className={classes['logo-url']}>
					Great Quotes
				</Link>
			</div>

			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink to='/quotes/' activeClassName={classes.active}>
							All Quotes
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/new-quote/'
							activeClassName={classes.active}
						>
							New Quote
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
export default MainNavigation;
