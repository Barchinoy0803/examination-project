import { FormEvent, memo, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import { usePhone } from '../../api/features/hooks/usePhones'
// import { useSelector } from "react-redux"
// import { RootState } from '../../redux'

const CreateProduct = () => {
    // const phones = useSelector((state: RootState) => state.phones)

    const [title, setTitle] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [image, setImage] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const { createPhone } = usePhone()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let body = {
            title: title,
            price: price,
            image: image,
            description: description,
            // colorId: "uytruewtewtrewyew"
        }
        console.log(body);

        createPhone.mutate(body)
        setTitle("")
        setPrice(0)
        setDescription("")
        setImage("")
    }


    return (
        <div >
            <h1 className='my-6 text-[24px] text-[#427DC0] font-bold'>Create Products</h1>
            <form onSubmit={handleSubmit} action="" className='flex flex-col gap-6'>
                <TextField onChange={(e) => setTitle(e.target.value)} value={title} className='w-[600px]' id="outlined-basic" label="Title" variant="outlined" />
                <TextField onChange={(e) => setPrice(Number(e.target.value))} value={price} type='number' className='w-[600px]' id="outlined-basic" label="Price" variant="outlined" />
                <TextField onChange={(e) => setImage(e.target.value)} value={image} className='w-[600px]' id="outlined-basic" label="Image-url" variant="outlined" />
                <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                <TextField onChange={(e) => setDescription(e.target.value)} value={description} className='w-[600px]' multiline minRows={5} id="outlined-basic" label="Description" variant="outlined" />
                <Button type='submit' className='w-[200px]' variant='contained'>Create</Button>
            </form>
        </div>
    )
}


export default memo(CreateProduct)