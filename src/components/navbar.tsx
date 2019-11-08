import * as React from 'react';
import { Menu, Icon, Popup } from 'semantic-ui-react';
import { Link } from '@reach/router';
import { CopyItem } from './copyLink';

const Navbar : React.FC = React.memo(() => (
    <Menu stackable text>
        <Menu.Item header link>
            {' '}
            <Link to="/"> Skyedelaciel </Link>
        </Menu.Item>
        <Menu.Item link>
            {' '}
            <Link to="/personal"> Personal </Link>
        </Menu.Item>
        <Menu.Item link>
            {' '}
            <Link to="/esports"> Esports </Link>
        </Menu.Item>
        <Menu.Item link>
            {' '}
            <Link to="/technology"> Technology </Link>
        </Menu.Item>
        <Menu.Item link>
            {' '}
            <Link to="/about"> About </Link>
        </Menu.Item>
        <Menu.Item link right>
            <Popup
                content="Twitter"
                trigger={(
                    <a href="https://twitter.com/skyedelaciel" aria-label="Twitter">
                        <Icon name="twitter" link />
                    </a>
                )}
            />
        </Menu.Item>
        <Menu.Item link right>
            <Popup
                content="Email"
                trigger={(
                    <a href="mailto:skye@hyphen-emdash.com" aria-label="Email">
                        <Icon name="mail" link />
                    </a>
                )}
            />
        </Menu.Item>
        <Menu.Item link right>
            <CopyItem
                copy={(copied) => (copied ? 'Copied!' : 'Discord: Skyedelaciel#0001')}
                icon={<a><Icon name="discord" aria-label="Discord: Skyedelaciel#0001" link /></a>}
                text="Skyedelaciel#0001"
            />
        </Menu.Item>
        <Menu.Item link right>
            <a href="https://github.com/precociouslydigital/personal-site" aria-label="Github">
                <Icon name="github" link />
            </a>
        </Menu.Item>
    </Menu>
));

export { Navbar };
