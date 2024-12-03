describe('Sipariş Oluşturma Testi', () => {
  beforeEach(() => {
    // Test için bileşeni yükle
    cy.visit('/siparis-olustur'); // Bu URL, uygulamanın sipariş oluşturma sayfasına gitmelidir.
  });

  it('Zorunlu alanlar doldurulmadığında buton pasif olmalı', () => {
    // Başlangıçta "Sipariş Ver" butonunun pasif olmasını kontrol et
    cy.get('button').contains('SİPARİŞ VER').should('be.disabled');
  });

  it('Zorunlu alanlar doldurulduğunda ve seçimler yapıldığında buton aktif olmalı', () => {
    // Adı gir
    cy.get('input[type="text"]')
      .type('Feyzanur Ak')
      .should('have.value', 'Feyzanur Ak');
    
    // Boyut seç
    cy.get('input[type="radio"][value="Orta"]').check();
    
    // Hamur seç
    cy.get('select').select('İnce');
    
    // En az 4 ekstra malzeme seç
    cy.get('input[type="checkbox"]').check(['Pepperoni', 'Domates', 'Biber', 'Mısır']);
    
    // Butonun aktif olduğunu kontrol et
    cy.get('button').contains('SİPARİŞ VER').should('not.be.disabled');
  });

  it('Gerekli şartlar yerine getirilmediğinde buton pasif olmalı', () => {
    // Adı gir
    cy.get('input[type="text"]')
      .type('Ahmet Yılmaz')
      .should('have.value', 'Ahmet Yılmaz');
    
    // Boyut seç
    cy.get('input[type="radio"][value="Orta"]').check();
    
    // Hamur seç
    cy.get('select').select('İnce');
    
    // 3 ekstra malzeme seç (hatalı durum)
    cy.get('input[type="checkbox"]').check(['Pepperoni', 'Domates', 'Biber']);
    
    // Butonun pasif olduğunu kontrol et
    cy.get('button').contains('SİPARİŞ VER').should('be.disabled');
  });
});


