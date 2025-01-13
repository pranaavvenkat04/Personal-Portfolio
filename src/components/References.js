import React from "react";

const References = () => {
  const references = [
    {
      text: "New York Student Profile: Pranaav Venkatasubramanian",
      url: "https://site.nyit.edu/news/profiles/student_profile_pranaav_venkatasubramanian",
    },
    {
      text: "Able News: Statewide Disabilities Invention Competition",
      url: "https://ablenews.com/statewide-disabilities-invention-competition/",
    },
    {
      text: "NYIT Merit Pages",
      url: "https://meritpages.com/Pranaav-Venkatasubramanian/7198927",
    },
    {
      text: "NYIT Engineering Students Take Top Prizes at CREATE Symposium",
      url: "https://www.nyit.edu/news/articles/engineering-students-take-home-top-prizes-at-create-symposium/",
    },
    {
      text: "United Engineering Hackathon",
      url: "https://blogs.nyit.edu/inside_engineering/united_engineering_manhattan_hosts_their_2nd_annual_hackathon",
    },
    {
      text: "SGA Executive Board",
      url: "https://www.nyit.edu/student-life/long-island/student-leadership/",
    },
  ];

  return (
    <section id="references" className="py-16 backdrop-blur-sm bg-white/30">

      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">References</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((ref, index) => (
            <a
              key={index}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start text-left space-x-2 text-gray-700 hover:text-gray-900 transition-all duration-300"
            >
              <div className="flex-1">
                <span className="relative inline-block">
                  {ref.text}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform scale-x-0 transition-transform duration-300 
                      group-hover:scale-x-100 group-hover:origin-left
                      origin-right group-hover:group-[:not(:hover)]:origin-right" />
                </span>
              </div>
              <div className="relative w-4 flex-shrink-0">
                <img
                  src="/icons/external_link.png"
                  alt="external link"
                  className="w-4 h-4"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
