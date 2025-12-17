import React from 'react';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Context } from '..';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    console.log(user.isAuth);
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>
                КупиДевайс
            </NavLink>
            {user.isAuth ? (
                <Nav className="ms-auto" style={{ color: 'white' }}>
                    <Button variant="outline-light">Админ панель</Button>
                    <Button
                        className='ms-2'
                        variant="outline-light"
                        onClick={() => {
                            user.setIsAuth(false); // добавьте разлогин
                        }}
                    >
                        Выйти
                    </Button>
                </Nav>
            ) : (
                <Nav className="ms-auto" style={{ color: 'white' }}>
                    <Button
                        variant="outline-light"
                        onClick={() => {
                            user.setIsAuth(true);
                        }}
                    >
                        Авторизация
                    </Button>
                </Nav>
            )}
            </Container>
        </Navbar>
    );
});

export default NavBar;