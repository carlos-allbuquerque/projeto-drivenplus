import { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../constexts/UserContext";
import { useParams } from "react-router";
import * as S from "./style";
import VectorList from "../../assets/VectorList.svg";
import Money from "../../assets/Money.svg";
import Arrow from "../../assets/Arrow.svg";
import Exit from "../../assets/Exit.svg";
import { useNavigate } from "react-router";

export default function Plan() {
    const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships";

    const { planId } = useParams();
    const {user} = useContext(UserContext);
    const [planData, setPlanData] = useState({});
    const [perks, setPerks] = useState([]);
    const navigate = useNavigate();
    const [appear, setAppear] = useState(false);
    const [cardData, setCardData] = useState({
        membershipId: 0,
        cardName: "",
        cardNumber: "",
        securityNumber: "",
        expirationDate: ""
    });


    const requestHeader = {
        headers: {
        Authorization: `Bearer ${user.token}`,
        },
    };

    useEffect(() => {
        axios
            .get(`${URL}/${planId}`, requestHeader)
            .then(response => {
            setPlanData(response.data)
            setPerks(response.data.perks)
            setCardData({...cardData, membershipId: response.data.id})
            })
    }, [])

    return (
        <>
            
            <S.Container>
                <S.Return><img onClick={() => navigate(-1)} src={Arrow} alt="" /></S.Return> 
                <S.Logo src={planData.image} alt="" /> 
                <h1>{planData.name}</h1>
                <S.Box>
                    <S.Flex>
                        <img src={VectorList} alt="" />
                        <h2>Benefícios:</h2>
                    </S.Flex>
                    {perks.map((perk, index) => <h3 key={index}>{`${index + 1}. ${perk.title}`}</h3>)}
                    <S.Flex>
                        <img src={Money} alt="" />
                        <h2>Preço:</h2>    
                    </S.Flex>
                    <h3>{`R$ ${planData.price} cobrados mensalmente`}</h3>
                    <S.Form 
                        onSubmit={(event) => {
                            event.preventDefault();
                            setAppear(true)} 
                        }
                    >
                        <input
                            required
                            placeholder="Nome impresso no cartão"
                            type= "name"
                            value={cardData.cardName}
                            onChange={(e) => 
                                setCardData({...cardData, cardName: e.target.value})
                            }
                        />
                        <input
                            required
                            placeholder="digitos do cartão"
                            type= "number"
                            value={cardData.cardNumber}
                            onChange={(e) => 
                                setCardData({...cardData, cardNumber: e.target.value})
                            }
                        />
                        <S.FlexInputs>
                            <input
                                required
                                placeholder="Código de segurança"
                                type= "number"
                                value={cardData.securityNumber}
                                onChange={(e) => 
                                    setCardData({...cardData, securityNumber: parseInt(e.target.value) })
                                }
                            />
                            <input
                                required
                                placeholder="Validade"
                                type= "text"
                                onFocus={(e) => (e.target.type = "month")}
                                onBlur={(e) => (e.target.type = "text")}
                                value={cardData.expirationDate}
                                onChange={(e) => 
                                    setCardData({...cardData, expirationDate: e.target.value})
                                }
                            />
                        </S.FlexInputs>

                        <button type="submit">ASSINAR</button>
                    </S.Form>
                </S.Box>
                <Modal appear={appear} setAppear={setAppear} name={planData.name} price={planData.price} sign={sign} />
            </S.Container>
            
        </>
    );

    function sign() {
        axios
            .post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",  cardData, requestHeader)
            .then(() => {
                alert("Plano assinado com sucesso!")
                navigate("/home")
            })
            .catch(() => alert("Não foi possível assinar o plano"))
    }
}

function Modal({
    appear, 
    setAppear,
    name,
    price,
    sign
}) {
    return (
        <S.MContainer display={(appear) ? "flex":"none"}>
            <S.Exit><img onClick={() => setAppear(false)} src={Exit} alt="" /></S.Exit> 
            <S.Div>
                <S.Message>
                    <h1>{`Tem certeza que deseja assinar o plano ${name} (R$ ${price})`}</h1>
                    <S.FlexMessageInputs>
                        <S.No onClick={() => setAppear(false)}>NÂO</S.No>
                        <S.Yes onClick={sign} >SIM</S.Yes>
                    </S.FlexMessageInputs>
                </S.Message>
            </S.Div>

        </S.MContainer>
    );

}

