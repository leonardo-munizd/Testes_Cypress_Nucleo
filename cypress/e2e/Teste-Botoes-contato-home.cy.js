describe("Testes dos botões do site", () => {
  it("Ao clicar no primeiro botão da home, deve redirecionar para o contato do whatsapp", () => {
    cy.visit("");
    cy.get(
      ".elementor-element-36e7664 > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button"
    ).click();
    cy.get(
      ".elementor-element-36e7664 > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button"
    ).should(
      "have.attr",
      "href",
      "https://api.whatsapp.com/send/?phone=5554996391889&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.+Podem+me+ajudar%3F&type=phone_number&app_absent=0"
    );
  });

  it("Ao clicar no botão whatsapp, deve redirecionar para o contato do whatsapp", () => {
    cy.visit("");
    cy.get(".joinchat__button").click();
    cy.get(".joinchat__open").click();
    cy.get(".joinchat__close").click();
  });

  it("Ao clicar no terceiro botão, deve redirecionar para o contato do whatsapp ", () => {
    cy.visit("");
    cy.get(
      ".elementor-element-36e7664 > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button"
    ).click();
    cy.get(
      ".elementor-element-36e7664 > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button"
    ).should(
      "have.attr",
      "href",
      "https://api.whatsapp.com/send/?phone=5554996391889&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.+Podem+me+ajudar%3F&type=phone_number&app_absent=0"
    );
  });
});
