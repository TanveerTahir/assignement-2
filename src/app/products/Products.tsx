import Image from "next/image";

const Products = () =>{ 
    return(
        <div className="flexbox items-center justify-center bg-black">
            <h1 className="text-white text-center font-bold text-5xl justify-center pt-10">One Stop Solution</h1>

            <div className="flex flex-wrap justify-center md:p-4">

{/* product 1 */}
<div className="w-full sm:w-1/2 md-1/2 lg:w-1/3 pt-5 my-20">
        <div className="bg-slate-400 rounded ">
            <div>
        <Image className="justify-self-center pt-5"
        src="/images/product1.webp" 
         alt="product-1"
         width={200}
         height={200}
         title="Apple iphone 16 Pro-Max"/>
         </div>
         
         
         {/* text area */}
         
            <h1 className="font-bold text-center mt-5">Apple iPhone 16 Pro Max <br /> Approved</h1>
            <p className="text-center mt-5">469,999 PKR</p>
            <div className="flex justify-center py-5">
            <button className="bg-sky-500 rounded px-5 text-white">Buy Now</button>
           </div>
         </div>
        </div>
        

        {/* 2nd product */}
        <div className="w-full sm:w-1/2 md-1/2 lg:w-1/3 pt-5 my-20">
        <div className="bg-slate-400 rounded ">
            <div className=" flex items-center justify-center">
        <Image className="justify-self-center pt-5"
        src="/images/product2.webp" 
         alt="product-2"
         width={200}
         height={200}
         title="ASUS ROG Strix G-16"/>
         </div>
         
         
         {/* text area */}
         
            <h1 className="font-bold text-center mt-5">ASUS ROG Strix G16 Core i7 <br />13th Generation</h1>
            <p className="text-center mt-5">435,000 PKR</p>
            <div className="flex justify-center py-5">
            <button className="bg-sky-500 rounded px-5 text-white">Buy Now</button>
           </div>
         </div>
        </div>

        
        

        {/* 3rd product */}
        <div className="w-full sm:w-1/2 md-1/2 lg:w-1/3 pt-5 my-20">
        <div className="bg-slate-400 rounded ">
            <div className=" flex items-center justify-center">
        <Image className="justify-self-center pt-5"
        src="/images/product3.webp" 
         alt="product-3"
         width={200}
         height={200}
         title="Canon Eos 200D Mark II 18-55mm DSLR Camera"/>
         </div>
         
         
         {/* text area */}
         
            <h1 className="font-bold text-center mt-5">Canon Eos 200D Mark II <br />18-55mm DSLR Camera</h1>
            <p className="text-center mt-5">179,999 PKR</p>
            <div className="flex justify-center py-5">
            <button className="bg-sky-500 rounded px-5 text-white">Buy Now</button>
           </div>
         </div>
        </div>
        <hr className="size-15"/>
        <br /><br /><br />
        </div>
        </div>
    );
}

export default Products;