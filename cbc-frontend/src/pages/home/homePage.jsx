import { Route , Routes} from "react-router-dom";
import Header from "../../components/header";
import LoginPage from "../loginPage";
import ProductOverView from "./productOverView";
import ProductPage from "./product";
import Cart from "./cart";

export default function Homepage(){


    return(
        <div className="h-screen w-full">
            <Header/>

            <div className="w-full h-[calc(100vh-100px)] bg-slate-100">
                <Routes path="/*">
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/cart" element= {<Cart/>}/>
                <Route path="/products" element={<ProductPage/>}/>
                <Route path="/" element={<h1>Homepage</h1>}/>
                <Route path="/productInfo/:id" element={<ProductOverView/>}/>
                </Routes>
            
            </div>
            
        </div>
    )
}