import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Avatar from 'react-avatar';

function Skills({ skills }) {
    return (
        <Accordion defaultActiveKey="0">
            {skills.map((skill, idx) => {
                return (
                    <Accordion.Item eventKey={`${idx}`}>
                        <Accordion.Header>{skill.skillName}</Accordion.Header>
                        <Accordion.Body>
                            {skill.description}
                        </Accordion.Body>
                    </Accordion.Item>
                )
            })}
        </Accordion>
    );
}


function Profile({ user }) {
    return (
        <Container>
            <Avatar name={user.username} size="100" round={true} />
            <h1 className="my-4">{user.firstName} {user.lastName}</h1>

            <Button href="/connect" variant='primary'>Connect</Button>
            <Row>
                <Col md={12}>
                    <p>Email: {user.email}</p>

                    <h3>Skills:</h3>
                    <p>
                        <Skills skills={user.skills}/>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;
