import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register } = useForm();
  console.log(register("name"));
  return (
    <form>
      <input
        {...register("username")}
        type="text"
        placeholder="Username"
        required
      />
      <input {...register("email")} type="text" placeholder="Email" />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
