import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
  return (
    <p className='pt-4'>Your message has been sent!</p>
  )
}

function ContactComponent(props) {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4pg7rgu', 'template_39jr2gn', e.target, 'Cxq7wIXPsjTVSBG-l')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <div className="container mb-5">
      <div className=" text-center mt-5 ">

        <h1 className='mb-3 titles' >contact us</h1>


      </div>


      <div className="row ">
        <div className="col-lg-7 mx-auto">
          <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">

              <div className="container">
                <form onSubmit={sendEmail} id="contact-form">



                  <div className="controls">

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mt-3">
                          <input id="form_name" type="text" name="first_name" className="form-control" placeholder="First Name" required="required" data-error="Firstname is required."></input>

                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mt-3">
                          <input id="form_lastname" type="text" name="last_name" className="form-control" placeholder="Last Name" required="required" data-error="Lastname is required."></input>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input id="form_email" type="email" name="email" className="form-control mt-3" placeholder="Email" required="required" data-error="Valid email is required."></input>

                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mt-3">
                          <label htmlFor="form_need" className='m-2'>Reason for contact</label>
                          <select id="form_need" name="specific_need" className="form-control" required="required" data-error="Please specify your need.">
                            <option value="" defaultValue>--Select Your Issue--</option>
                            <option >Request Invoice For order</option>
                            <option >Request order status</option>
                            <option >Haven't received cashback yet</option>
                            <option>Other</option>
                          </select>

                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 mt-2">
                        <div className="form-group">
                          <textarea id="form_message" name="message" className="form-control mt-3" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea
                          >
                        </div>

                      </div>


                      <div className="col-md-12 text-end">

                        <input type="submit" className="btn btn-success btn-send  pt-2 btn-block mt-3
                      " value="Send Message"></input>

                        <div className='row'>{
                          result ? <Result/> : null
                        }
                        </div>

                      </div>

                    </div>


                  </div>
                </form>
              </div>
            </div>


          </div>

        </div>

      </div>
    </div>
  );
}

export default ContactComponent; 