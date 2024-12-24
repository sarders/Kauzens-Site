import { css } from "../../../../styled-system/css";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className={css({ fontSize: "9xl", color: "red" })}>
      {children}
    </button>
  );
};
