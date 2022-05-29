// import Head from 'next/head'
// const About = () => {
//     return ( 
//         <>
//         <Head>
//           <title>School | Gallery</title>
//           <meta name='keyword' content='About'/>
//         </Head>
//         <div>
//                 <h1>Gallery</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minus corporis non ad doloremque necessitatibus culpa
//                     quae harum? Velit id mollitia architecto cupiditate blanditiis assumenda tenetur repellat, ea delectus quaerat.</p>
//         </div>
//         </>
//      );
// }
 
// export default About;

import React,{useState} from 'react'
import Head from 'next/head'
import {useForm} from 'react-hook-form'

function Gallery() {
  let [message,setMessage] = useState(false);
  const {register, handleSubmit, formState : {errors}} = useForm();
  const myfun = (d) =>{
    // alert(d.fullname + ' from ' + d.city)
    // alert('Form Submitted SuccessFully');
    setMessage(true);
    setTimeout(() => form.submit(), 2000);
  }

// const form = document.querySelector('form');
// const successMessage = document.querySelector('#form');
// form.addEventListener('submitt', (e) => {
//     e.preventDefault();
//     successMessage.classList.add('show');
//     setTimeout(() => form.submit(), 2000);
// } );
  
  return (
 
    <>
    <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous" 
          />
    </Head>
        <div className='form-style-6'>
         {message &&  <div>
            <p class="success_text">
            Success!
        </p>
        </div>}
          
        </div>
    <div className='row mt-5'>
     <div className='col-md-4 card m-auto shadow-lg'>
    <form id= "form" onSubmit={handleSubmit(myfun)}>
       <div className="card-body">

         <div className="form-group p-4">
           <label htmlFor='fullName'>Full Name</label>
           <input className='form-control' {...register('fullname',{required:true})}/>
           {errors.fullname && errors.fullname.type == "required" && <p className='text-danger'>Please Enter Full Name</p>}
         </div>

         <div className="form-group p-4">
           <label htmlFor='city'>City Name</label>
           <input className='form-control' {...register('city',{required:true, minLength:3})}/>
           {errors.city && errors.city.type == "required" && <p className='text-danger'>Please Enter Full City</p>}
           {errors.city && errors.city.type == "minLength" && <p className='text-warning'>Please Enter min 3 letters</p>}
         </div>

         <div className="form-group p-4">
           <input type="submit" className="btn btn-success" id='submitt'/>
         </div>

       </div>
       </form>
     </div>
    </div>

    </>
  )
}

export default Gallery