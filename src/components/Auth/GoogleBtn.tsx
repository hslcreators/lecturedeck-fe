import toast from "react-hot-toast";
import { Button } from "../ui/Button";
import Google from "@/assets/Google.svg";
type Props = {
  black?: boolean;
  disabled: boolean;
};

function GoogleBtn({ black = false, disabled }: Props) {
  function handleClick() {
    toast.error("so sorry but google authentication has not been implemented!");
  }
  return (
    <Button
      className="gap-2"
      size="lg"
      onClick={handleClick}
      variant={black ? "secondary" : "outline"}
      disabled={disabled}
      type="button"
    >
      <img src={Google} alt="google logo" />
      Sign in with Google
    </Button>
  );
}

export default GoogleBtn;
