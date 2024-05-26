import React from "react";
import './About.css';
import human from './simages/Human.png';

const Mentors = () => {
    return (
        <section id="about" className="about">
            <h3 style={{ color: '#08D9D6', fontSize: '3.5rem' }}>Blog Website Developers</h3>
    
            <div className="box">
                <div data-aos="fade-up" data-aos-duration="800" className="card">
                    <img src={human} alt="" loading="lazy" />
                    <h5>Adarsh Pathak</h5>
                    <div className="pra">
                        <p>BackEnd Developer , Ui/Ux Designer</p>
                        <a href=""><button>Let's Connect</button></a>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="800" className="card">
                    <img src={human} alt="chaitri" loading="lazy" />
                    <h5>Abhishek Choudhary</h5>
                    <div className="pra">
                        <p className="p">FrontEnd Developer</p>
                        <a href=""><button className="he">Let's Connect</button></a>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="800" className="card">
                    <img src={human} alt="sasanka" loading="lazy" />
                    <h5>Abhimanyu</h5>
                    <div className="pra">
                        <p>FrontEnd Developer , Content Creator</p>
                        <a href=""><button>Let's Connect</button></a>
                    </div>
                </div>
            </div>

            <section id="blog-process" className="blog-process">
                <h3 style={{ color: '#08D9D6', fontSize: '3rem', marginTop: '50px' }}>How to Upload a Blog</h3>
                <div className="process-step">
                    <h4>1. Write Your Title</h4>
                    <p>Start by writing an engaging and descriptive title for your blog post. Make sure it accurately reflects the content of your blog.</p>
                </div>
                <div className="process-step">
                    <h4>2. Mention Tags</h4>
                    <p>Add relevant tags to your blog post to help users find your content. Tags should be related to the main topics and themes of your blog.</p>
                </div>
                <div className="process-step">
                    <h4>3. Select the Category</h4>
                    <p>Choose a category that best fits your blog post. This helps organize your content and makes it easier for readers to find similar posts.</p>
                </div>
                <div className="process-step">
                    <h4>4. Upload the Photo</h4>
                    <p>Upload a high-quality photo that complements your blog post. This could be a feature image or an image that illustrates a key point in your content.</p>
                </div>
            </section>
        </section>
    );
}

export default Mentors;
