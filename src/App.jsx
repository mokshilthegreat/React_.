import   React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/card";
import axios from "axios";

function App() {
  const [data,setData]= useState([])



  async function getData (){

    let response = await axios.get("https://fakestoreapi.com/products")


    setData(response.data)

  }

  useEffect(()=>{
    getData()
  },[])
  return (
   <div>
    <Navbar/>

    {data &&
      data.map((element,item)=>{

        return   <ProductCard  
        key={element.id}
            title={element.title}
            price={element.price}
            description={element.description}
            image={element.image } />
      })
    }

          

   </div>
  );
}

export default App;
