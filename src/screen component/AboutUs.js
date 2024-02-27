import React from "react";


const AboutUs = () => {
    return(
        <>
            <div id="vision">
                <h1 className="vision">Vision</h1>
                <br/>
                <p className="p-vision">
                    To become an outstanding Technological University at the 
                    cutting edge of Science and Technology that produces world 
                    class <br/> Knowledge-delivery, Research, Extension and Leadership 
                    in Technology innovation for Industry and Society.
                </p>
            </div>

            <div id="img1">
                <img className="img1" src="images/vision.jpg" alt="vision" />
            </div>

            <div id="mission">
                <h1 className="mission">Mission</h1>

                <p className="p-mission">
                    To plan the development of technical education, to establish 
                    value-based and need-based education and training in engineering 
                    and <br/> technology, with a view to generate qualified and competent 
                    manpower, responsive to technological and societal needs.
                </p>
            </div>

            <div id="img2">
                <img className="img2" src="images/mission.jpg" alt="mission" />
            </div>


            <div id="mandate">
                <h1 className="mandate">Mandate</h1>

                <p className="p-mandate">
                    The Visvesvaraya Technological University has been established 
                    by the Government of the Karnataka in order to Promote planned  <br/>
                    and sustainable development of technical education consistent 
                    with state and national policies.
                    *Design need based programs that <br/> ensure adequate human resource 
                    of the right kind.
                </p>

                <p className="p-mandate">
                    *Establish objective evaluation and certification systems 
                    for students,programs and institutions.
                    *Collaborate with national and <br/> international institutions 
                    R&D establishments organizations like AICTE, MHRD, UGC, 
                    etc.industry and user agencies.
                </p>
            </div>

            <div id="img3">
                <img className="img3" src="images/mandate.jpg" alt="mission" />
            </div>
            

        </>
    )
}

export default AboutUs;