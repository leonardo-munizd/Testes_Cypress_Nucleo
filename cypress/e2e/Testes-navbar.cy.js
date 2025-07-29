describe("Testar os componentes da barra de navegação", () => {
  it("teste menu hamburguer, de abrir o menu e mostrar mais opções", () => {
    cy.visit("");
    cy.get(".elementor-element-7cbf67a > .elementor-widget-container").click();
    cy.get(".elementor-element-17e177b7 > .e-con-inner").should("be.visible");
  });

  it("teste Botão navbar, deve redirecionar para o whatsapp", () => {
    cy.visit("");
    cy.get(
      ".elementor-element-388ec9a9 > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button"
    ).click();
    cy.get(
      ".elementor-element-388ec9a9 > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button"
    ).should(
      "have.attr",
      "href",
      "include",
      "https://api.whatsapp.com/send/?phone=5554996391889&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.+Podem+me+ajudar%3F&type=phone_number&app_absent=0"
    );
  });
});
