Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("ERR_ABORTED")) {
    return false;
  }
});

import "./commands";
