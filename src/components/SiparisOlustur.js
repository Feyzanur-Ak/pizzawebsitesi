import styled from "styled-components";


 export const Container = styled.div`
  width: 32%;
  margin: 0 auto;
  font-family: "Roboto Condensed", sans-serif;

  @media (max-width: 768px) {
    width: 80%;
    padding-left: 20px;
  }
`;

export const Heading = styled.div`
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #faf7f2;
  justify-content: left;
  padding: 0 20px;
  width: 100%; 
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px; 
 
`;

export const Price = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin: 10px 0;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center; 
  gap: 10px; 
  margin-top: 10px;
`;

export const Rating = styled.span`
  font-size: 16px;

`;

export const ReviewCount = styled.span`
  font-size: 14px;
  color: #666;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #333;
  margin-top: 10px;
  width: 32%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  flex-wrap: wrap; /* Ekran küçüldüğünde, kutular alt alta sıralanabilir */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Section = styled.div`
  flex: 1;
  margin-right: 20px;
  display: flex;
  flex-direction: row; /* Yatay sıralama */
  align-items: center;
  justify-content: center;

  &:last-child {
    margin-right: 0;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex-direction: row; 
    flex-wrap: nowrap; 
  
  }

`;

export const SectionTitle = styled.h3`
margin-top: 10px;
  font-weight: bold;
  color: black,;  
  text-align:left;
  
`;


export const SelectionOption = styled.div`
  display: inline-block;
  margin-right: 10px;

  input[type="radio"] {
    display: none; /* Varsayılan radio butonunu gizler */
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px; /* Kutunun genişliği */
    height: 50px; /* Kutunun yüksekliği */
    border: 2px solid white; /* Kutunun sınırı */
    border-radius: 50%; /* Tam daire */
    background-color: #faf7f2; /* Varsayılan arka plan rengi */
    font-size: 16px; /* Harf boyutu */
    font-weight: bold;
    cursor: pointer; /* Tıklanabilir işaretçisi */
    color: #333; /* Harf rengi */
    margin: 5px;

    &:hover {
      background-color: #f5e8d9; /* Hover sırasında arka plan rengi */
    }
  }

  input[type="radio"]:checked + label {
    background-color: #f5e8d9; /* Seçili durumdaki arka plan rengi */
    border-color: white; /* Seçili durumdaki sınır rengi */
    color: #292929; /* Seçili durumdaki yazı rengi */
  }

`;


export const SelectionOption1 = styled.div`
     display: inline-block;
    margin-right: 10px;

  select {
    width: 250px; /* Genişlik */
    padding: 10px; /* İç boşluk */
    font-size: 16px; /* Yazı boyutu */
    border: 1px solid #ddd; /* Sınır */
    border-radius: 8px; /* Köşeleri yuvarlama */
    background-color: #faf7f2; /* Arka plan rengi */
    color: #333; /* Yazı rengi */
    appearance: none; /* Varsayılan ok simgesini kaldırır */
    outline: none; /* Odaklanınca mavi sınırı kaldırır */
    cursor: pointer; /* İşaretçi */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Hafif gölge */
  }
  `;

export const ExtraContainer = styled.div`
  margin-top: 40px;
`;

export const ExtraList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: repeat(5, auto); 
  gap: 15px;
  max-height: 300px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ExtraNote = styled.p`
font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`;

export const NoteContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 40%;
  }
`;

export const NoteInput = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: none;
  margin-bottom: 20px;
  background-color: #faf7f2;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
  
`;

export const InputLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  

  span {
    color: red;
  }
`;

export const InputField = styled.input`
 background-color: #faf7f2;
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const SummarySection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SummaryContainer = styled.div`
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


export const SummaryTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #333;
`;

export const PriceDetail = styled.div`
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

export const QuantityControl = styled.div`
  width: 100%;
  margin-top: 50px;
 

  @media (max-width: 768px) {
    margin-top: 20px;    
  }
`;

export const QuantityButton = styled.button`
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

export const QuantityInput = styled.input`
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

export const OrderButton = styled.button`
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

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const StyledCheckbox = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 4px;
  background-color: ${(props) => (props.checked ? '#FDC913' : '#faf7f2')};
  border: 2px solid ${(props) => (props.checked ? '#FDC913' : '#ccc')};
    display: flex;
    align-items: center;
    justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 10px;

  &::after {
    content: ${(props) => (props.checked ? `"✓"` : '""')};
    color: black;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  cursor: pointer;
`;