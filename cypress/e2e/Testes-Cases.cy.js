describe("Testes visualização dos projetos", () => {
  it("Clicar e visualizar os projetos da home", () => {
    cy.visit("");
    cy.get(
      ".jet-listing-dynamic-post-245 > .jet-engine-listing-overlay-wrap > .elementor > .elementor-element-a4d66a5 > .e-con-inner"
    ).click();
    cy.get(
      ".elementor-element-cac4009 > .elementor-widget-container > .elementor-heading-title"
    ).should("be.visible");
  });

  it("visualizar mais projetos quando clicar em veja mais cases", () => {
    cy.visit("");
    cy.get(
      ".elementor-element-194e9fe > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text"
    ).click();
    cy.get(
      ".elementor-element-4e4d8ef > .elementor-element > .elementor-widget-container > .elementor-heading-title > .gradient-text2"
    ).should("be.visible");
  });
});
