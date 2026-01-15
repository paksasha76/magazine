import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const DevicePage = () => {
    const device = {id: 1, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://twigo.ru/center/iblock/900/lkuzbkxywkoydphgw2jya5p8q816351x/iphone_16_128_gb_ultramarin.jpg'}
    return (
        <Container className='mt-3'>
            <Col md={4}>
                <Image width={300} height={300} src={device.img} />
            </Col>
            <Col md={4}>
            <Row>
                <h2>{device.name}</h2>
                <div className='d-flex align-items-center justify-content-center'>
                    {device.rating}
                </div>
            </Row>
            </Col>
            <Col md={4}>

            </Col>
        </Container>
    )
}

export default DevicePage