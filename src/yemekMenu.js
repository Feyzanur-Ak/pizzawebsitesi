import pizza1 from "./pictures/pizza-1.png";
import pizza2 from "./pictures/pizza-2.png";
import pizza3 from "./pictures/pizza-3.png";
import ramen1 from "./pictures/ramen-1.jpg";
import ramen2 from "./pictures/ramen-2.jpg";
import ramen3 from "./pictures/ramen-3.jpg";
import burger1 from "./pictures/burger-1.jpg";
import burger2 from "./pictures/burger-2.jpg";
import burger3 from "./pictures/burger-3.jpg";
import patates1 from "./pictures/patates1.jpg";
import patates2 from "./pictures/patates2.jpg";
import sogan1 from "./pictures/sogan1.jpg";
import tavuk1 from "./pictures/tavuk1.jpg";
import hotdog from "./pictures/hotdog.jpg";
import nugget from "./pictures/nugget.jpg";
import cola from "./pictures/cola.jpg";
import limonata from "./pictures/limonata.jpg";
import meyvesuyu from "./pictures/meyvesuyu.jpg";

const Menu = {
    Pizza: [
        {
            id: 1,
            name: "Sucuklu Mantarlı Pizza",
            image: pizza1,
            price: 19.99,
            subscribe: 200,
            ratio: 4.5,
            description: "Lezzetli sucuk dilimleri ve taze mantarların buluştuğu, özel soslarla zenginleştirilmiş bir İtalyan klasiği."
        },
        {
            id: 2,
            name: "Vejetaryan Pizza",
            image: pizza2,
            price: 25.99,
            subscribe: 149,
            ratio: 4.2,
            description: "Taptaze sebzeler ve özel soslarla hazırlanan, hafif ama doyurucu vejetaryan bir seçenek.Hafif doyurucu ve taptaze peynirden yapılmış harika bir lezzet"
        },
        {
            id: 3,
            name: "Hellim Peynirli Pizza",
            image: pizza3,
            price: 15.99,
            subscribe: 52,
            ratio: 4.7,
            description: "Hellim peynirinin eşsiz lezzetiyle hazırlanan, çıtır çıtır hamur üzerinde nefis bir deneyim."
        }
    ],
    Ramen: [
        {
            id: 4,
            name: "Tavuklu Ramen",
            image: ramen1,
            price: 12.99,
            subscribe: 180,
            ratio: 4.8,
            description: "Tavuk suyu bazlı nefis ramen, taze sebzeler ve haşlanmış yumurta ile."
        },
        {
            id: 5,
            name: "Vejetaryen Ramen",
            image: ramen2,
            price: 14.99,
            subscribe: 95,
            ratio: 4.6,
            description: "Sebze suyu ile yapılan hafif ve lezzetli ramen, taze sebzelerle."
        },
        {
            id: 6,
            name: "Deniz Ürünlü Ramen",
            image: ramen3,
            price: 18.99,
            subscribe: 120,
            ratio: 4.9,
            description: "Deniz mahsulleriyle zenginleştirilmiş özel ramen."
        }
    ],
    Burger: [
        {
            id: 7,
            name: "Cheeseburger",
            image: burger1,
            price: 9.99,
            subscribe: 300,
            ratio: 4.7,
            description: "Yumuşak ekmek arasında eritilmiş peynirle kaplı nefis bir burger."
        },
        {
            id: 8,
            name: "Double Beef Burger",
            image: burger2,
            price: 14.99,
            subscribe: 210,
            ratio: 4.8,
            description: "İki kat dana etiyle dolgun, doyurucu bir burger."
        },
        {
            id: 9,
            name: "Chicken Burger",
            image: burger3,
            price: 10.99,
            subscribe: 130,
            ratio: 4.5,
            description: "Kızarmış tavuk eti ve özel soslarla hazırlanan nefis bir burger."
        }
    ],
    FrenchFries: [
        {
            id: 10,
            name: "Klasik Patates Kızartması",
            image: patates1,
            price: 4.99,
            subscribe: 400,
            ratio: 4.8,
            description: "Altın renginde kızarmış, çıtır çıtır klasik patates kızartması."
        },
        {
            id: 11,
            name: "Baharatlı Patates Kızartması",
            image:  patates2,
            price: 5.49,
            subscribe: 220,
            ratio: 4.6,
            description: "Baharat karışımlarıyla tatlandırılmış enfes patates kızartması."
        },
        {
            id: 12,
            name: "Soğan Halkası",
            image:sogan1,
            price: 6.99,
            subscribe: 190,
            ratio: 4.4,
            description: "Çıtır çıtır kaplamasıyla sıcak ve lezzetli soğan halkaları."
        }
    ],
    FastFood: [
        {
            id: 13,
            name: "Tavuk Kanadı",
            image: tavuk1,
            price: 14.99,
            subscribe: 250,
            ratio: 4.7,
            description: "Lezzetli marinasyonla kızartılmış nefis tavuk kanatları."
        },
        {
            id: 14,
            name: "Hot Dog",
            image: hotdog,
            price: 7.99,
            subscribe: 150,
            ratio: 4.3,
            description: "Sosis, özel soslar ve taze ekmekle hazırlanan klasik hot dog."
        },
        {
            id: 15,
            name: "Tavuk Nugget",
            image: nugget,
            price: 8.99,
            subscribe: 180,
            ratio: 4.5,
            description: "Altın renginde kızarmış, çıtır tavuk parçaları."
        }
    ],
    SoftDrink: [
        {
            id: 16,
            name: "Cola",
            image: cola,
            price: 2.99,
            subscribe: 500,
            ratio: 4.8,
            description: "Buz gibi serinleten klasik bir içecek."
        },
        {
            id: 17,
            name: "Limonata",
            image: limonata,
            price: 3.49,
            subscribe: 320,
            ratio: 4.7,
            description: "Taze limonlarla hazırlanmış doğal ve ferahlatıcı limonata."
        },
        {
            id: 18,
            name: "Meyve Suyu",
            image:meyvesuyu,
            price: 3.99,
            subscribe: 280,
            ratio: 4.6,
            description: "Doğal meyvelerden elde edilmiş, sağlıklı ve lezzetli bir içecek."
        }
    ]
};

export default Menu;
