import styles from "./typography.module.css";

export const Typography = ({
  component,
  variant,
  children,
  textAlign,
  fontSize,
  color,
}: {
  component?: ComponentType;
  variant: VariantType;
  children: React.ReactNode;
  textAlign?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
  fontSize?: number;
  color?: ColorType;
}) => {
  const TextHtmlTag = component
    ? (component as keyof JSX.IntrinsicElements)
    : (mapVariantToComponent(variant) as keyof JSX.IntrinsicElements);

  return (
    <TextHtmlTag
      style={{
        textAlign: textAlign,
        fontSize: fontSize,
        color: mapColorToHex(color),
      }}
      className={styles[variant]}
    >
      {children}
    </TextHtmlTag>
  );
};

const mapVariantToComponent = (variant: VariantType) => {
  if (variant[0] === "h") {
    return variant as ComponentType;
  } else if (variant.includes("body")) {
    return "p" as ComponentType;
  } else if (variant === "caption") {
    return "span" as ComponentType;
  }
};

const mapColorToHex = (color?: ColorType) => {
  if (color === "primary") {
    return "#1a1a1a";
  }
  if (color === "secondary") {
    return "#515151";
  }
  if (color === "tertiary") {
    return "#464646";
  }
  if (color) {
    return color;
  } else return undefined;
};

type ColorType = "primary" | "secondary" | "tertiary" | `#${string}`;
type ComponentType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type VariantType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "body3"
  | "body4"
  | "body5"
  | "caption";
