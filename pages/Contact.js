import Head from 'next/head'
import {useForm} from 'react-hook-form'
import React,{useState} from 'react'


const About = () => {
  let [message,setMessage] = useState(false);
  const {register, handleSubmit, formState : {errors}} = useForm();
  const myfun = (d) =>{
    // alert(d.fullname + ' from ' + d.city)
    // alert('Form Submitted SuccessFully')
    setMessage(true);
    setTimeout(() => form.submit(), 2000);
  }

    return ( 
        <>
        <Head>
          <title>School | Contact</title>
          <meta name='keyword' content='About'/>
        </Head>
        <div className='contactus'>
             <h1>Contact Us</h1>
             <p className='sub-title'>Lorem ipsum </p>

            <div id="contact-container">
              <div className='contact-info'>
              <h4>Contact Information</h4>
                <p>Fill up the from and our team will get back to you within 24 hours</p>

                <div className='icon-text'>
                <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>+977 9818002354</span>
                </div>

                <div className='icon-text'>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                  <span>geniuschool@gmail.com</span>
                </div>

                <div className='icon-text'>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Mid Baneshowr ktm</span>
                </div>

                <div className='social-media'>

                  <a href='#' className='icon-circle'>
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>

                  <a href='#' className='icon-circle'>
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>

                  <a href='#' className='icon-circle'>
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>

                  <a href='#' className='icon-circle'>
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>

                </div>
              </div>

              <form id = "form" onSubmit={handleSubmit(myfun)}> 

                  <div className='success'>
                    {message &&  <div>
                        <p class="success_text">
                        Form Submitted !!
                    </p>
                    </div>}
                  </div>
                <div className='col'>

                    <div className='form-group'>
                      <label>First Name</label>
                      <input type='text' className='form-control' {...register('fname',{required:true, minLength:3})} />
                      {errors.fname && errors.fname.type == "required" && <p className='fname'>Please Enter First Name</p>}
                      {errors.fname && errors.fname.type == "minLength" && <p className='minl'>Please Enter min 3 letters</p>}
                    </div>

                    <div className='form-group'>
                      <label>Last Name</label>
                      <input type='text' className='form-control' {...register('lname',{required:true, minLength:3})} />
                      {errors.lname && errors.lname.type == "required" && <p className='lname'>Please Enter Last Name</p>}
                      {errors.lname && errors.lname.type == "minLength" && <p className='minl'>Please Enter min 3 letters</p>}
                    </div>

                    <div className='form-group'>
                      <label>Email</label>
                      <input type='text' className='form-control' {...register('email',{required:true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
})} />
                      {errors.email && errors.email.type == "required" && <p className='email'>Please Enter Valid Email</p>}
                      {errors.email && errors.email.type == "pattern" && <p className='minl'>Please Enter valid Email</p>}
                    </div>

                    <div className='form-group'>
                      <label>Phone</label>
                      <input type='num' {...register('num',{required:true, minLength:10, maxLength:10})}/>
                      {errors.num && errors.num.type == "required" && <p className='lname'>Please Enter Last Name</p>}
                      {errors.num && errors.num.type == "minLength" && <p className='minl'>Please Enter valid number </p>}
                      {errors.num && errors.num.type == "maxLength" && <p className='minl'>Please Enter valid number</p>}
                    </div>

                    <div className='form-group'>
                      <label>Message</label>
                      <textarea {...register('textarea',{required:true, minLength:10, maxLength:500})}></textarea>
                      {errors.textarea && errors.textarea.type == "required" && <p className='lname'>Please Enter Your Message</p>}
                      {errors.textarea && errors.textarea.type == "minLength" && <p className='minl'>Please enter message less then 10</p>}
                    </div>

                    <div className='form-group-solo'>
                      <button className='primary'>Send Message</button>
                    </div>


                    
                </div>

              </form>
            </div>
        </div>
        </>
     );
}
 
export default About;