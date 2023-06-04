import { Route, Routes } from "react-router-dom";
import { Principal } from "./Web/Principal";
import { ContactForm } from "./Web/ContactForm";
import { HeaderHero } from "./Pages/Blog/Blog";



export function Router(){
  return(
    <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/Contact" element={<ContactForm />} />
        <Route path="/Blog" element={<HeaderHero />} />
    </Routes>
  )
}