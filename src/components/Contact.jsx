import React from 'react';
import a from '../assets/1.png';
import b from '../assets/2.png';
import c from '../assets/3.png';
import w from '../assets/w.png';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Reveal } from './Reveal';

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();
        
        // Send the email to yourself
        emailjs.sendForm('service_e10dzvv', 'arman63587tfgewg', e.target, 'eK8ff78j71PJhRaqi')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    title: 'Thank You',
                    text: 'Message has been sent',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });

                // Send confirmation email to the user
                const formData = new FormData(e.target);
                emailjs.send('service_e10dzvv', 'template_updi1fm', {
                    user_name: formData.get('name'),
                    user_email: formData.get('user_email')
                }, 'eK8ff78j71PJhRaqi')
                .then((result) => {
                    console.log('Confirmation email sent:', result.text);
                }, (error) => {
                    console.log('Failed to send confirmation email:', error.text);
                });
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    title: 'Error',
                    text: 'An error occurred, please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
        
        // Optionally reload the page or reset the form
        // e.target.reset();
        // window.location.reload();
    }

    return (
        <>
            <div className='contact'>
                <div className='project-bg'>
                    <img style={{ left: "20%", filter: 'blur(200px)' }} src={c} alt="a" />
                    <img style={{ right: "30%", top: "70%", filter: 'blur(170px)', zIndex: '-1' }} src={c} alt="a" />
                </div>

                <div className='contact-container'>
                    <div className='contant1'>
                        <Reveal><div className='myname'>Contact Me </div></Reveal>
                        <Reveal><div><p><i class="fa fa-phone"></i>&nbsp;<a href="tel:+91 7091554628">+91 7091554628</a></p></div></Reveal>
                        <Reveal><div><p><i class="fa fa-whatsapp"></i>&nbsp;<a href="#">+91 7091554628</a></p></div></Reveal>
                        <Reveal><div><p><i id="con-icon" class="fa fa-envelope"></i>&nbsp;<a href="mailto: +91 7091554628">mdarmanshekh4@gmail.com</a></p></div></Reveal>
                        <p>&nbsp;</p>
                        <div className='social-icons'>
                            <a href="https://www.facebook.com/mdarman.shekh.5201"><div><i class="fa fa-facebook-f"></i></div></a>
                            <a href="https://www.instagram.com/arman_aishakar/"><div><i class="fa fa-instagram"></i></div></a>
                            <a href="https://www.linkedin.com/in/arman-shekh12/"><div><i class="fa fa-linkedin"></i></div></a>
                            <a href="https://twitter.com/AAishakar"><div><i class="fa fa-twitter"></i></div></a>
                            <a href="https://github.com/ArmanA12"><div><i class="fa fa-github-alt"></i></div></a>
                        </div>
                    </div>
                    <div className='contant2'>
                        <form onSubmit={sendEmail}>
                            <div className='firstlast'>
                                <input style={{padding:"8px"}} type="text" name="name" placeholder='Your Name' required /> &nbsp;
                            </div>

                            <div>
                                <input style={{padding:"8px"}} type="text" name="user_email" id="" placeholder='Your Email' required />
                            </div>
                            <div>
                                <textarea style={{ height: "110px", padding:"8px" }} name="message" placeholder='Write Message' cols="40" rows="8" required></textarea>
                            </div>
                            <br />
                            <div>
                                <button className='submit' type='submit'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
