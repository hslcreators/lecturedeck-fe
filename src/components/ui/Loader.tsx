import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const className =
  "rounded-full border-t-transparent  border-2 animate-spin";
const loaderVariants = cva(className, {
  variants: {
    variant : {
        default : "border-b-blue border-l-blue border-r-blue",
        secondary: "border-b-gray-100 border-l-gray-100 border-r-gray-100",
        black: "border-b-black border-l-black border-r-black"
    },
    size: {
      default: "h-10 w-10",
      sm: "h-6 w-6",
      lg: "h-16 w-16",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default"
  },
});
type Props = {
  withBackground?: boolean;
} & VariantProps<typeof loaderVariants> &
  React.HTMLAttributes<HTMLDivElement>;
function Loader({ withBackground=false, className, size, variant }: Props) {
  const Container = !withBackground ? React.Fragment : "div";
  return (
    <Container className="h-screen w-full fixed backdrop-blur-md flex items-center justify-center inset-0 transition-all delay-150 z-[999999999999999999]">
      <div className={cn(loaderVariants({ className, size, variant }))}></div>
    </Container>
  );
}

export default Loader;