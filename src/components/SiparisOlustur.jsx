import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, FormFeedback } from "reactstrap";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 20px;
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
  margin-top: 20px;
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

const SummaryContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #f9f9f9;
`;

const SummaryTitle = styled.h3`
  margin: 0 0 20px 0;
`;

const PriceDetail = styled.p`
  margin: 0 0 10px 0;
  font-size: 14px;

  &.total {
    color: red;
    font-weight: bold;
    margin: 0 0 20px 0;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

const OrderButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  background-color: #f90;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #e88b00;
  }
`;

// Main Component
const SiparisOlustur = () => {
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);

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

  return (
    <Container>
      <h1>Position Absolute Acı Pizza</h1>
      <p>85.50₺</p>
      <p>
        Frontend dünyası hala position:absolute kullanıyorsan bu çok acı pizza tam sana
        göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış...
      </p>

      <Form>
        {/* Boyut Seç and Hamur Seç */}
        <SelectionContainer>
          <Section>
            <SectionTitle>Boyut Seç *</SectionTitle>
            <FormGroup>
              <Input
                type="radio"
                id="size-small"
                name="size"
                value="Küçük"
                onChange={(e) => setSize(e.target.value)}
              />
              <Label for="size-small">Küçük</Label>
            </FormGroup>
            <FormGroup>
              <Input
                type="radio"
                id="size-medium"
                name="size"
                value="Orta"
                onChange={(e) => setSize(e.target.value)}
              />
              <Label for="size-medium">Orta</Label>
            </FormGroup>
            <FormGroup>
              <Input
                type="radio"
                id="size-large"
                name="size"
                value="Büyük"
                onChange={(e) => setSize(e.target.value)}
              />
              <Label for="size-large">Büyük</Label>
            </FormGroup>
          </Section>

          <Section>
            <SectionTitle>Hamur Seç *</SectionTitle>
            <Input
              type="select"
              name="dough"
              onChange={(e) => setDough(e.target.value)}
            >
              <option value="">Hamur Kalınlığı</option>
              <option value="İnce">İnce</option>
              <option value="Normal">Normal</option>
              <option value="Kalın">Kalın</option>
            </Input>
          </Section>
        </SelectionContainer>

        {/* Ek Malzemeler */}
        <ExtraContainer>
          <SectionTitle>Ek Malzemeler (5₺)</SectionTitle>
          {ekstraMalzemeler.map((extra) => (
            <FormGroup check key={extra}>
              <Label check>
                <Input
                  type="checkbox"
                  value={extra}
                  onChange={handleExtraChange}
                  checked={extras.includes(extra)}
                />
                    {extra}
              </Label>
              </FormGroup>
            ))}
            {extras.length >= 10 && <FormFeedback >En fazla 10 adet Ek Malzeme Seçebilirsiniz</FormFeedback>}
        </ExtraContainer>

        {/* Sipariş Notu */}
        <NoteContainer>
          <SectionTitle>Sipariş Notu</SectionTitle>
          <NoteInput
            name="note"
            placeholder="Siparişinize not ekleyebilirsiniz..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </NoteContainer>
          
        {/* Sipariş Özeti */}
        <QuantityControl  >
            <Button onClick={() => handleQuantityChange("decrement")}>-</Button>
            <QuantityInput type="text" value={quantity} readOnly />
            <Button onClick={() => handleQuantityChange("increment")}>+</Button>
          </QuantityControl>

        <SummaryContainer>
          <SummaryTitle>Sipariş Toplamı</SummaryTitle>
          <PriceDetail>
            <strong>Seçimler:</strong> {extras.length * EXTRA_PRICE}₺
          </PriceDetail>
          <PriceDetail className="total">
            <strong>Toplam:</strong> {calculateTotal().toFixed(2)}₺
          </PriceDetail>

        </SummaryContainer>

        {/* Sipariş Ver Butonu */}
        <OrderButton>Sipariş Ver</OrderButton>
      </Form>
    </Container>
  );
};

export default SiparisOlustur;
