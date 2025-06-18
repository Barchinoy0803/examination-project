import { FormEvent, memo, useState } from 'react'
import { useColor } from '../../api/features/hooks/useColors'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { FaTrashAlt } from "react-icons/fa";

const Color = () => {
    const [title, setTitle] = useState<string>("")

    const { getColor, createColor, deleteColor } = useColor()
    const { data } = getColor

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let body = {
            name: title,
        }
        console.log(body);

        createColor.mutate(body)
        setTitle("")
    }

    const handleDelete = (id: string) => {
        deleteColor.mutate(id)
    }

    return (
        <div className='mt-5 flex flex-col gap-5'>
            <Typography className='text-[#427DC0]' variant='h4'>Color</Typography>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3' action="">
                <TextField onChange={(e) => setTitle(e.target.value)} value={title} className='w-[600px]' id="outlined-basic" label="Title" variant="outlined" />
                <Button type='submit' className='w-[200px]' variant='contained'>Create</Button>
            </form>

            <div className='container mx-auto flex flex-wrap gap-4 my-6'>
                {
                    data?.data?.map((color: any) => (
                        <div className='flex items-center justify-between  w-[200px] p-4 shadow-md shadow-gray-300 rounded-[5px]'>
                            <span>{color.name}</span>
                            <FaTrashAlt onClick={() => handleDelete(color.id)} className='text-[#427DC0]' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default memo(Color)