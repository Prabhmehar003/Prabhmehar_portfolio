export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none mb-8">
                PRABHMEHAR
              </h2>
              <div className="text-rotate-90 font-mono text-xs tracking-widest opacity-60">
                DATA ANALYST & CLOUD SOLUTIONS DEVELOPER
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed max-w-md pr-200">
                I buid data driven solutions using Power BI, SQL and AWS to turn raw data into meaningful business insights.
              </div>
              <div className="w-24 h-1 bg-foreground"></div>
            </div>
          </div>
        </div>

        {/* Bio Content - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Large Text Block */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-light leading-relaxed space-y-6">
              <p>
                I'm a <strong className="font-black">DATA ANALYST</strong> and Cloud solutions developer currently pursuing 
                Computer Science with specialization in <strong className="font-black">ARTIFICIAL INTELLIGENCE & MACHINE LEARNING</strong> at 
                VIT with an 8.30 CGPA.
              </p>
              <p>
                As a Data Analytics and Cloud enthusiast, I focus on building <strong className="font-black">INTERACTIVE DASHBOARDS</strong> using 
                POWER BI, SQL & AWS. I optimize datasets and create <strong className="font-black">CLOUD READY WORKFLOWS </strong>that help to transform raw data into clear business insights.
              </p>
              <p>
                From visualizing performance metrics to automating reports and managing data in the cloud, I don’t just analyze data — I turn it into decisions that drive results.
              </p>
            </div>
          </div>

          {/* Vertical Text */}
          <div className="flex flex-col justify-center">
            <div className="text-rotate-90 font-mono text-lg tracking-wider mb-8">
              APPROACH
            </div>
            <div className="stack-text font-black text-6xl">
              <span>DATA</span>
              <span>WITH</span>
              <span>INSIGHTS</span>
              <span>BUILD</span>
              <span>FOR</span>
              <span>IMPACT</span>
            </div>
          </div>
        </div>

        {/* Stats Grid - Updated with real achievements */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-foreground pt-16 place-items-center">
          <div className="text-center flex flex-col items-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-1">8.30</div>
            <div className="font-mono text-sm tracking-wider">CGPA EXCELLENCE</div>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="text-2xl sm:text-3xl md:text-3xl font-black mb-1">10+ DASHBOARD</div>
            <div className="font-mono text-xs sm:text-sm tracking-wider">BUILD IN POWER BI</div>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="text-2xl sm:text-3xl md:text-3xl font-black mb-1">POWER BI | SQL</div>
            <div className="font-mono text-xs sm:text-sm tracking-wider">CORE SKILLS</div>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="text-2xl sm:text-3xl md:text-3xl font-black mb-1">AWS FOUNDATION</div>
            <div className="font-mono text-xs sm:text-sm tracking-wider">CLOUD READY</div>
          </div>
        </div>

        {/* Technical Arsenal */}
        <div className="mt-24 sm:mt-32 mb-16 sm:mb-24">
          <div className="text-center mb-10 sm:mb-16 px-5 sm:px-0">
            <h3 className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-3 text-center"><span className="block sm:inline">PROFESSIONAL</span><span className="block sm:inline"> SKILLSET</span></h3>
            <div className="font-mono text-sm sm:text-lg md:text-x1 tracking-wide sm:tracking-wider opacity-60">Technologies I Work With</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="border border-foreground p-6 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-2 tracking-wider">LANGUAGES</div>
              <div className="text-xl font-black mb-2"> PYTHON • C++</div>
              <div className="text-sm font-light">SQL</div>
            </div>
            
            <div className="border border-foreground p-6 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-2 tracking-wider">ANALYTICS ENGINEERING</div>
              <div className="text-xl font-black mb-2">Dashboards</div>
              <div className="text-sm font-light">Business Intelligence, Data Visualization</div>
            </div>
            
            <div className="border border-foreground p-6 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-2 tracking-wider">CLOUD/DEVOPS</div>
              <div className="text-xl font-black mb-2">AWS </div>
              <div className="text-sm font-light">EC2, S3, Lambda, RDS, Route 53, EMR, CI/CD</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-foreground p-6 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-2 tracking-wider">DATABASES</div>
              <div className="text-xl font-black mb-2">MYSQL  • NOSQL</div>
              <div className="text-sm font-light">MongoDB, Firebase</div>
            </div>
            
            <div className="border border-foreground p-6 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-2 tracking-wider">AI/ML</div>
              <div className="text-xl font-black mb-2">Data Exploration • EDA</div>
              <div className="text-sm font-light">NLP</div>
            </div>
            
            <div className="border border-foreground p-6 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-2 tracking-wider">CONTROL & COLLABORATION</div>
              <div className="text-xl font-black mb-2">GIT  • Github </div>
              <div className="text-sm font-light">Azure</div>
            </div>
          </div>
        </div>

        {/* Leadership & Achievements */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-black mb-4">LEADERSHIP</h3>
            <div className="font-mono text-lg tracking-wider opacity-60">BEYOND THE CODE</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-foreground p-8 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-4 tracking-wider">Project Lead</div>
              <div className="text-3xl font-black mb-4">DATA ANALYTICS CAPSTONE</div>
              <div className="text-lg font-light">Led a team of 4 in delivering an end-to-end analytics solution—from data ingestion to executive dashboards—ensuring timely delivery, task ownership, and clear communication across all phases.</div>
            </div>
            
            <div className="border border-foreground p-8 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-4 tracking-wider">Mentor</div>
              <div className="text-3xl font-black mb-4">PEER TECH MENTORING</div>
              <div className="text-lg font-light">Guided junior students in Python, SQL, and Power BI through structured sessions and real-world mini projects, helping them build industry-aligned skills and problem-solving confidence.</div>
            </div>
            
            <div className="border border-foreground p-8 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-4 tracking-wider">Community Builder</div>
              <div className="text-3xl font-black mb-4">STUDENT ENGAGEMENT & COLLABORATION</div>
              <div className="text-lg font-light">Created a collaborative learning environment by connecting peers with shared interests in data and technology, fostering knowledge exchange, accountability, and a culture of continuous improvement.</div>
            </div>
          </div>
        </div>

        {/* Research & Publications */}
        <div className="mt-20 border-t border-foreground pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl font-black mb-6">CERTIFICATIONS</h3>
              <div className="space-y-3">
                <div className="font-mono text-lg tracking-wider">Applied Machine Learning in Python • COURSERA</div>
                <div className="font-mono text-lg tracking-wider"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
