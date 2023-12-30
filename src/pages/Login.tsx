import { FormLayout, LoginForm } from "@/components/Auth";
import authBg1  from "@/assets/auth-bg-1.png";
export default function Login() {
  return (
  <FormLayout
    imageUrl={authBg1}
    alt="triangle head warrior holding a sword"
  >
    <LoginForm/>
  </FormLayout>
  );
}
