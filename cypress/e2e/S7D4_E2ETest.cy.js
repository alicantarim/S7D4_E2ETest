/* 
  VISIT URL
describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
  })
})
FIND
describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type')
  })
})
FIND & CLICK ON IT
describe('My First Test', () => {
  it('clicks the link "type"', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
  })
})
ASSERTION
describe('My First Test', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
  })
})
PROJECT DIRECTIONS
a) Başarılı form doldurulduğunda submit edebiliyorum:
success sayfasını açabiliyorum.
b) Hatalı durumlarda beklenen hata mesajları görünüyor ve buton disabled kalıyor.
email yanlış girdim:
ekranda 1 tane hata mesajı var
ekranda doğru hata mesajı var
buton disabled durumda
email ve password yanlış
ekranda 2 tane hata mesajı var
ekranda password hata mesajı var
email ve password doğru ama kuralları kabul etmedim.
buton disabled mı
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})
... cy.get('[data-cy="submit"]').click()
*/

/*
Test için erdem.guntay@wit.com.tr adresini 9fxIH0GXesEwH_I şifresini kullanabilirsin.
 */

// ---------------------------------------

// a) Başarılı form doldurulduğunda submit edebiliyorum:
// success sayfasını açabiliyorum.
describe("A template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");
    cy.get('[data-cy="email"]').type("erdem.guntay@wit.com.tr");
    cy.get('[data-cy="password"]').type("9fxIH0GXesEwH_I");
    // 2nd way--> cy.get('[data-cy="terms').click();
    cy.contains("I agree").click();
    cy.get('[data-cy="submit"]').click();
  });
});

/*
b) Hatalı durumlarda beklenen hata mesajları görünüyor ve buton disabled kalıyor.
  email yanlış girdim:
  ekranda 1 tane hata mesajı var
  ekranda doğru hata mesajı var
  buton disabled durumda
  email ve password yanlış
  ekranda 2 tane hata mesajı var
  ekranda password hata mesajı var
  email ve password doğru ama kuralları kabul etmedim.
  buton disabled mı
  describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
  })
})

/*
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "3000");
*/

describe("B template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");
    cy.get('[data-cy="email"]').type("erdem.gun@wit.com.tr");
    cy.get('[data-cy="password"]').type("9fxIH0GXesEwH_K");
  });
});
