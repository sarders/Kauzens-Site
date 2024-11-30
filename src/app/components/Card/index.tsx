export const Card = ({
  children,
  theme = "none",
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
  borderless = true,
  borderRadius,
  borderThickness,
}: {
  children: React.ReactNode;
  theme?: ThemeType;
  padding?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingX?: number;
  paddingY?: number;
  margin?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginX?: number;
  marginY?: number;
  borderless?: boolean;
  borderRadius?: number;
  borderThickness?: number;
}) => {
  return (
    <div
      style={{
        backgroundColor: getBackgroundColor(theme),
        paddingTop: paddingTop || paddingY || padding || 0,
        paddingRight: paddingRight || paddingX || padding || 0,
        paddingBottom: paddingBottom || paddingY || padding || 0,
        paddingLeft: paddingLeft || paddingX || padding || 0,
        marginTop: marginTop || marginY || margin || 0,
        marginRight: marginRight || marginX || margin || 0,
        marginBottom: marginBottom || marginY || margin || 0,
        marginLeft: marginLeft || marginX || margin || 0,
        borderRadius: borderRadius ? `${borderRadius}px` : "0",
        border: borderless ? "none" : `${borderThickness || 1}px solid #313131`,
      }}
    >
      {children}
    </div>
  );
};

type ThemeType = "none" | "light" | "midLight" | "midDark" | "dark";

const getBackgroundColor = (theme: ThemeType) => {
  switch (theme) {
    case "light":
      return "#fff";
    case "midLight":
      return "#e8e8e8";
    case "midDark":
      return "#222";
    case "dark":
      return "#1a1a1a";
    default:
      return "transparent";
  }
};
