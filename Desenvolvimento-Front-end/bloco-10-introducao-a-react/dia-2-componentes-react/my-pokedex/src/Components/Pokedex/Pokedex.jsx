import React, { Component } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import { Container } from './styles';




class Pokedex extends Component {
    render(){
        return (
            <Container>
                <Pokemon />
            </Container>
        )
    }
}

export default Pokedex;