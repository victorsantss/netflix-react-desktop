import { InputStyled } from "./input.styled";

// interface InputProps {
//   type: string;
//   email: string;
//   placeholder: string;
//   handleChange: () => void;
// }

export default function Input(props: any) {
  return <InputStyled {...props} />;
}
