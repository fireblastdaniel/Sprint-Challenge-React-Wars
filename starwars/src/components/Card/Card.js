import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import './Card.css';

const MyCard = props => {
    return (
            <Card>
                {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                <CardBody>
                    <CardTitle>{props.info.name}</CardTitle><hr/>
                    <CardSubtitle>Height: {props.info.height}</CardSubtitle>
                    <CardSubtitle>Mass: {props.info.mass}</CardSubtitle>
                    <CardSubtitle>Hair Color: {props.info.hair_color}</CardSubtitle>
                    <CardSubtitle>Skin Color: {props.info.skin_color}</CardSubtitle>
                    <CardSubtitle>Eye Color: {props.info.eye_color}</CardSubtitle>
                    <CardSubtitle>Birth Year: {props.info.birth_year}</CardSubtitle>
                    <CardSubtitle>Gender: {props.info.gender}</CardSubtitle>
                </CardBody>
            </Card>
    );
}

export default MyCard;