import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>
					<Link activeClassName={style.active} href="/">Tareas diarias para Ellie</Link>
				</h1>
				<nav>
					<Link activeClassName={style.active} href="/">Tareas</Link>
					<Link activeClassName={style.active} href="/history/miguel">Histórico</Link>
				</nav>
			</header>
		);
	}
}
