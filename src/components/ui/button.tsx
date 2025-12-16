import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "gradient-primary text-white shadow-soft hover:shadow-glow hover:-translate-y-0.5",
        destructive: "bg-destructive text-white hover:bg-destructive/90 shadow-soft",
        outline: "border-2 border-primary/30 bg-white/50 backdrop-blur-sm text-primary hover:bg-primary/10 hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-soft",
        ghost: "hover:bg-primary/10 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        // Custom variants for the platform
        icon: "glass-card text-foreground hover:shadow-medium hover:-translate-y-1 min-h-[56px] min-w-[56px] rounded-2xl",
        voice: "gradient-primary text-white shadow-glow animate-glow min-h-[72px] min-w-[72px] rounded-full hover:shadow-[0_0_50px_hsl(262_83%_75%_/_0.5)]",
        success: "gradient-accent text-white shadow-soft hover:shadow-glow-emerald hover:-translate-y-0.5",
        card: "glass-card text-card-foreground hover:shadow-medium hover:-translate-y-1 flex-col h-auto py-4 px-6",
        emergency: "bg-destructive text-white shadow-soft hover:shadow-[0_0_30px_hsl(0_72%_60%_/_0.4)] border-0",
      },
      size: {
        default: "h-14 px-6 py-3",
        sm: "h-10 rounded-xl px-4 text-sm",
        lg: "h-16 rounded-2xl px-8 text-lg",
        xl: "h-20 rounded-3xl px-10 text-xl",
        icon: "h-14 w-14",
        "icon-lg": "h-16 w-16",
        "icon-xl": "h-20 w-20",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };