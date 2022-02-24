import "../CSS/ContactUs.css"
import { useState } from 'react'
import emailjs from '@emailjs/browser';

function ContactUs() {

  const [datos, setdatos] = useState({
    name: "",
    email: "",
    comment: "",
  })

  const setChange = (event) => {

    setdatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault();

    emailjs.send('service_fmxrggd', 'template_6grr28v', datos
      , 'user_FT197j6aBI4C2PueUGBJI')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });


  }

  return (
    <div className="contactUs">
      <form className="contactUs1" onSubmit={enviarDatos}>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Nombre</label>
          <input type="text" class="form-control" name="name"  onChange={setChange} />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" name="email" aria-describedby="emailHelp" onChange={setChange} />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Como te ayudamos</label>
          <textarea type="text" class="form-control" name="comment" onChange={setChange}  />
        </div>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <input style={{ marginTop: '20px' }}
                    type="submit" class="btn btn-primary"
                    id="button"
                    value="Send Email"
                     />
      </form>
    </div>
  )

}
export default ContactUs