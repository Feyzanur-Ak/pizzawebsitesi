import axios from "axios";
import{ useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import hommer from "../pictures/form-banner.png";
import {Container, Heading, Content, Title, Price, RatingContainer, Rating, ReviewCount, Description, SelectionContainer,Section, SectionTitle, SelectionOption, ExtraContainer, ExtraList, ExtraNote, NoteContainer, NoteInput, InputContainer, InputLabel, InputField, SummarySection, SummaryContainer, SummaryTitle, PriceDetail, QuantityControl, QuantityButton, QuantityInput, OrderButton, CheckboxContainer, HiddenCheckbox, StyledCheckbox, Label} from   "./SiparisOlustur.js"


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
