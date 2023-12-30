import { SignupForm, FormLayout } from "@/components/Auth";
import authBg2 from "@/assets/auth-bg-2.png"
export default function Signup() {
  return (
   <FormLayout
    imageUrl={authBg2}
    alt="minecraft village"
   >
    <SignupForm/>
   </FormLayout>
  );
}
