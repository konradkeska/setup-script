import { SoftData, Soft } from "./types";

function formatData(records: SoftData[]): Soft[] {
  return records.map((cask) => ({
    ...cask,
    name: typeof cask.name === "string" ? cask.name : cask.name.join(" "),
  }));
}

export { formatData };
