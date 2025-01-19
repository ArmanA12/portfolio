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
                                    <div className='myname'>Project Work </div>
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



                <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                    <div className='project-card' id='pcard2'>
                        <div>
                            <Reveal>
                            <img style={{ borderRadius: "4px" }} width="300px" height="180px" src={bee2bee} alt="img" />
                            </Reveal>
                        </div>
                        <div>
                            <Reveal>
                                <div className='card-haeding'>Bee2Bee Asia</div>
                            </Reveal>
                            <Reveal>
                                <span style={{ fontFamily: "sans-serif" }}>Independently <b>designed, developed, and deployed</b> a B2B full-stack web application to handle <b>large-scale exhibitions</b>, including the website, <b>Exhibitor, Buyer, and Admin Dashboards</b>. The project involved configuration, deployment, <b>integration of a payment gateway</b>, and successful <b>hosting on AWS</b>.</span><br />
                            </Reveal>
                            <Reveal>
                                <span style={{ fontFamily: "sans-serif", lineHeight: "1.8", fontSize: "14px" }}>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
                                        <div className='tech'>Next.js</div>
                                        <div className='tech'>Redux</div>
                                        <div className='tech'>Prisma</div>
                                        <div className='tech'>Postgres</div>
                                        <div className='tech'>Supabase</div>
                                        <div className='tech'>Tailwind</div>
                                    </div>
                                </span>
                            </Reveal>
                            <Reveal>
                                <div><a href="https://www.bee2bee.asia/">
                                    <span style={{
                                        letterSpacing: "1px",
                                        marginTop: "10px",
                                        padding: "10px 16px",
                                        border: "1px solid #f3f0eb",
                                        borderRadius: "25px",
                                        backgroundColor: "rgba(255,255,255,0.9)",
                                        color: "#5f5d5c",
                                        cursor: "pointer",
                                        display: "inline-block",
                                        transition: "all 0.3s ease",
                                        letterSpacing: "1px"
                                    }}>Live Website &nbsp;&nbsp;<i className="fa fa-telegram"></i></span>
                                </a></div>
                            </Reveal>
                        </div>
                    </div>


                    <div className='project-card' id='pcard2'>
                        <div>
                            <Reveal>
                            <img style={{ borderRadius: "4px" }} width="300px" height="180px" src={intex} alt="img" />
                            </Reveal>
                        </div>
                        <div>
                            <Reveal>
                                <div className='card-haeding'>Intex South Asia</div>
                            </Reveal>
                            <Reveal>
                                <span style={{ fontFamily: "sans-serif" }}>3 website created for intex south asia sub domain in latest technology and just in 16 days and optimized <b>10+ Rest API</b> and decreased their response time from <b>14 SECOND to 6 SECOND. </b><b>Over all performance increased to 21%.</b></span><br />
                            </Reveal>
                            <Reveal>
                                <span style={{ fontFamily: "sans-serif", lineHeight: "1.8", fontSize: "14px" }}>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
                                        <div className='tech'>React</div>
                                        <div className='tech'>Redux</div>
                                        <div className='tech'>Rest API</div>
                                        <div className='tech'>MySQL</div>
                                        <div className='tech'>JavaScript</div>
                                        <div className='tech'>Tailwind</div>
                                    </div>
                                </span>
                            </Reveal>
                            <Reveal>
                                <div><a  href="https://bd.intexsouthasia.com/">
                                    <span style={{
                                        letterSpacing: "1px",
                                        marginTop: "10px",
                                        padding: "10px 16px",
                                        border: "1px solid #f3f0eb",
                                        borderRadius: "25px",
                                        backgroundColor: "rgba(255,255,255,0.9)",
                                        color: "#5f5d5c",
                                        cursor: "pointer",
                                        display: "inline-block",
                                        transition: "all 0.3s ease",
                                        fontWeight:"300"
                                    }}>Live Website &nbsp;&nbsp;<i className="fa fa-telegram"></i></span></a></div>
                            </Reveal>
                        </div>
                    </div>
                    <div className='project-card' id='pcard2'>
                        <div>
                            <Reveal>
                            <img style={{ borderRadius: "4px" }} width="300px" height="180px" src={wofx} alt="img" />
                            </Reveal>
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
                                <span style={{ fontFamily: "sans-serif", lineHeight: "1.8", fontSize: "14px" }}>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
                                        <div className='tech'>Next.js</div>
                                        <div className='tech'>Tailwind</div>
                                        <div className='tech'>React Hook Form</div>
                                    </div>
                                </span>
                            </Reveal>
                            <Reveal>
                                <div><a href="https://www.wofxworldexpo.com/">
                                    <span style={{
                                        letterSpacing: "1px",
                                        marginTop: "10px",
                                        padding: "10px 16px",
                                        border: "1px solid #f3f0eb",
                                        borderRadius: "25px",
                                        backgroundColor: "rgba(255,255,255,0.9)",
                                        color: "#5f5d5c",
                                        cursor: "pointer",
                                        display: "inline-block",
                                        transition: "all 0.3s ease",
                                        letterSpacing: "1px"
                                    }}>Live Website &nbsp;&nbsp;<i className="fa fa-telegram"></i></span></a></div>
                            </Reveal>
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}

export default Projects