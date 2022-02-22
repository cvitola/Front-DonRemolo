import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Pizza from "../pages/Pizza/Pizza"

const Router = () => {
    return (
            /* TODO: Definir las rutas del menu y que componentes renderizar... */
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/pizzas' element={<Pizza />} />
                {/*
                <Route path='/pizzas' element={<ShoppingCart />} />
                <Route path='/empanadas' element={<FormContact />} />
                <Route path='/postres' element={<FormContact />} />
                <Route path='/bebidas' element={<FormContact />} />
                */}
                <Route path='*' element={<Home />} />
            </Routes>

    )
}

export default Router