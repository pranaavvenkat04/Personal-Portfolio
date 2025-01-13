export const mainTags = ['ALL', 'PYTHON', 'REACT', 'NASA'];

{/* project_exmaple = 
    {
        title: "",
        image: "/projects/images/test.png",
        description: [
            "Bullet 1",
            "Bullet 2",
            "Bullet 3"
        ],
        tags: ["TAG 1", "TAG 2", "TAG 3", "TAG4"],
        priority: 1,
        links: {
            github: "https://github.com/pranaavvenkat04/REPO-NAME",
            youtube: "https://youtube.com/,
            documents: [
            {
                name: "TOPS Name",
                url: "/projects/files/PROJECT_TOPS.pdf",
                color: "blue"
            },
            {
                name: "US Patent #",
                url: "/projects/files/USPATENT#.pdf",
                color: "blue"
            }
            ],
            type: "pdf"
        }
    }
*/}

export const projects = [
  {
    title: "RENCAT (Remote, Noninvasive, Cardiac Activity Tracer)",
    image: "/projects/images/RENCAT.png",
    description: [
        "A NASA Prototype that utilizes a novel laser vibrometer sensor for monitoring cardiac activities remotely and non-invasively, specifically heart functions of valve/chamber opening and closing cycles (cardiac cycles).",
        "Designed software that analyzes and filters the readings from an interferometer and developed a program that uses cardiac data to mimic a heartbeat on a speaker.",
        "Unable to provide Demo/Code due to NDA"
    ],
    tags: ["Python", "Raspberry Pi", "Linux", "NASA"],
    priority: 1,
    links: {
      documents: [
        {
          name: "LAR-TOPS-316",
          url: "/projects/files/RENCAT_TOPS.pdf",
          color: "blue"
        },
        {
          name: "US11119072",
          url: "/projects/files/US11119072.pdf",
          color: "blue"
        }
      ],
      type: "pdf"
    }
  },
  {
    title: "Variable Visibility Glasses",
    image: "/projects/images/variable_visibility.png",
    description: [
        "NASA developed and tested special glasses that uses novel sensors to determine head position, the glasses restrict the view out of the aircraft windscreen but allow the pilot to clearly see the entire instrument panel, providing a much more realistic low visibility instrument flying experience.",
        "Developed software that connects the sensors to the glasses which hide/show depending on the orientation of the user's head and created a user interface mimicking a cockpit of an aircraft for demonstration purposes.",
        "Unable to provide Demo/Code due to NDA"
    ],
    tags: ["Python", "Raspberry Pi", "Linux", "NASA"],
    priority: 3,
    links: {
      documents: [
        {
          name: "LAR-TOPS-101",
          url: "/projects/files/Variable_TOPS.pdf",
          color: "blue"
        },
        {
          name: "US8411214",
          url: "/projects/files/US8411214.pdf",
          color: "blue"
        }
      ],
      type: "pdf"
    }
  },
  {
    title: "Model-Based Prognostics For Batteries",
    image: "/projects/images/battery_prog.png",
    description: [
        "A NASA prototype software solution that predicts the remaining useful life of an object in use. It develops a mathematical model to describe battery behavior during individual discharge cycles as well as over its cycle life. The models used to estimate the remaining useful life of batteries are linked to the internal electro-chemical processes of the battery.",
        "Collaborated with the mechanical & electrical engineering team to create a system that measures voltages from a battery and compares the data against a custom-made mathematical model.",
        "Unable to provide Demo/Code due to NDA"
    ],
    tags: ["Python", "Raspberry Pi", "Linux", "HTML", "CSS", "NASA"],
    priority: 3,
    links: {
      documents: [
        {
          name: "TOP2-144",
          url: "/projects/files/Prognostics_TOPS.pdf",
          color: "blue"
        },
        {
          name: "US8332342",
          url: "/projects/files/US8332342.pdf",
          color: "blue"
        },
        {
          name: "US8725456",
          url: "/projects/files/US8725456.pdf",
          color: "blue"
        }
      ],
      type: "pdf"
    }
  },
  {
    title: "Gamified Silk Screen Cleaner",
    image: "/projects/images/silk_screen.png",
    description: [
        "Placed 1st at the 10th annual NYSID (New York State Industries for the Disabled) CREATE (Cultivating Resources for Employment with Assistive TEchnology) Competition for the year 2023-2024. Coordinated with Spectrum Designs, a custom apparel enterprise with a mission statement to create neurodiverse employment opportunities.",
        "Our team designed a device that gamifies the task of cleaning for people with Autism. I developed a game system, and the operating system to control a multi-motor and chemical-based system, providing a cleaner, efficient way of removing plastisol ink from screen printing equipment.",
        "View Project Video for more details"
    ],
    tags: ["Python", "Raspberry Pi", "Linux"],
    priority: 1,
    links: {
      youtube: "https://www.youtube.com/watch?v=x-vOqySdoQI"
    }
  },
  {
    title: "Low Speed Motor Controller",
    image: "/projects/images/Precision.png",
    description: [
        "NASA prototype that developed a method for controlling precise motion of a Brushless DC (BLDC) motor using relatively inexpensive components. This technology uses a method to control BLDC motors over a broad range of speeds, ranging from about 0.025 rpm to about 7000 rpm. It can be integrated into surgical robots that require advanced precision motion control systems.",
        "Engineered a small system using a Raspberry Pi and a motor controller with a custom program which implements NASA's algorithm that modifies the electrical signals to the motor that allows a DC brushless motor to move at a lower speed.",
        "Unable to provide Demo/Code due to NDA"
    ],
    tags: ["Python", "Raspberry Pi", "Linux", "NASA"],
    priority: 3,
    links: {
      documents: [
        {
          name: "MSC-TOPS-76",
          url: "/projects/files/Precision_TOPS.pdf",
          color: "blue"
        },
        {
          name: "US10884012",
          url: "/projects/files/US10884012.pdf",
          color: "blue"
        }
      ],
      type: "pdf"
    }
  },
  {
    title: "PUMA (Portable Unit for Metabolic Analysis)",
    image: "/projects/images/PUMA.png",
    description: [
        "A NASA Prototype designed to sample real-time breath samples and predict hypoxia in pilots, divers, and first responders; and help physicians monitor chronic pulmonary disease.",
        "Created the operating system connecting the various sensors and implemented the mathematical algorithm calculating the volumetric flow rate of CO2 and O2 to show whether hypoxia will be reached.",
        "Implemented a user-interface system for easy visualization of the data coming from the sensors and implementing the patent's mathematical calculations.",
        "Unable to provide Demo/Code due to NDA"
    ],
    tags: ["Python", "Raspberry Pi", "Linux", "NASA"],
    priority: 2,
    links: {
      documents: [
        {
          name: "LEW-TOPS-16",
          url: "/projects/files/PUMA_TOPS.pdf",
          color: "blue"
        },
        {
          name: "US11129546",
          url: "/projects/files/US11129546.pdf",
          color: "blue"
        }
      ],
      type: "pdf"
    }
  },
  {
    title: "Filtering Molecules with Nanotube Technology",
    image: "/projects/images/Filtering.png",
    description: [
        "Technology envisioned by NASA to create a filtration device to eliminate contaminants from water supplies. Originally developed to purify wastewater for reuse aboard the International Space Station, the innovation is applicable to numerous situations on Earth where there is a need to collect potable, medical-grade water from a contaminated water supply. The unique aspect of the technology is its use of acoustics rather than pressure to drive water through small-diameter carbon nanotubes.",
        "Designed software that controls the acoustic motor and created a menu-interface for users to control the motor's frequency to demonstrate the prototype.",
        "Unable to provide Demo/Code due to NDA"
    ],
    tags: ["Python", "Raspberry Pi", "Linux", "NASA"],
    priority: 3,
    links: {
      documents: [
        {
          name: "LEW-TOPS-16",
          url: "/projects/files/PUMA_TOPS.pdf",
          color: "blue"
        },
        {
          name: "US11129546",
          url: "/projects/files/US11129546.pdf",
          color: "blue"
        }
      ],
      type: "pdf"
    }
  },
  {
    title: "XpressAssist",
    image: "/projects/images/xpressassist.png",
    description: [
        "Developed a web-based software using ASP.NET framework with C# and a Microsoft SQL Server database to assist managers and support workers of people with Autism. This was a NYSID (New York State for Industries for the Disabled, Inc.) CREATE (Cultivating Resources for Employment with Assistive TEchnology) for the year 2022-2023.",
        "Software included a web-based clocking-in system where employees are shown their workstation for the concurrent day, with the managers and support workers getting mobile notifications of the employee. The employee can also notify their managers for any additional assistance, bathroom breaks, etc.",
        "The managers can receive a weekly report from the employee and see the data prediction model of the frequency of certain activities based on the given workstation. This model allows managers to visualize whether certain employees may experience difficulties communicating with the manager about their disinterest in a particular task.",
        "View Project Video for more details"
    ],
    tags: ["C#", "HTML", "CSS", "Javascript", "SQL", "Raspberry Pi"],
    priority: 4,
    links: {
      youtube: "https://www.youtube.com/watch?v=F3R-SXwZiIg"
    }
  },
  {
    title: "AzureADBlazor",
    image: "/projects/images/AzureADBlazor.png",
    description: [
        "A web-based software application that allows patients to view pathology reports disclosing any illnesses or diseases after on-site testing.",
        "Using Blazor Web Assembly for rapid website rendering, Azure Active Directory for authentication, and QuestPDF for generating PDFs from SQL database data."
    ],
    tags: ["C#", "HTML", "CSS", "Blazor", "SQL", "Azure AD"],
    priority: 4,
    links: {
      github: "https://github.com/pranaavvenkat04/AzureADBlazor"
    }
  },
  {
    title: "Chess Engine",
    image: "/projects/images/chess_engine.png",
    description: [
        "A chess board to play a game of chess. Developed to showcase a chess move as a finite state automaton.",
        "Click on Demo to view the actual link"
    ],
    tags: ["React", "HTML", "CSS"],
    priority: 2,
    links: {
      github: "https://github.com/pranaavvenkat04/chess-board"
    }
  },
  {
    title: "Attend Ease",
    image: "/projects/images/attend_ease.png",
    description: [
        "An attendance tracker that utilizes NFC cards and readers to check students into classes.",
        "Designed the Attendance Dashboard using React and Firebase as data storage for Instructors to view students' attendance for each class.",
        "iOs and Android Apps connect to the firebase database allowing the student's attendance to be recorded, as well as, a custom NFC Tag215 card can be used to log student's presence."
    ],
    tags: ["React", "Firebase","HTML", "CSS", "Python", "Raspberry Pi", "Swift.js", "Linux"],
    priority: 2,
    links: {
      github: "https://github.com/DoubleA0/Attendance-Tracker-Project"
    }
  },
];

export const buttonColors = {
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  purple: "bg-purple-600 hover:bg-purple-700",
  red: "bg-red-600 hover:bg-red-700"
};