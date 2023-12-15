import React, { useState, useEffect } from 'react';
import { Input, Button, Card } from 'antd';
import { Link } from 'react-router-dom';

const Login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {

    }, [name, password]);

    const loginButton = () => {
        console.log("name", name)
        console.log("password", password)
    }
    return (
        <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
            <div style={{ height: "calc(100% - 80px)", display: "flex", flexDirection: "column" }}>

                <div>
                    <Card style={{ borderColor: "transparent", borderWidth: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: "50%" }}>
                            <img
                                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                style={imageStyles}
                            />
                        </div>
                    </Card>
                </div>

                <div style={inputStyles}>
                    <Input
                        placeholder="Username"
                        style={inputInsideStyles}
                        onChange={text => { setName(text.target.value) }}
                    />
                </div>

                <div style={inputStyles}>
                    <Input
                        placeholder="Password"
                        type='password'
                        style={inputInsideStyles}
                        onChange={text => { setPassword(text.target.value) }}
                    />
                </div>

                <div style={inputStyles}>
                    <Link to="/forgot-password">... şifremi unuttum</Link>
                </div>

            </div>

            <div style={inputStyles}>

                <div style={inputInsideStyles}>
                    <Button
                        type="primary"
                        onClick={() => loginButton()} >
                        Log in
                    </Button>
                </div>

            </div>

        </div>

    );
};

export default Login;

const imageStyles = {
    width: '300px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const inputStyles = {
    width: "100%",
    height: "30px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: "10px"
}
const inputInsideStyles = {
    width: "50%",
    height: "30px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: "10px"
}
