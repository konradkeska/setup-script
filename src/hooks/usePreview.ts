import { useState } from "react";

import { Preview } from "types";

type Return = [
  preview: Preview,
  toggleEditor: () => void,
  toggleScript: () => void
];

export function usePreview(): Return {
  const [preview, setPreview] = useState<Preview>(Preview.EDITOR);
  const toggleEditor = () => setPreview(Preview.EDITOR);
  const toggleScript = () => setPreview(Preview.SCRIPT);
  return [preview, toggleEditor, toggleScript];
}
