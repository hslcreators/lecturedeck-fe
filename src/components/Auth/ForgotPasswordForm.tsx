import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/Button";
import Loader from "../ui/Loader";
import { useState } from "react";
import InputGroup from "../ui/InputGroup";
import { FieldValues, UseFormRegister, useForm } from "react-hook-form";
const schema = z.object({
  email: z.string().email("invalid email"),
});
type schemaType = z.infer<typeof schema>;
function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<schemaType>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });
  function onSubmit() {
    setIsLoading(true)
    try{
      setTimeout(() => {
        toast.success("check your email for further instructions!")
        setIsLoading(false)
      },4000)
    }catch(err){
      toast.error((err as Error).message);
    }
  }
  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="sm:w-full w-[90%] max-w-[24rem] flex flex-col mx-auto lg:mx-0 justify-center font-inter space-y-4"
    >
      <h1  className="text-2xl font-semibold leading-6 !mb-7 text-center lg:text-left">Forgot Password?</h1>
      <div className="!mb-5">
        <p  className="text-[13.5px] leading-6 text-[#667085] mb-3 ">
          Enter the email address you used when you joined and we’ll send you
          instructions to reset your password.
        </p>
        <p  className="text-[13.5px] leading-6 text-[#667085] ">
          For security reasons, we do NOT store your password. So rest assured
          that we will never send your password via email.
        </p>
      </div>
      <InputGroup
        id="email"
        label="Email Address"
        inputType="email"
        register={register as unknown as UseFormRegister<FieldValues>}
        disabled={isLoading}
        error={errors["email"]}
      />
        <Button disabled={!isValid || isLoading} className="w-full !mt-7" size="lg">
        {isLoading ? <Loader size="sm" variant="secondary" /> : "Send Reset Email"}
      </Button>
    </form>
  );
}

export default ForgotPasswordForm;
