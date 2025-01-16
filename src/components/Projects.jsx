import React from 'react'
import a from '../assets/1.png'
import b from '../assets/2.png'
import intex from '../assets/intex.png'
import aiftp from '../assets/aiftp.jpg'
import ctc from '../assets/ctc.jpg'
import wirc from '../assets/wirc.jpg'
import gstpam from '../assets/gstpam.png'
import Tilty from 'react-tilty';
import { Reveal } from './Reveal'
import wofx from '../assets/wofx.png'
import bee2bee from '../assets/bee2bee.png'



function Projects() {
    return (
        <>
            <div className='project-main'>
                <div className='project-bg'>
                    <img src={a} alt="a" />
                    <img src={b} alt="c" />
                </div>
                <div className='project-content'>
                    <div className='project-container'>
                        <div>
                            <div>
                                <Reveal>
                                    <div className='myname'>Project &nbsp; Work </div>
                                    <p style={{ color: "rgb(84, 84, 84)", fontFamily: "sans-serif" }}>Work and Handled Some India Biggest CA and Tax Institute Website</p>

                                </Reveal>
                                <Reveal>
                                    <div className='ca'>
                                        <div><img src={aiftp} alt="" /></div>
                                        <div><img src={ctc} alt="" /></div>
                                        <div><img src={wirc} alt="" /></div>
                                        <div><img src={gstpam} alt="" /></div>
                                    </div>
                                </Reveal>
                                <br />
                                <div>
                                    <a className='button-81' href="https://github.com/ArmanA12">Github Profile &nbsp; <i style={{ fontSize: "22px" }} class="fa fa-github-square"></i></a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>



                <div style={{ width:"100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div className='project-card' id='pcard2'>
                            <div>
                                <img style={{borderRadius:"4px"}} width="300px" height="180px" src={bee2bee} alt="img" />
                            </div>
                            <div>
                            <Reveal>
                                <div className='card-haeding'>BEE2BEE ASIA</div>
                            </Reveal>
                            <Reveal>
                                <span style={{ fontFamily: "sans-serif" }}>Independently <b>designed, developed, and deployed</b> a B2B full-stack web application to handle <b>large-scale exhibitions</b>, including the website, <b>Exhibitor, Buyer, and Admin Dashboards</b>. The project involved configuration, deployment, <b>integration of a payment gateway</b>, and successful <b>hosting on AWS</b>.</span><br />
                            </Reveal>
                            <Reveal>
                                <span style={{ fontFamily: "sans-serif", lineHeight:"1.8", fontSize:"14px" }}>Tech:Next.js, Redux, Prisma, Postgres, Supabase, Tailwind</span>
                            </Reveal>
                            <Reveal>
                                <div><span style={{ 
                                    letterSpacing: "1px", 
                                    marginTop: "10px",
                                    padding: "10px 16px",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    borderRadius: "25px",
                                    backgroundColor: "rgba(255,255,255,0.3)",
                                    color: "#333",
                                    cursor: "pointer",
                                    display: "inline-block",
                                    transition: "all 0.3s ease",
                                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                                    fontWeight: "500",
                                    ":hover": {
                                        backgroundColor: "#333",
                                        color: "white",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
                                    }
                                }}>Live Website &nbsp;&nbsp;<i className="fa fa-telegram"></i></span></div>
                            </Reveal>
                            </div>
                        </div>
                        
                        
                        <div className='project-card' id='pcard2'>
                            <div>
                                <img style={{borderRadius:"4px"}} width="300px" height="180px" src={intex} alt="img" />
                            </div>
                            <div>
                            <Reveal>
                                <div className='card-haeding'>Intex South Asia</div>
                            </Reveal>
                            <Reveal>
                                <span style={{ fontFamily: "sans-serif" }}>3 website created for intex south asia sub domain in latest technology and just in 16 days and optimized <b>10+ Rest API</b> and decreased their response time from <b>14 SECOND to 6 SECOND. </b><b>Over all performance increased to 21%.</b></span><br />
                            </Reveal>
                            <Reveal>
                                <span style={{ fontFamily: "sans-serif", lineHeight:"1.8", fontSize:"14px" }}>Tech:React, Redux,Rest API, Mysql   Javascript, Tailwind</span>
                            </Reveal>
                            <Reveal>
                                <div><span style={{ 
                                    letterSpacing: "1px", 
                                    marginTop: "10px",
                                    padding: "10px 16px",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    borderRadius: "25px",
                                    backgroundColor: "rgba(255,255,255,0.3)",
                                    color: "#333",
                                    cursor: "pointer",
                                    display: "inline-block",
                                    transition: "all 0.3s ease",
                                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                                    fontWeight: "500",
                                    ":hover": {
                                        backgroundColor: "#333",
                                        color: "white",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
                                    }
                                }}>Live Website &nbsp;&nbsp;<i className="fa fa-telegram"></i></span></div>
                            </Reveal>
                            </div>
                        </div>
                        <div className='project-card' id='pcard2'>
                            <div>
                                <img style={{borderRadius:"4px"}} width="300px" height="180px" src={wofx} alt="img" />
                            </div>
                            <div>
                            <Reveal>
                                <div className='card-haeding'>World Furniture Expo
                                </div>
                            </Reveal>
                            <Reveal>
                                <span style={{ fontFamily: "sans-serif" }}>In <strong>Four days</strong> converted the whole website into the new website from WordPress theme to Next.js, Tailwind , with performance, accessibility and SEO, every things in above 88%, and load time become from <strong>13 SECOND to  3  SECOND</strong> including 15+ Form with validation wtih <strong>React Hook Form</strong>.
                                </span><br />
                            </Reveal>
                            <Reveal>
                                <span style={{ fontFamily: "sans-serif", lineHeight:"1.8", fontSize:"14px" }}>Tech:Next.js, Tailwind, React Hook Form</span>
                            </Reveal>
                            <Reveal>
                                <div><span style={{ 
                                    letterSpacing: "1px", 
                                    marginTop: "10px",
                                    padding: "10px 16px",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    borderRadius: "25px",
                                    backgroundColor: "rgba(255,255,255,0.3)",
                                    color: "#333",
                                    cursor: "pointer",
                                    display: "inline-block",
                                    transition: "all 0.3s ease",
                                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                                    fontWeight: "500",
                                    ":hover": {
                                        backgroundColor: "#333",
                                        color: "white",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
                                    }
                                }}>Live Website &nbsp;&nbsp;<i className="fa fa-telegram"></i></span></div>
                            </Reveal>
                            </div>
                        </div>

                </div>
            </div>

        </>

    )
}

export default Projects