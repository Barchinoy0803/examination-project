import { FormEvent, memo, useEffect, useMemo, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { usePhone } from '../../api/features/hooks/usePhones'
import { useSelector } from "react-redux"
import { RootState } from '../../redux'
import { useParams } from 'react-router-dom'
import CustomSelect from '../../components/Select'

const CreateProduct = () => {
    const { id } = useParams()
    const [color, setColor] = useState<string>("")
    const { phone } = useSelector((state: RootState) => state.phones)

    const [title, setTitle] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [image, setImage] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const { createPhone, updatePhone } = usePhone()


    const isCreateAction = useMemo(() => {
        return id === ":new"
    }, [id])

    useEffect(() => {
        if (!isCreateAction) {
            const { title, description, image, price, colorId } = phone
            setTitle(title)
            setPrice(price)
            setDescription(description)
            setImage(image)
            setColor(colorId!)
        }
    }, [isCreateAction, phone])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let body = {
            title,
            price,
            image,
            description,
        }
        console.log(isCreateAction);

        if (isCreateAction) {
            createPhone.mutate(body)
        } else {
            if (id) {
                updatePhone.mutate({ id, body })
            }
        }

        setTitle("")
        setPrice(0)
        setDescription("")
        setImage("")
    }


    return (
        <div >
            <h1 className='my-6 text-[24px] text-[#427DC0] font-bold'>{isCreateAction ? "Create Phones" : "Update Phones"}</h1>
            <form onSubmit={handleSubmit} action="" className='flex flex-col gap-6'>
                <TextField onChange={(e) => setTitle(e.target.value)} value={title} className='w-[600px]' id="outlined-basic" label="Title" variant="outlined" />
                <TextField onChange={(e) => setPrice(Number(e.target.value))} value={price} type='number' className='w-[600px]' id="outlined-basic" label="Price" variant="outlined" />
                <TextField onChange={(e) => setImage(e.target.value)} value={image} className='w-[600px]' id="outlined-basic" label="Image-url" variant="outlined" />
                <CustomSelect setColor={setColor} color={color}/>
                <TextField onChange={(e) => setDescription(e.target.value)} value={description} className='w-[600px]' multiline minRows={5} id="outlined-basic" label="Description" variant="outlined" />
                <Button type='submit' className='w-[200px]' variant='contained'>{isCreateAction ? "Create" : "Update"}</Button>
            </form>
        </div>
    )
}


export default memo(CreateProduct)