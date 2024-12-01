import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

// Styled Components
const Container = styled.div`
  width: 30%;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 50px;
  margin-top: -40px;
`;

const Rating = styled.span`
  font-size: 16px;
  color: #666;
`;

const ReviewCount = styled.span`
  font-size: 14px;
  color: #666;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  margin-top: 10px;
`;

const SelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
`;

const Section = styled.div`
  flex: 1;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: bold;
`;

const ExtraContainer = styled.div`
  margin-top: 40px;
`;

const ExtraList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const ExtraNote = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #666;
`;

const NoteContainer = styled.div`
  margin-top: 20px;
`;

const NoteInput = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: none;
  margin-bottom: 20px;
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
`;

const SummaryContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const SummaryTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
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

  strong {
    font-size: 14px;
    color: #333;
  }
`;

const QuantityControl = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const QuantityButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  background-color: #fdc913;
  color: #292929;
  cursor: pointer;

  &:hover {
    background-color: #fbbd0b;
  }

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
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
  background-color: #fff;
  color: #333;
  border-radius: 0;
  box-shadow: none;

  &:focus {
    outline: none;
    border: 1px solid #ccc;
  }
`;

const OrderButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  background-color: #fdc913;
  color: #292929;
  cursor: pointer;

  &:hover {
    background-color: #fbbd0b;
  }

  &:disabled {
    background-color: #e0e0e0;
    color: #aaa;
    cursor: not-allowed;
  }
`;

// Main Component
const SiparisOlustur = () => {
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [userName, setUserName] = useState("");
  const history = useHistory();

  const EXTRA_PRICE = 5;
  const BASE_PRICE = 85.5;

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
  ];

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
    };

    try {
      // Axios POST isteği
      await axios.post("https://reqres.in/api/pizza ", orderData);
    
      // Sipariş başarılı ise yönlendirme
      alert("Siparişiniz başarıyla oluşturuldu!");
      history.push('/SiparisOnay'); // Doğru yönlendirme
    } catch (error) {
      console.error("Sipariş oluşturulurken hata oluştu:", error);
      alert("Sipariş oluşturulamadı. Lütfen tekrar deneyiniz.");
    }
    
  };

  return (
    <Container>
      <Title>Position Absolute Acı Pizza</Title>
      <Price>85.50₺</Price>
      <RatingContainer>
        <Rating>4.9</Rating>
        <ReviewCount>(200)</ReviewCount>
      </RatingContainer>
      <Description>
        Frontend dünyası hala position:absolute kullanıyorsan bu çok acı pizza tam sana
        göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
        daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta
        pişirilir, genellikle yuvarlak, düzeltilmiş mayalı buğday bazlı hamurdan oluşan
        İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
      </Description>

      <form onSubmit={(e) => e.preventDefault()}>
        <SelectionContainer>
          <Section>
            <SectionTitle>Boyut Seç *</SectionTitle>
            <div>
              <input
                type="radio"
                name="size"
                value="Küçük"
                onChange={(e) => setSize(e.target.value)}
              />{" "}
              Küçük
            </div>
            <div>
              <input
                type="radio"
                name="size"
                value="Orta"
                onChange={(e) => setSize(e.target.value)}
              />{" "}
              Orta
            </div>
            <div>
              <input
                type="radio"
                name="size"
                value="Büyük"
                onChange={(e) => setSize(e.target.value)}
              />{" "}
              Büyük
            </div>
          </Section>

          <Section>
            <SectionTitle>Hamur Seç *</SectionTitle>
            <select
              value={dough}
              onChange={(e) => setDough(e.target.value)}
            >
              <option value="">Hamur Kalınlığı</option>
              <option value="İnce">İnce</option>
              <option value="Normal">Normal</option>
              <option value="Kalın">Kalın</option>
            </select>
          </Section>
        </SelectionContainer>

        <ExtraContainer>
          <SectionTitle>Ek Malzemeler</SectionTitle>
          <ExtraNote>En Fazla 10 malzeme seçebilirsiniz. 5₺</ExtraNote>
          <ExtraList>
            {ekstraMalzemeler.map((extra) => (
              <div key={extra}>
                <input
                  type="checkbox"
                  value={extra}
                  onChange={handleExtraChange}
                  checked={extras.includes(extra)}
                />{" "}
                {extra}
              </div>
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
              <strong>{extras.length * EXTRA_PRICE}₺</strong>
            </PriceDetail>
            <PriceDetail className="total">
              <span>Toplam</span>
              <strong>{calculateTotal().toFixed(2)}₺</strong>
            </PriceDetail>
            <OrderButton
              onClick={handleOrderSubmit}
              disabled={!isValidForm()}
            >
              SİPARİŞ VER
            </OrderButton>
          </SummaryContainer>
        </SummarySection>
      </form>
    </Container>
  );
};

export default SiparisOlustur;
