import { useState } from "react";
import GoogleBtn from "./GoogleBtn";
import { Button } from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import chevronLeft from "@/assets/chevron-left.svg";
import InputGroup from "../ui/InputGroup";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm, UseFormRegister, FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import Loader from "../ui/Loader";

const schema = z.object({
  name: z.string(),
  username: z.string().min(5, "must be at least 5 charcters long").max(255, "must be at least 255 characters long"),
  password: z
    .string()
    .regex(/.*[A-Z].*/, "must contain at least one uppercase letter")
    .regex(
        /.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-].*/,
        "must contain at least one special character"
    )
    .min(8, "must be at least 8 characters long")
    .max(256, "must be at most 256 characters long"),
  email: z.string().email("invalid email")
});
type SchemaType = z.infer<typeof schema>;
function SignupForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [agreed, setAgreed] = useState<boolean>(false);
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });
  function onSubmit(data: SchemaType) {
    setIsLoading(true);
    try {
      console.log(data);
      // make axios request here
      setTimeout(() => {
        navigate("/dashboard/1234");
      }, 2000);
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="sm:w-full relative w-[90%] max-w-[24rem] mt-[40px] lg:mt-0 flex flex-col mx-auto lg:mx-0 justify-center font-inter space-y-4">
      {page === 2 && (
        <Button
          size="icon"
          variant="outline"
          className="rounded-full left-0 -top-[40px] lg:top-12 absolute lg:-left-[4rem]"
          onClick={() => setPage(1)}
        >
          {" "}
          <img src={chevronLeft} alt="chevron left" />
          <span className="sr-only">back</span>
        </Button>
      )}
      <h1 className="text-2xl font-semibold leading-6 !mb-7 text-center lg:text-left">
        Sign up to LectureDeck
      </h1>
      {page === 1 ? (
        <PreviewPage setPage={setPage} />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex items-center gap-3">
            <InputGroup
              id="name"
              label="name"
              inputType="text"
              error={errors["name"]}
              disabled={isLoading}
              register={register as unknown as UseFormRegister<FieldValues>}
            />
            <InputGroup
              id="username"
              label="username"
              inputType="text"
              error={errors["username"]}
              disabled={isLoading}
              register={register as unknown as UseFormRegister<FieldValues>}
            />
          </div>
          <InputGroup
            id="email"
            label="email"
            inputType="email"
            register={register as unknown as UseFormRegister<FieldValues>}
            disabled={isLoading}
            error={errors["email"]}
          />
          <InputGroup
            id="password"
            label="password"
            inputType="password"
            register={register as unknown as UseFormRegister<FieldValues>}
            disabled={isLoading}
            error={errors["password"]}
          />
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="terms-service"
              name="terms-service"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="h-4 w-4 cursor-pointer mt-[0.2rem]"
            />
            <p className="text-xs leading-loose text-[#667085] pt-0">
              I agree with LectureDeck's Terms of Service, Privacy Policy, and
              default Notification Settings.
            </p>
          </div>
          <Button
            disabled={!agreed || !isValid || isLoading}
            type="submit"
            className="w-full"
            size="lg"
          >
           {isLoading ? <Loader size={'sm'} variant="secondary"/> : "Create an Account"} 
          </Button>
        </form>
      )}
      <p className="text-sm leading-6 text-[#667085] text-center">
        Already have account{" "}
        <Link to="/login" className="underline">
          Sign in?
        </Link>{" "}
      </p>
    </div>
  );
}
type PreviewProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
function PreviewPage({ setPage }: PreviewProps) {
  return (
    <section className="max-w-[24rem] flex flex-col justify-center  !mt-10">
      <GoogleBtn black disabled={false} />
      <div className="flex items-center gap-2  max-w-[24rem] my-6">
        <hr className="w-[50%] border-t-2 border-[#667085]" />
        <p className="leading-6 min-w-fit flex-shrink-0 text-sm text-center text-[#667085]">
          or
        </p>
        <hr className="w-[50%] border-t-2 border-[#667085]" />
      </div>
      <Button variant="outline" size="lg" onClick={() => setPage(2)}>
        Continue with email
      </Button>
      <div className="text-center my-8">
        <p className="text-[#667085] text-xs leading-normal">
          By creating an account you agree with our{" "}
          <span className="underline">Terms of Service</span>, Privacy Policy,
          and our default Notification Settings.
        </p>
      </div>
    </section>
  );
}
export default SignupForm;
