import React from 'react'
import arman from '../assets/arman.png'
import { Reveal } from './Reveal'
import arman1 from '../assets/IMG_20250124_215249.png'

function Banner() {
    return (
        <>
            <div className='bannrMain'>
                <div className='bannerContainer'>
                    <div className='bannerDiv'>

                        <Reveal>
                            <div className='myname'>Hy! I  Am <br /><span style={{ color: "#5f5d5c", fontSize: "35px" }}>Md Arman Shekh</span></div>

                            <p style={{ color: "#5f5d5c", letterSpacing: "1px", fontFamily: "sans-serif" }}><span style={{ color: "#5f5d5c" }}>Hi</span>, I m Arman Shekh having 2.5-year experienced React developer dedicated to crafting seamless and user-friendly web experiences. Seeking collaborative opportunities to excel in front-end development.</p>

                        </Reveal>
                        <Reveal>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div><a className='button-81' href="tel:7091554628">Let's Talk &nbsp;  <i class="fa fa-phone"></i></a></div>
                                <div><a className='button-81' href="/src/assets/frontenddeveloperresume.pdf">Download CV &nbsp; <i class="fa fa-download"></i></a></div>
                            </div>
                        </Reveal>
                        <div className='followme'>Follow Me  <i class="fa fa-long-arrow-right"></i> <span> &nbsp; &nbsp;

                            <a href="https://www.facebook.com/mdarman.shekh.5201"><i class="fa fa-facebook"></i></a> &nbsp;
                            <a href="https://github.com/ArmanA12"><i class="fa fa-github-alt"></i></a> &nbsp;
                            <a href="https://www.instagram.com/arman_aishakar/"><i class="fa fa-instagram"></i></a>

                            &nbsp;   <a href="https://www.linkedin.com/in/arman-shekh12/"><i class="fa fa-linkedin"></i></a>
                            &nbsp; <a href="https://twitter.com/AAishakar"><i class="fa fa-twitter"></i></a>
                        </span></div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }} className='bannerDiv'>
                        <div className='banner-div-bg' style={{
                            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)`,
                            backgroundSize: '20px 20px', // Size of the dots and spacing
                            backgroundColor: 'rgba(255,255,255,0.02)',

                        }}>
                            <Reveal>
                                <div style={{ display: "flex", justifyContent: "center", width:"340px", height:"340px", 
                                    border:"1px solid #f2f2f2",
                                    borderRadius:"100%",
                                    background:"rgba(0,0,0,0.01)",
                                    padding:"20px",
                        
                                 }} >
                                <img style={{ zIndex: "100", objectFit: 'fill' }} src={arman1} alt="img" />
                                </div>
                            </Reveal>
                            <div className='something'>
                              +
                            </div>
                            <div className='something1'>
                              +
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner