export const Container = ({
  children,
  width,
  height,
  maxWidth,
  maxHeight,
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: {
  children: React.ReactNode;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  margin?: number;
  marginX?: number;
  marginY?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}) => {
  return (
    <div
      style={{
        width: `${width}` || "auto",
        height: `${height}` || "auto",
        maxWidth: `${maxWidth}` || "auto",
        maxHeight: `${maxHeight}` || "auto",
        marginLeft:
          `${marginLeft}px` || `${marginX}px` || `${margin}px` || "auto",
        marginRight:
          `${marginRight}px` || `${marginX}px` || `${margin}px` || "auto",
        marginTop:
          `${marginTop}px` || `${marginY}px` || `${margin}px` || "auto",
        marginBottom:
          `${marginBottom}px` || `${marginY}px` || `${margin}px` || "auto",
      }}
    >
      {children}
    </div>
  );
};
