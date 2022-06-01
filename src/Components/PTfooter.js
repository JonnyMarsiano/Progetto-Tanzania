import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "../FooterStyles.js";

function PTfooter(props) {
    return (
        <Box>
            <p>Ciaone</p>
            <Container>
                <Row>
                    <Column>
                        <Heading>Contattaci</Heading>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="https://www.facebook.com/progettotanzania/">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://instagram.com/progetto_tanzania?utm_medium=copy_link">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};

export default PTfooter;