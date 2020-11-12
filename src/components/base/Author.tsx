import React from "react";

import { Link } from "./Link";
import { Span } from "./Span";

export const Author = React.memo(() => (
  <Span>
    Made with ♥️ by&nbsp;
    <Link
      href="https://github.com/konradkeska"
      rel="noopener noreferer"
      target="_blank"
    >
      Konrad Kęska
    </Link>
    &nbsp;in 2020.
  </Span>
));
