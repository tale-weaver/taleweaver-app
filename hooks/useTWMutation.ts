import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "../components/ui/use-toast";

export function useTWMutation<T>(
  endpoint: string,
  successFn?: (variables: any, data: any) => void,
  errorFn?: (variables: any, error: any) => void
) {
  const { toast } = useToast();
  const backend_url = "http://127.0.0.1:5000/";

  const mutation = useMutation({
    mutationFn: async (data: T) => {
      console.log(`${backend_url}${endpoint}`);
      return await axios.post(`${backend_url}${endpoint}`, data);
    },
    onSettled(data, error, variables) {
      if (error) {
        toast({
          title: "Error",
          description:
            (error as any).response?.data?.message || "An error occurred",
          variant: "destructive",
        });
        errorFn && errorFn(variables, error);
      } else {
        toast({
          title: "Success",
          description: data?.data?.message || "Operation successful",
        });
        successFn && successFn(variables, data);
      }
    },
  });

  return mutation;
}
