import React from 'react'
import whiteboard from '../assets/whiteboard.png'
import c from '../assets/3.png'
import insta from '../assets/insta.png'
import emc from '../assets/emc.png'
import chetterNet from '../assets/chatterNet.png'
import Committee from '../assets/Committee.png'
import upcoming from '../assets/upcoming.png'


import { Reveal } from './Reveal'


function PersonalProject() {
    return (
        <>
            <div className='personal-conatiner'>
                <div className='personal-content'>
                    {/* <div className='project-bg'>
                        <img style={{ left: "20%", filter: 'blur(170px)', border:"1px solid #000" }} src={c} alt="a" />
                        <img style={{ right: "20%", top: "70%", filter: 'blur(170px)', zIndex: '-1'}} src={c} alt="a" />
                    </div> */}

                    <Reveal><div className='myname'>Perosnal Project</div></Reveal>
                    <div>&nbsp;</div>
                    <div className='p-project-cmain'>
                    <div className='p-card'>
                            <Reveal><div className='card-no'>01</div></Reveal>
                            <Reveal><div><img style={{height:"300"}} src={chetterNet} alt="1" /></div></Reveal>
                            <Reveal><div><div className='project-heading'>ChatterNet Mobile App : Full Stack Social Media App</div>
                            </div></Reveal>
                            <div className='go-gits'>
                                <div className='button-81'><a href="https://github.com/ArmanA12/ChatterNetFMobile-App">Go Live &nbsp; <i class="fa fa-paper-plane"></i></a> </div>
                                <div className='button-81'><a href="https://github.com/ArmanA12/ChatterNet-Backend">Github &nbsp; <i style={{ fontSize: "22px" }} class="fa fa-github-square"></i></a></div>
                            </div>
                        </div>
                        <div className='p-card'>
                            <Reveal><div className='card-no'>02</div></Reveal>
                            <Reveal><div><img style={{height:"140px"}} src={Committee} alt="1" /></div></Reveal>
                            <Reveal><div><div className='project-heading'>Committee Management : Full Stack Mobile App</div>
                            </div></Reveal>
                            <div className='go-gits'>
                                <div className='button-81'><a href="https://github.com/ArmanA12/ChatterNetFMobile-App">Go Live &nbsp; <i class="fa fa-paper-plane"></i></a> </div>
                                <div className='button-81'><a href="https://github.com/ArmanA12/CommitteeMobileAppBackend">Github &nbsp; <i style={{ fontSize: "22px" }} class="fa fa-github-square"></i></a></div>
                            </div>
                        </div>
                        <div className='p-card'>
                            <Reveal><div className='card-no'>03</div></Reveal>
                            <Reveal><div><img style={{height:"300"}} src={insta} alt="1" /></div></Reveal>
                            <Reveal><div><div className='project-heading'>Instagram Clone : Like Instagram</div></div></Reveal>
                            <div className='go-gits'>
                                <div className='button-81'><a href="https://peinsta.netlify.app/">Go Live &nbsp; <i class="fa fa-paper-plane"></i> </a></div>
                                <div className='button-81'><a href="https://github.com/ArmanA12/PeInsta">Github &nbsp; <i style={{ fontSize: "22px" }} class="fa fa-github-square"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div>&nbsp;</div>

                    <div className='p-project-cmain'>
                        <div className='p-card'>
                            <Reveal><div className='card-no'>04</div></Reveal>
                            <Reveal><div><img style={{height:"300", border:"1px solid #f3f0eb"}} src={whiteboard} alt="1" /></div></Reveal>
                            <Reveal><div><div className='project-heading'>Online Collabrative Drawing Board</div>
                            </div></Reveal>
                            <div className='go-gits'>
                                <div className='button-81'><a href="">Go Live &nbsp; <i class="fa fa-paper-plane"></i></a> </div>
                                <div className='button-81'><a href="https://github.com/ArmanA12/Whiteboard">Github &nbsp; <i style={{ fontSize: "22px" }} class="fa fa-github-square"></i></a></div>
                            </div>
                        </div>
                       
                        <div className='p-card'>
                            <Reveal><div className='card-no'>05</div></Reveal>
                            <Reveal><div><img style={{height:"300"}} src={emc} alt="1" /></div></Reveal>
                            <Reveal><div><div className='project-heading'>E-Commerce: Lile Amazone, Flipkart</div></div></Reveal>
                            <div className='go-gits'>
                                <div className='button-81'><a href="https://dummy-e.netlify.app/">Go Live &nbsp; <i class="fa fa-paper-plane"></i> </a></div>
                                <div className='button-81'><a href="https://github.com/ArmanA12/Dummy-e">Github &nbsp; <i style={{ fontSize: "22px" }} class="fa fa-github-square"></i></a></div>
                            </div>
                        </div>
                        <div className='p-card'>
                            <Reveal><div className='card-no'>06</div></Reveal>
                            <Reveal><div><img style={{height:"140px"}} src={upcoming} alt="1" /></div></Reveal>
                            <Reveal><div><div className='project-heading'>Designer Work Management : Upcoming</div></div></Reveal>
                            <div className='go-gits'>
                                <div className='button-81'><a href="https://dummy-e.netlify.app/">Go Live &nbsp; <i class="fa fa-paper-plane"></i> </a></div>
                                <div className='button-81'><a href="https://github.com/ArmanA12/Dummy-e">Github &nbsp; <i style={{ fontSize: "22px" }} class="fa fa-github-square"></i></a></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalProject