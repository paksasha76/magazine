import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form, FormControl, Row, Col } from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { login, registration } from '../http/userAPI'
import { Context } from '..'

const Auth = () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const click = async () => {
        try {
        let data;
        if(isLogin) {
            data = await login(email, password)
        } else {
            data = await registration(email, password)
        }
        user.setUser(user)
        user.setIsAuth(true)
        navigate(SHOP_ROUTE)
    } 
        catch(e) {
        alert(e.response.data.message)
        }
    }

    return (
    <Container className='d-flex justify-content-center align-items-center'
    style={{height: window.innerHeight - 54}}
    >
        <Card style={{width: 600}} className='p-5'>
            <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <Form className="d-flex flex-column">
                <FormControl className='mt-3' placeholder='Введите email' value={email} onChange={e => setEmail(e.target.value)}/>
                 <FormControl className='mt-3' placeholder='Введите пароль' value={password} onChange={e => setPassword(e.target.value)}/>
                <Row className="mt-3">
        <Col className="d-flex justify-content-between align-items-center">
            {isLogin ? <div>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
            </div> :  <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
            </div>}
            <Button variant="outline-success" onClick={click}>{isLogin ? 'Войти' : 'Регистрация'}</Button>
        </Col>
        </Row>
            </Form>
        </Card>
    </Container>
    )
}

export default Auth