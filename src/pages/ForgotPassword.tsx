import { ForgotPasswordForm, FormLayout } from "@/components/Auth";
import authBg2 from "@/assets/auth-bg-2.png"
function ForgotPassword() {
  return (
    <FormLayout
    imageUrl={authBg2}
    alt="minecraft village"
   >
    <ForgotPasswordForm/>
   </FormLayout>
  )
}

export default ForgotPassword