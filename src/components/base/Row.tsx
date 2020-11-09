import React from "react";

export function Row({
  children,
  align = "center",
  justify = "center",
}: {
  children: React.ReactNode;
  align?: string;
  justify?: string;
}) {
  return (
    <div
      style={{ display: "flex", alignItems: align, justifyContent: justify }}
    >
      {children}
    </div>
  );
}
