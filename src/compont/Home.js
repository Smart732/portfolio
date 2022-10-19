// import React from 'react'
// import axios from 'axios'
// function Home(amount) {
//     const clickhamdaler = async (e) => {
//         e.preventDefault();

//         const key = await axios.get("http://localhost:4000/api/key")
//         const  data  = await axios.post("http://localhost:4000/api", {
//           amount
//         })

//      const options = {
//             "key": key.data.key, // Enter the Key ID generated from the Dashboard
//             "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//             "currency": "INR",
//             "name": "Singhaniya online Wducation site",
//             "description": "Best Education site",
//             "image": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/7064f8105512449.5f7b1e51a8e7a.jpg",
//             "order_id": data.data.odr.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//             "callback_url": "http://localhost:4000/api/verify",
//             "prefill": {
//                 "name": "Bikash Kumar",
//                 "email": "contactbikash2020@gmail.com",
//                 "contact": "7667538852"
//             },
//             "notes": {
//                 "address": "Razorpay Corporate Office"
//             },
//             "theme": {
//                 "color": "#3399cc"
//             }
//         };
// const rozar=new window.Razorpay(options);
// rozar.open();
//         // console.log(amount);
//         //  console.log(data.data.odr.id);
//         // console.log(key.data.key);
//       }
//   return (
//     <>

// <div className="card" style={{ width: "18rem" }}>
//         <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204" className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text" amount={5000}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="" className="btn btn-primary" onClick={clickhamdaler}>buy</a>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Home


import React from 'react'

// import student from "./image/student.jpg"
import { Typewriter } from 'react-simple-typewriter'
import "./Home.css"
function Home() {
  return (
    <>
      <div className='img'>
       
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal',color:"rgb(227, 19, 64)" }}>
       I Am{' '}
        <span style={{ color: 'rgb(109, 136, 29)', fontWeight: 'bold' }}>
           
       <Typewriter
            words={['Web Devloper', 'UI Devloper', 'UX Developer', 'MERN Stack Devloper']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
      </h1> 
      </div>

   



    </>
  )
}

export default Home