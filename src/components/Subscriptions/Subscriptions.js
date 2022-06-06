import axios from "axios";
import { useEffect, useContext, useState } from "react";
import UserContext from "../../constexts/UserContext";
import * as S from "./style";
import { useNavigate } from "react-router";

export default function Subscriptions() {
    const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships";

    const {user} = useContext(UserContext);
    const [plans, setPlans] = useState([]);
    const navigate = useNavigate();

    const requestHeader = {
        headers: {
        Authorization: `Bearer ${user.token}`,
        },
    };

    useEffect(() => {

        axios
            .get(URL, requestHeader)
            .then((response) => setPlans(response.data));
    })

    return (
        <S.Container>
            <h1>Escolha seu Plano</h1>
            {plans.map((item, index) =>
                <Plan id={item.id} image ={item.image} price={item.price} key={index} navigate={navigate} />
            )}
        </S.Container>
    );

}

function Plan({id, image, price, navigate}) {
    return (
        <S.Box onClick={() => {navigate(`/subscriptions/${id}`)}}>
            <img src={image} alt="" />
            <h2>{` R$ ${price}`}</h2>
        </S.Box>
    );
}