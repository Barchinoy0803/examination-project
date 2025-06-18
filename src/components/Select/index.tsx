import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useColor } from '../../api/features/hooks/useColors'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

interface SelectProps {
    setColor: React.Dispatch<React.SetStateAction<string>>,
    color: string
}

const CustomSelect = ({ setColor, color }: SelectProps) => {
    const { getColor } = useColor()
    const { data } = getColor

    return (
        <div>
            <FormControl sx={{ width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Color</InputLabel>
                <Select
                    className='w-[600px]'
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                >
                    {
                        data?.data?.map((item: any) => (
                            <MenuItem
                                key={item.id}
                                value={item.id}
                            >
                                {item.name}
                            </MenuItem>

                        ))
                    }
                </Select>
            </FormControl>
        </div>
    )
}

export default CustomSelect