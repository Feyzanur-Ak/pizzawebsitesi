import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

// Mevcut kodların devamı...

const SiparisOlustur = () => {
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [userName, setUserName] = useState("");

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
      await axios.post("https://your-api-endpoint.com/orders", orderData);

      // Sipariş başarılı ise yönlendirme
      alert("Siparişiniz başarıyla oluşturuldu!");
      window.location.href = "/siparis-onay";
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

      <Form onSubmit={(e) => e.preventDefault()}>
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

        <ExtraContainer>
          <SectionTitle>Ek Malzemeler</SectionTitle>
          <ExtraNote>En Fazla 10 malzeme seçebilirsiniz. 5₺</ExtraNote>
          <ExtraList>
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
          </ExtraList>
        </ExtraContainer>

        <NoteContainer>
          <SectionTitle>Sipariş Notu</SectionTitle>
          <NoteInput
            name="note"
            placeholder="Siparişinize not ekleyebilirsiniz..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
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
          {userName.length > 0 && userName.length < 3 && (
            <FormFeedback valid={false}>İsim en az 3 karakter olmalı.</FormFeedback>
          )}
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
      </Form>
    </Container>
  );
};

export default SiparisOlustur;
