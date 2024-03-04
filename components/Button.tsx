import { Button as TButton, styled } from "tamagui";

export const Button = styled(TButton, {
  w: "$10",
  h: "$5",

  variants: {
    background: {
      normal: {
        bg: "$gray11Dark",
      },
      outline: {
        borderWidth: "$1",
        borderColor: "$gray11Dark",
      },
    },
  } as const,

  defaultVariants: {
    background: "normal",
  },
});
