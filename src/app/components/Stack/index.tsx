export const Stack = ({
  direction,
  justifyContent,
  alignItems,
  gap,
  children,
}: {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "center" | "flex-start" | "flex-end";
  gap?: number;
}) => {
  return (
    <div
      style={{
        gap: `${gap}px`,
        display: "flex",
        flexDirection: direction === "horizontal" ? "row" : "column",
        justifyContent: justifyContent || "flex-start",
        alignItems: alignItems || "center",
      }}
    >
      {children}
    </div>
  );
};
