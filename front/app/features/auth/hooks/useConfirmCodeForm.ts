import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { confirmCodeSchema } from "../types/formSchema";
import { z } from "zod";

export const useConfirmCodeForm = () => {
  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(confirmCodeSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof confirmCodeSchema>) => {
    console.log(value);
  };

  return { form, onSubmit };
};