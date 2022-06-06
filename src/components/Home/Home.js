import axios from "axios";
import Profile from "../../assets/Profile.svg";
import * as S from "./style";
import UserContext from "../../constexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

export default function Home() {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const requestHeader = {
        headers: {
        Authorization: `Bearer ${user.token}`,
        },
    };

    return (
        <>
            <S.Header>
                <S.Logo src={user.membership.image} />
                <S.Profile src={Profile} alt="" />
            </S.Header>
            <S.Container>
                <h1>{`Olá, ${user.name}`}</h1>
                <S.Links>
                    <S.Perks>
                        {user.membership.perks.map((perk) => 
                            <form action={perk.link} key={perk.id}>
                                <button type="submit" key={perk.id}>{perk.title}</button>
                            </form> 
                        )}
                    </S.Perks>
                    <S.Options>
                        <S.Change onClick={changePlan}>Mudar Plano</S.Change>
                        <S.Cancel onClick={cancelPlan}>Cancelar Plano</S.Cancel>
                    </S.Options>
                </S.Links>
            </S.Container>
        </>
    );

    function changePlan() {
        navigate("/subscriptions");
    }

    function cancelPlan() {
        if(window.confirm("Tem certeza que deseja cancelar o plano atual?")) {
            axios
                .delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", requestHeader)
                .then(() => navigate("/subscriptions"))
        }
    }

}