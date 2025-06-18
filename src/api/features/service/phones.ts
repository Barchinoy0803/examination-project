import { api } from "../..";

export const getPhones = () => api.get("/products")

export const createPhone = (body: any) => api.post("/products", body)

export const deletePhone = (id: any) => api.delete(`/products/${id}`)

export const updatePhone = ({ id, body }: { id: string, body: any }) => api.put(`products/${id}`, body)
