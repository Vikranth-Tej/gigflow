import React from 'react';
import './hiring.css';


const HiringPage = () => {
  return (
    <>
      
      <div className="hiring-container">
        <div className="left-form">
          <h3 className="section-title">Job Posting</h3>
          <p className="section-sub">Post Job for free. Add details for your job post</p>

          <h4 className="form-heading">Fill in Job Details</h4>
          <form className="job-form">
            <input type="text" placeholder="e.g UI/UX Designer" className="form-input" />

            <input type="text" placeholder="Enter required skill(s)" className="form-input" />

            <input type="text" placeholder="e.g 0-2 years" className="form-input" />

            <input type="text" placeholder="e.g Full time" className="form-input" />

            <input type="text" placeholder="e.g Hybrid" className="form-input" />

            <input type="text" placeholder="Enter the payment per month" className="form-input" />

            <input type="text" placeholder="e.g 2" className="form-input" />

            <textarea rows="4" placeholder="Job Description" className="form-input"></textarea>

            <input type="text" placeholder="Enter link" className="form-input" />
          </form>
        </div>

        <div className="right-panel">
          <div className="manage-posting">
            <div className="posting-card">
              <p className="posting-title">UI Designer Intern (Remote)</p>
              <p className="posting-sub">Article Studio</p>
              <p className="posting-meta">Bangalore, India</p>
              <div className="posting-details">
                <span>2x Views</span>
                <span>100+ Applicants</span>
              </div>
            </div>
            <div className="posting-card">
              <p className="posting-title">UI Designer Intern (Remote)</p>
              <p className="posting-sub">Article Studio</p>
              <p className="posting-meta">Bangalore, India</p>
              <div className="posting-details">
                <span>2x Views</span>
                <span>100+ Applicants</span>
              </div>
            </div>
          </div>

          <div className="ai-box">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/ai-writing-7867170-6294540.png"
              alt="AI Write"
              className="ai-image"
            />
            <p className="ai-title">Use AI to write</p>
            <p className="ai-desc">
              Write perfectly and flawlessly with AI. If you want help with job description and other fields, AI will suggest for you.
            </p>
            <button className="btn-ai">Write with AI</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HiringPage;
