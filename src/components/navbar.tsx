import * as React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from '@reach/router';

const Navbar : React.FC = () => (
	<Menu stackable text>
		<Menu.Item header link> <Link to="/"> Skyedelaciel </Link></Menu.Item>
		<Menu.Item link> <Link to="/personal"> Personal </Link></Menu.Item>
		<Menu.Item link> <Link to="/esports"> Esports </Link></Menu.Item>
		<Menu.Item link> <Link to="/technology"> Technology </Link></Menu.Item>
		<Menu.Item link> <Link to="/about"> About </Link></Menu.Item>
		<Menu.Item link right >
			<a href="https://twitter.com/skyedelaciel" aria-label="Twitter">
				<Icon name="twitter" link/>
			</a>
		</Menu.Item>
		<Menu.Item link right >
			<a href="mailto:skye@hyphen-emdash.com" aria-label="Email">
				<Icon name="mail" link/>
			</a>
		</Menu.Item>
		<Menu.Item link right>
			<a href="https://github.com/precociouslydigital/personal-site" aria-label="Github">
				<Icon name="github" link/>
			</a>
		</Menu.Item>
	</Menu>
);

export { Navbar };