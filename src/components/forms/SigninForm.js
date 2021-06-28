import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import { Grid } from "@material-ui/core";
import { loginStyles } from "../../styles/loginStyles"

//googleAPI Credentials
import { GoogleLogin } from 'react-google-login';
//FacebookAPI Credentials
import FacebookLogin from 'react-facebook-login';

export default function SigninForm({ errors, onSubmitCallback,setCheckLogin, setGoogleUserData, googleUserData, setFbUserData }) {
// export default function SigninForm({ setCheckLogin, setGoogleUserData, googleUserData, setFbUserData }) {
    
    const [email, setEmail] = useState("");  //useState("julio@gmail.com");
    const [password, setPassword] = useState("");        //useState("123");
    let cual=0;
// console.log("email  :  "+email)
// const password= '';
//     const  email= '';
    // console.log("email Vacio  :  "+email)


    // const inicio = ({ email= '', password= '' }) => {}


    // const inicializa = {
//         password: '',
//         email: ''
//     }
// console.log("email Vacio  :  "+email)


    const classes = loginStyles();
    const history = useHistory();
    // const users = [
    //     { email: 'julio@gmail.com', password: '123456' },
    //     { email: 'maria@hotmail.com', password: 'maria123' }
    // ]



    // const handleChange = (e) => {
    //     setUser({
    //         ...user,
    //         [e.target.name]: e.target.value
    //     });
    // };
    // useEffect(() => {
    //     if (email.trim().length !== 0) {
    //         setErrors({ ...errors, email: false });
    //     } else {
    //         setErrors({ ...errors, email: true });
    //     }
    // }, [user])
    // const handleClick = () => {
    //     if (validation.email && validation.password) {
    //         setCheckLogin(true);
    //         history.push('/')
    //     } else {
    //         alert('Correo o contraseña inválidos')
    //     }
    // };

    const saveData = (data) => {
        if (data) {
            setCheckLogin(true);
            console.log("1 savedata nom : "+data.name);
            setGoogleUserData(data)
            history.push('/');
           
        }
    }


    const responseGoogle = (data) => {
        console.log(data)
        if (data.profileObj?.length !== 0) {
            console.log("Google response :  "+data);
            cual = 1;
            return (alert("Bienvenido : "+data.profileObj.name+" su correo es :"+data.profileObj.email));
            
            // return saveData(data.profileObj);
        }
        else {
            // return saveData('error');
            return null;
        }
    }

    

    const responseFacebook = (response) => {
        console.log(response);
        
        cual = 2;
        
        return(alert("Bienvenido : "+response.name+" su correo es :"+response.email));
        // return saveFbData(response);
    }

    const saveFbData = (response) => {
        setCheckLogin(true);
        setFbUserData(response);
        console.log(" 2 savedata "+response);
        history.push('/');
        
    }




    const submitForm = (e) => {
        e.preventDefault();
        onSubmitCallback({ email, password });
    }

    return (
        <Form onSubmit={submitForm}>
            <Form.Group control="email">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={ e => setEmail(e.target.value) }
                    placeholder="Correo electronico"
                    isInvalid={errors.email}
                />
                <Form.Control.Feedback type="invalid">
                    { errors.email }
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group control="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={ e => setPassword(e.target.value) }
                    placeholder="Contraseña"
                    isInvalid={errors.password}
                />
                <Form.Control.Feedback type="invalid">
                    { errors.password }
                </Form.Control.Feedback>
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit">Iniciar sesion</Button>

                                    <Grid item md={12} sm={12} xs={12} className={classes.apisText}>
                                        <GoogleLogin
                                            clientId="737999626252-72uj04rfg51un5mftne5spvtb9livln5.apps.googleusercontent.com"
                                            buttonText="Iniciar Sesión"
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                    </Grid>
                                    <h3/>
                                    <Grid item md={12} sm={12} xs={12} className={classes.apisText}>
                                        <FacebookLogin
                                            appId="3542043469229450"
                                            autoLoad={false}
                                            fields="name,email,picture"
                                            // onClick={componentClicked}
                                            callback={responseFacebook} 
                                            textButton="Inicia Sesión con FaceBook"         // Leyenda
                                            icon="fa-facebook"                              // Icono
                                            />
                                    </Grid>

        </Form>
    )
}

