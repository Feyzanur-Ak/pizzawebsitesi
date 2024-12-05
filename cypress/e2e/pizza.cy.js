describe('Sipariş Oluştur Formu', () => {
  beforeEach(() => {
      cy.visit('http://localhost:5173/SiparisOlustur');

  });

  it('Zorunlu alanlar doldurulmadan "Sipariş Ver" butonu devre dışı olmalı', () => {
    cy.get('button')
      .contains('SİPARİŞ VER')
      .should('be.disabled'); // Buton devre dışı
  });

  it('Form doldurulduktan sonra "Sipariş Ver" butonu aktifleşmeli ve yönlendirme yapılmalı', () => {
    // İsim giriliyor
    cy.get('input[placeholder="Adınızı giriniz"]').type('Test Kullanıcısı');


    // Boyut seçiliyor
    cy.get('input[type="radio"][value="M"]').check();

    // Hamur seçiliyor
    cy.get('select').select('Normal');

    // En az 4 malzeme seçiliyor
      cy.get('input[type="checkbox"]').eq(0).check({ force: true });
      cy.get('input[type="checkbox"]').eq(1).check({ force: true });
      cy.get('input[type="checkbox"]').eq(2).check({ force: true });
      cy.get('input[type="checkbox"]').eq(3).check({ force: true });

    // Sipariş Ver butonu kontrolü
    cy.get('button')
      .contains('SİPARİŞ VER')
      .should('not.be.disabled') // Buton aktif
      .click(); // Tıklanıyor

    // Yönlendirme kontrolü
    cy.url().should('include', '/SiparisOnay'); // Yönlendirme doğrulaması
  });
});
