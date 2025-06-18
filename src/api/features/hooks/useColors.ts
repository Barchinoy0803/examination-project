import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as Colors from "../service/colors";

export const useColor = () => {
    const queryClient = useQueryClient();

    const getColor = useQuery({
        queryKey: ["color"],
        queryFn: Colors.getColor
    });

    const createColor = useMutation({
        mutationFn: Colors.createColor,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["color"] });
        },
    });

    const deleteColor = useMutation({
        mutationFn: Colors.deleteColor,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['color'] })
        }
    })

    const updateColor = useMutation({
        mutationFn: Colors.updateColor,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['color'] })
        }
    })

    return { getColor, createColor, deleteColor, updateColor }
};
