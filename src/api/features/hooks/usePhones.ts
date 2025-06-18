import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as Phones from "../service/phones";

export const usePhone = () => {
    const queryClient = useQueryClient();

    const getPhones = useQuery({
        queryKey: ["phone"],
        queryFn: Phones.getPhones,
    });

    const createPhone = useMutation({
        mutationFn: Phones.createPhone,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["phone"] });
        },
    });

    const deletePhone = useMutation({
        mutationFn: Phones.deletePhone,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['phone'] })
        }
    })

    const updatePhone = useMutation({
        mutationFn: Phones.updatePhone,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['phone'] })
        }
    })

    return { getPhones, createPhone, deletePhone, updatePhone }
};
