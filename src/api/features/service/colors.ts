import { api } from "../..";

export const getColor = () => api.get("/colors")

export const createColor = (body: any) => api.post("/colors", body)

export const deleteColor = (id: any) => api.delete(`/colors/${id}`)

export const updateColor = ({ id, body }: { id: string, body: any }) => api.put(`colors/${id}`, body)
