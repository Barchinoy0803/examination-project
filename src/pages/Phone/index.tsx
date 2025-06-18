import { memo } from 'react'
import { usePhone } from '../../api/features/hooks/usePhones'
import { FaTrashAlt } from "react-icons/fa";
import { RiEditLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPhone } from '../../redux/features/phone.slice';

const Phones = () => {
  const navigate = useNavigate()
  const { getPhones, deletePhone } = usePhone()
  const { data } = getPhones

  const dispatch = useDispatch()

  const handleDelete = (id: string) => {
    deletePhone.mutate(id)
  }

  const handleUpdate = (phone: any) => {
    dispatch(setPhone(phone))
    navigate(`/product/${phone.id}`)
  }

  return (
    <div className='container mx-auto flex flex-wrap gap-3 mt-[30px] h-[95vh] overflow-y-scroll'>
      {
        data?.data?.map((phone: any) => (
          <div className='w-[300px] h-[350px] shadow-gray-200 shadow-lg rounded-[10px] overflow-hidden'>
            <img className='w-full h-[250px]' src={phone.image} alt="" />
            <div className='flex flex-col gap-3 p-3'>
              <h1>{phone.title}</h1>
              <div className='flex justify-between items-center'>
                <span>{phone.price} USD</span>
                <div className='flex gap-6 text-2xl'>
                  <RiEditLine onClick={() => handleUpdate(phone)} className='text-[#427DC0]' />
                  <FaTrashAlt onClick={() => handleDelete(phone.id)} className='text-red-500' />
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default memo(Phones)