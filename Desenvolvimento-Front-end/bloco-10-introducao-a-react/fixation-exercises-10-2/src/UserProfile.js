import React, { Component } from "react";
import Image from "../src/Image";


class UserProfile extends Component {
    render(){
        return (
                <section key={this.props.user.id}>
                    <h1>User Profile</h1>
                    <p>{this.props.user.name}</p>
                    <p>{this.props.user.email}</p>
                    <Image source={this.props.user.avatar} alternativeText={"Erro"}/>
                </section>

        )
            
        
    }
}

export default UserProfile;