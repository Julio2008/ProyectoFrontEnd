import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
// import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignInForm from '../components/forms/SigninForm';
// import { useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { isObjEmpty } from '../helpers/helpers';
import { loginUser } from '../actions/authActions';
import { useHistory } from 'react-router-dom';



export default function Signin() {
    
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    

    const loggedIn = useSelector(state => state.auth.loggedIn);
    const history = useHistory();

    useEffect(() => {
    //   cuando se inicia el componente
        if (loggedIn) {
        history.push("/");
      }
    });
    const login = ({ email, password }) => {
        const errors = {};
        setErrors(errors);

        if (!validator.isEmail(email)) {
            errors.email = "El correo electronico es inválido";
        }

        if (validator.isEmpty(password)) {
            errors.password = "La contraseña no puede estar vacia";
        }

        if (!isObjEmpty(errors)) {
            setErrors(errors);
            return;
        }

        // llamar a la funcion login que vamos a crear en authActions

        dispatch(loginUser({ email, password }))
            .then(response => {

            })
            .catch(err => {                
                setErrors({ auth: "No se puede iniciar sesion con esos credenciales" });
            });

    }
    return (
        <Container className="mt-5">
            <Row>
                <Col sm="12" md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                    <Card body>                        
                        {/* { errors.auth && <Alert variant="danger">{ errors.auth }</Alert> } */}

                        <h3>Iniciar sesion</h3><hr></hr>
                        {/* <SigninForm errors={{}} onSubmitCallback={null}></SigninForm> */}
                        <SignInForm errors={errors} onSubmitCallback={login}
                        ></SignInForm>
                        <div className="mt-4">
                            <Link to={"/signup"}>No tienes una cuenta? Registrate aqui.</Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
