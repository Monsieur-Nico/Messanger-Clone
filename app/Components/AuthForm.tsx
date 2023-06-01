"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./inputs/input";

type Variant = "LOGIN" | "REGISTER";

export default function AuthForm() {
  // States
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // Axios call
    }

    if (variant === "LOGIN") {
      // NextAuth
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    // NextAuth social sign in
  };

  return (
    <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
      <div className=" bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 ">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input id="name" label="Name" register={register} errors={errors} />
          )}
          <Input
            id="email"
            type="email"
            label="Email"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            type="password"
            label="Password"
            register={register}
            errors={errors}
          />
        </form>
      </div>
    </div>
  );
}
