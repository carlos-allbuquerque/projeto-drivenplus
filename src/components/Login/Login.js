import { useNavigate, Link } from "react-router-dom";
import * as S from "./style";
import DrivenPlus from "../../assets/DrivenPlus.svg"
import { useState, useContext} from "react";
import axios from "axios";
import UserContext from "../../constexts/UserContext";


export default function Login() {
    const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login";
    const navigate = useNavigate();

    const { setUser } = useContext(UserContext);

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    return (
        
        <S.Container>
            <img src={DrivenPlus} alt="" />
            <S.Form onSubmit={login}>
                <input
                    required
                    placeholder="E-mail"
                    type= "email"
                    value={userData.email}
                    onChange={(e) => 
                        setUserData({...userData, email: e.target.value})
                    }
                />

            <input
                    required
                    placeholder="Senha"
                    type="password"
                    value={userData.password}
                    onChange={(e) => 
                        setUserData({...userData, password: e.target.value})
                    }
                />
                <button type="submit">ENTRAR</button>
            </S.Form>
            
            <Link to={"/sign-up"}><h3>Não possui uma conta? Cadastre-se</h3></Link>

        </S.Container>
    );

    function login(event) {
        event.preventDefault();

        axios
            .post(URL, userData)
            .then((response) => {
                setUser(response.data);
                console.log(response.data)
                redirect(response.data.membership);
            })
            .catch(() => alert("Não foi possível logar na conta"));
    }

    function redirect(membership) {
        (membership) ? navigate("/home"):navigate("/subscriptions");
    }
}