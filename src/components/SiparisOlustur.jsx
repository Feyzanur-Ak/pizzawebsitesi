import axios from "axios";
import styled from "styled-components";
import{ useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import hommer from "../pictures/form-banner.png";

const Container = styled.div`
  width: 32%;
  margin: 0 auto;
  font-family: "Roboto Condensed", sans-serif;

  @media (max-width: 768px) {
    width: 80%;
    padding-left: 20px;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  text-align: center;
  margin-top: 0;
  
  img {
    width: 100%;
    max-width: 450px; 
    margin: 0 auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #faf7f2;
  justify-content: left;
  padding: 0 20px;
  width: 100%; 
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px; 
 
`;

const Price = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin: 10px 0;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center; 
  gap: 10px; 
  margin-top: 10px;
`;

const Rating = styled.span`
  font-size: 16px;

`;

const ReviewCount = styled.span`
  font-size: 14px;
  color: #666;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #333;
  margin-top: 10px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const SelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  flex-wrap: wrap; /* Ekran küçüldüğünde, kutular alt alta sıralanabilir */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  flex: 1;
  margin-right: 20px;
  display: flex;
  flex-direction: row; 
  align-items :center;
  justify-content: center;
 
  
  &:last-child {
    margin-right: 0;
    flex-wrap: wrap;
  }

`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: bold;
  color: black,;  
  text-align:left;
  
  &::after {
    content: " *"; 
    color: red; 
  }
`;


const SelectionOption = styled.div`
  margin-bottom: 10px;
  font-size: 1rem;
  
  input[type="radio"] {
    margin-right: 10px;  
    cursor: pointer;
    width: 20px;
    height: 20px;
    position: relative;
  }

  select {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: absolute;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 5px;
   
  }
`;

const ExtraContainer = styled.div`
  margin-top: 40px;
`;

const ExtraList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: repeat(5, auto); 
  gap: 15px;
  max-height: 300px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ExtraNote = styled.p`
font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`;

const NoteContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 40%;
  }
`;

const NoteInput = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: none;
  margin-bottom: 20px;
  background-color: #faf7f2;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
  
`;

const InputLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  

  span {
    color: red;
  }
`;

const InputField = styled.input`
 background-color: #faf7f2;
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SummarySection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SummaryContainer = styled.div`
 margin-top: 50px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 50px; 
  background-color: #faf7f2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 80px;  // Bu, container'ın alt kısmına boşluk ekler

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 20px;
  }
`;


const SummaryTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #333;
`;

const PriceDetail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;

  &.total {
    color: red;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
  }

`;

const QuantityControl = styled.div`
  width: 100%;
  margin-top: 50px;
 

  @media (max-width: 768px) {
    margin-top: 20px;    
  }
`;

const QuantityButton = styled.button`
  width: 40px;
  height: 42px;
  font-size: 18px;
  background-color: #FDC913;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }


`;

const QuantityInput = styled.input`
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  border:none;
  border-left: none;
  border-right: none;
  background-color: #faf7f2;
  color: #333;
  border-radius: 0;
  box-shadow: none;

  @media (max-width: 768px) {
    
  }
`;

const OrderButton = styled.button`
  width: 58.5%;
  height: 40px;
  font-size: 18px;  
  font-weight: bold;
  border-radius: 5px;
  margin-top: 40%;
  padding-left: 20px;
  border: none;
  background-color:#FDC913;
  color: #292929;
  cursor: pointer;
  position: absolute;
  right: 0;
 

  &:disabled {
    background-color: #e0e0e0;
    color: #aaa;
    cursor: not-allowed;
  }

@media (max-width: 768px) {
  margin-top: 90%;
  width: 60%;
}

`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const StyledCheckbox = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 4px;
  background-color: ${(props) => (props.checked ? '#FDC913' : '#faf7f2')};
  border: 2px solid #ccc;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 10px;

  &::after {
    content: ${(props) => (props.checked ? `"✓"` : '""')};
    position: absolute;
    top: 3px;
    left: 6px;
    color: black;
    font-size: 18px;
    font-weight: bold;
  }
`;

const Label = styled.label`
  font-size: 16px;
  cursor: pointer;
`;
// Main Component
const SiparisOlustur = () => {

 
  const location = useLocation();
  const history = useHistory();

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    price: 0,
    subscribe: "",
    ratio: "",
    description: "",
  });
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [userName, setUserName] = useState("");


  const EXTRA_PRICE = 5;
  const BASE_PRICE = productDetails.price;

  const ekstraMalzemeler = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Mısır",
    "Sucuk",
    "Kanada Jambonu",
    "Ananas",
    "Tavuk Izgara",
    "Jalapeno",
    "Kabak",
    "Soğan",
    "Sarımsak",
    "Zeytin"
  ];

  useEffect(() => {
    if (location.state) {
      setProductDetails(location.state); 
    }
  }, [location.state]);

  const handleExtraChange = (e) => {
    const value = e.target.value;
    if (extras.includes(value)) {
      setExtras(extras.filter((extra) => extra !== value));
    } else {
      if (extras.length < 10) {
        setExtras([...extras, value]);
      }
    }
  };

  

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increment" ? prev + 1 : Math.max(prev - 1, 1)));
  };

  const calculateTotal = () => {
    return (BASE_PRICE + extras.length * EXTRA_PRICE) * quantity;
  };

  const isValidForm = () => {
    return (
      userName.length >= 3 &&
      size &&
      dough &&
      extras.length >= 4 &&
      extras.length <= 10
    );
  };

  const handleOrderSubmit = async () => {
    if (!isValidForm()) return;

    const orderData = {
      userName,
      size,
      dough,
      extras,
      note,
      quantity,
      total: calculateTotal(),
      productDetails: {
        name: productDetails.name,
        image: productDetails.image,
        price: productDetails.price,
        subscribe: productDetails.subscribe,
        ratio: productDetails.ratio,
        description: productDetails.description,
      },
    };

    console.log("OrderData:", orderData); 

    try {
      // Axios POST isteği
      await axios.post("https://reqres.in/api/pizza ", orderData);
    
      // Sipariş başarılı ise yönlendirme
      alert("Siparişiniz başarıyla oluşturuldu!");
      history.push('/SiparisOnay', orderData); // Doğru yönlendirme
    } catch (error) {
      console.error("Sipariş oluşturulurken hata oluştu:", error);
      alert("Sipariş oluşturulamadı. Lütfen tekrar deneyiniz.");
    }
    
  };

  return (
    <>
    <Heading>
      <Content>
      <img src={hommer}  />
          <Title>{productDetails.name}</Title>
      <Price>{BASE_PRICE}₺</Price>
      <RatingContainer>
        <Rating>{productDetails.ratio} ⭐</Rating>
        <ReviewCount>({productDetails.subscribe})</ReviewCount>
      </RatingContainer>
      <Description>{productDetails.description}</Description>
    </Content>
    </Heading>
    <Container>
      <form onSubmit={(e) => e.preventDefault()}>
          <SelectionContainer>
      <Section>
        <SectionTitle>Boyut Seç</SectionTitle>
        <SelectionOption>
          <input
            type="radio"
            name="size"
            value="S"
            onChange={(e) => setSize(e.target.value)}
          />
        S
        </SelectionOption>
        <SelectionOption>
          <input
            type="radio"
            name="size"
            value="M"
            onChange={(e) => setSize(e.target.value)}
          />
         M
        </SelectionOption>
        <SelectionOption>
          <input
            type="radio"
            name="size"
            value="BüLyük"
            onChange={(e) => setSize(e.target.value)}
          />
        L
        </SelectionOption>
      </Section>

      <Section>
        <SectionTitle>Hamur Seç</SectionTitle>
        <SelectionOption>
          <select
            value={dough}
            onChange={(e) => setDough(e.target.value)}
          >
            <option value="">--Hamur Kalınlığı Seç--</option>
            <option value="İnce">İnce</option>
            <option value="Normal">Normal</option>
            <option value="Kalın">Kalın</option>
          </select>
        </SelectionOption>
      </Section>
    </SelectionContainer>

    <ExtraContainer>
      <SectionTitle >Ek Malzemeler</SectionTitle>
      <ExtraNote>En Fazla 10 malzeme seçebilirsiniz. 5₺</ExtraNote>
      <ExtraList>
        {ekstraMalzemeler.map((extra) => (
          <CheckboxContainer key={extra}>
            <HiddenCheckbox
              type="checkbox"
              value={extra}
              onChange={handleExtraChange}
              checked={extras.includes(extra)}
            />
            <StyledCheckbox
              checked={extras.includes(extra)}
              onClick={() => handleExtraChange({ target: { value: extra } })}
            />
            <Label>{extra}</Label>
          </CheckboxContainer>
        ))}
      </ExtraList>
    </ExtraContainer>

        <NoteContainer>
          <SectionTitle>Sipariş Notu</SectionTitle>
          <NoteInput
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Siparişinize not ekleyebilirsiniz..."
          />
        </NoteContainer>

        <InputContainer>
          <InputLabel>
            İsim <span>*</span>
          </InputLabel>
          <InputField
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Adınızı giriniz"
          />
        </InputContainer>

            <hr  style={{ width: "100%", height: ".5px", backgroundColor: "#ffffff", margin: " 10px 20px"}}/>
        <SummarySection>
          <QuantityControl>
            <QuantityButton onClick={() => handleQuantityChange("decrement")}>
              -
            </QuantityButton>
            <QuantityInput type="text" value={quantity} readOnly />
            <QuantityButton onClick={() => handleQuantityChange("increment")}>
              +
            </QuantityButton>
          </QuantityControl>

          <SummaryContainer>
            <SummaryTitle>Sipariş Toplamı</SummaryTitle>
            <PriceDetail>
              <span>Seçimler</span>
              <span>{extras.length *quantity* EXTRA_PRICE}₺</span>
            </PriceDetail>
            <PriceDetail className="total">
              <span>Toplam</span>
              <span>{calculateTotal().toFixed(2)}₺</span>
            </PriceDetail>
            
          </SummaryContainer>
          <OrderButton
              onClick={handleOrderSubmit}
              disabled={!isValidForm()}
            >
              SİPARİŞ VER
            </OrderButton>
        </SummarySection>
      </form>
    </Container>
    </>
  );
};

export default SiparisOlustur;
