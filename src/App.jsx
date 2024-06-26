import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { TwoColorsPage } from "./pages/TwoColorsPage"
import { ScrollPage } from "./pages/ScrollPage"


export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/twoColorsPage" element={<TwoColorsPage/>}/>
      <Route path="/scrollPage" element={<ScrollPage/>}/>
    </Routes>
    </>
  )
}
