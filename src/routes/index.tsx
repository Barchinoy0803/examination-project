import { useRoutes } from "react-router-dom"
import Home from "../pages/Home"
import CreateProduct from "../pages/CreateProduct"
import Phone from "../pages/Phone"
import Colors from "../pages/Colors"

const MainRouter = () => {
    return (
        useRoutes([
            {
                path: '/', element: <Home />,
                children: [
                    {
                        path: 'create-product', element: <CreateProduct />
                    },
                    {
                        path: 'phones', element: <Phone />,
                    },
                    {
                        path: 'colors', element: <Colors />,
                    }
                ]
            },
        ])
    )
}

export default MainRouter