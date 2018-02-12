import { renderToString } from "react-dom/server";
import React from "react";
import { createGenerateClassName } from "material-ui/styles";
import { SheetsRegistry } from "react-jss/lib/jss";
import JssProvider from "react-jss/lib/JssProvider";
import Button from "material-ui/Button";

function render() {
  const sheetsRegistry = new SheetsRegistry();
  const generateClassName = createGenerateClassName();

  const str = renderToString(
    <JssProvider
      registry={sheetsRegistry}
      generateClassName={generateClassName}
    >
      <Button>Default</Button>
    </JssProvider>
  );

  const css = sheetsRegistry.toString();

  console.log(css.length);
}

render();
render();
