import "../../style.css";
import * as S from "./style";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
    
    const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up";
    const navigate = useNavigate();

    const [registerData, setRegisterData] = useState({
        email: "",
        name: "",
        cpf: "",
        password: ""
    });
    
    return (
        <S.Container> 
            <S.Form onSubmit={register}>
                <input
                    required
                    placeholder="Nome"
                    type="nome"
                    value={registerData.name}
                    onChange={(e) => 
                        setRegisterData({...registerData, name: e.target.value})
                    }
                
                />

                <input
                    required
                    placeholder="CPF"
                    type="CPF"
                    value={registerData.cpf}
                    onChange={(e) => 
                        setRegisterData({...registerData, cpf: e.target.value})
                    } 
                
                />

                <input
                    required 
                    type="email"
                    placeholder="E-mail" 
                    value={registerData.email}
                    onChange={(e) => 
                        setRegisterData({...registerData, email: e.target.value})
                    }
                />

                <input 
                    required
                    placeholder="Senha"
                    type="password"
                    value={registerData.password}
                    onChange={(e) => 
                        setRegisterData({...registerData, password: e.target.value})
                    }
                />
                <button type="submit">CADASTRAR</button>
            </S.Form>
            <Link to={"/"}>
                    <h3>Já possui uma conta? Entre</h3>
            </Link>
        </S.Container>
    );

    function register(event) {
        event.preventDefault();

        axios
            .post(URL, registerData)
            .then(() => navigate("/"))
            .catch((response) =>  alert("Não foi possível criar uma conta com os dados fornecidos."));
    }
}

