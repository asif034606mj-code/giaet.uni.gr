import { Program, FacultyMember, ResearchProject, Testimonial } from "../types";

export const PROGRAMS: Program[] = [
  {
    id: "me",
    name: "BSc in Mechanical Engineering",
    shortName: "Mechanical Engineering",
    tagline: "Drive Industrial Evolution & Aerospace Mechanics",
    faculty: "School of Mechanical Engineering",
    duration: "3.5 years (210 ECTS)",
    ects: 210,
    overview: "Our Mechanical Engineering curriculum fuses mathematical precision with industrial design, preparing global digital innovators for automotive, aerospace, thermal power, and manufacturing sectors. Includes active simulations and dynamic mechanical systems modeling.",
    careerOutcomes: [
      "Automotive Systems Engineer (e.g., BMW, Porsche)",
      "Aerospace Systems Integrator",
      "Thermal Analysis Engineer",
      "CAD/CAM Structural Consultant"
    ],
    keyCourses: ["Thermodynamics", "Fluid Mechanics", "CAD", "Machine Design"],
    tuitionPerSemester: 4500,
    virtualLabs: [
      "Fluid Flow Simulation Lab",
      "CNC Programming & Virtual Workshop",
      "Thermodynamic Cycle Engine Analyzer"
    ],
    icon: "Settings",
    semesters: [
      {
        number: 1,
        courses: [
          { code: "ME-101", name: "Engineering Mathematics I", ects: 8, description: "Calculus, differential equations, and linear algebra for core analytical modeling." },
          { code: "ME-102", name: "Technical Drawing & CAD Foundations", ects: 7, description: "2D and 3D geometric modeling using leading industry-standard CAD software." },
          { code: "ME-103", name: "Engineering Mechanics: Statics", ects: 8, description: "Force analysis on rigid structures, constraints, and equilibrium principles." },
          { code: "ME-104", name: "Introduction to Materials Science", ects: 7, description: "Atomic lattice, metallurgical structures, polymers, and testing standards." }
        ]
      },
      {
        number: 2,
        courses: [
          { code: "ME-201", name: "Engineering Mathematics II", ects: 8, description: "Complex variables, numerical methods, and statistics for mechanical models." },
          { code: "ME-202", name: "Engineering Mechanics: Dynamics", ects: 8, description: "Kinematics and kinetics of particles and rigid bodies." },
          { code: "ME-203", name: "Thermodynamics I", ects: 7, description: "Laws of classical thermodynamics, power cycles, and entropy equations." },
          { code: "ME-204", name: "Manufacturing Technology Basics", ects: 7, description: "Casting, forming, welding, and subtractive machineries." }
        ]
      },
      {
        number: 3,
        courses: [
          { code: "ME-301", name: "Fluid Mechanics", ects: 8, description: "Fluid statics, laminar and turbulent flows, conservation laws, Navier-Stokes." },
          { code: "ME-302", name: "Strength of Materials", ects: 7, description: "Stress-strain tensors, torsional strain, deflection, and beam theory." },
          { code: "ME-303", name: "Thermodynamics II & Heat Transfer", ects: 8, description: "Conduction, phase transitions, radiative transfer, and heat exchangers." },
          { code: "ME-304", name: "Kinematics & Machine Dynamics", ects: 7, description: "Gears, linkages, cams, and vibration control." }
        ]
      },
      {
        number: 4,
        courses: [
          { code: "ME-401", name: "Machine Elements & Systems Design", ects: 10, description: "Failure theories, design of shafts, springs, bearings, and bolts." },
          { code: "ME-402", name: "Measurements & Instrumentations", ects: 10, description: "Digital transducers, noise cancellation, and calibration labs." },
          { code: "ME-403", name: "Computational Fluid Dynamics (CFD)", ects: 10, description: "Finite volume methods, grid generation, and solver configurations." }
        ]
      },
      {
        number: 5,
        courses: [
          { code: "ME-501", name: "Advanced Finite Element Analysis (FEA)", ects: 10, description: "Structural dynamics, thermal stresses, and non-linear calculations." },
          { code: "ME-502", name: "Control Systems in Mechanics", ects: 10, description: "Feedback loops, PID parameterization, and state-space mechanics." },
          { code: "ME-503", name: "Mechatronic Integration", ects: 10, description: "Integrating actuators, sensors, and microcontrollers." }
        ]
      },
      {
        number: 6,
        courses: [
          { code: "ME-601", name: "Industrial Production & Energy Systems", ects: 10, description: "Steam turbines, internal combustion, and green transition strategies." },
          { code: "ME-602", name: "Professional Engineering Practice & Safety", ects: 10, description: "Code of ethics, green design standards, and hazardous systems safety." },
          { code: "ME-603", name: "Engineering Economics & Operations", ects: 10, description: "Capex, Opex, life cycle calculations, and project financing frameworks." }
        ]
      },
      {
        number: 7,
        courses: [
          { code: "ME-701", name: "Bachelor Thesis Project", ects: 20, description: "Independent scientific exploration of a mechanical system problem." },
          { code: "ME-702", name: "International Internship & Colloquium", ects: 10, description: "Practical application at GIAET affiliated engineering partners (Bosch, BMW)." }
        ]
      }
    ]
  },
  {
    id: "ipe",
    name: "BSc in Industrial & Production Engineering",
    shortName: "Industrial & Production",
    tagline: "Optimize Logistics, Automation & Smart Manufacturing",
    faculty: "School of Industrial & Production Engineering",
    duration: "3.5 years (210 ECTS)",
    ects: 210,
    overview: "A program bridging technology, mathematics, and high-level management to design ultra-efficient, highly automated industrial supply chains and production systems.",
    careerOutcomes: [
      "Operations Research Director",
      "Supply Chain Optimization Architect",
      "Lean Production Consultant",
      "Process Safety Manager"
    ],
    keyCourses: ["Manufacturing Systems", "Production Planning", "Industrial Operations"],
    tuitionPerSemester: 4300,
    virtualLabs: [
      "Arena Logistics & Queue Simulator",
      "Lean Production Cell Virtual Tour",
      "Supply Chain Risk Optimizer"
    ],
    icon: "Truck",
    semesters: [
      {
        number: 1,
        courses: [
          { code: "IP-101", name: "Engineering Algebra & Calculus", ects: 8, description: "Analytical tools for complex quantitative business optimization." },
          { code: "IP-102", name: "Chemistry of Materials & Coatings", ects: 7, description: "Molecular chemistry of plastics, alloys, and anti-corrosion barriers." },
          { code: "IP-103", name: "Foundations of Industrial Engineering", ects: 8, description: "History of manufacturing, logistics pipelines, layout concepts." },
          { code: "IP-104", name: "Basic Computer Applications", ects: 7, description: "Introduction to technical computing languages and modeling tools." }
        ]
      },
      {
        number: 2,
        courses: [
          { code: "IP-201", name: "Physics: Heat, Mechanics & Waves", ects: 8, description: "Statics, dynamics, and thermal applications to industrial plants." },
          { code: "IP-202", name: "Microeconomics & Project Cost Analysis", ects: 8, description: "Capital investment evaluations, profit margin, interest mechanics." },
          { code: "IP-203", name: "Work Methods & Ergonomics", ects: 7, description: "Time-motion study, workstation comfort, cognitive design factors." },
          { code: "IP-204", name: "Probability & Statistics", ects: 7, description: "Data distributions, estimation, and statistical control charts." }
        ]
      },
      {
        number: 3,
        courses: [
          { code: "IP-301", name: "Manufacturing Systems", ects: 8, description: "Metal cutting theory, automation cell fixtures, and tool geometry." },
          { code: "IP-302", name: "Operations Research I", ects: 7, description: "Linear programming, simplex algorithm, and transportation routing models." },
          { code: "IP-303", name: "Quality Engineering & Metrology", ects: 8, description: "Interferometry, surface profiling, and Six Sigma metrics." },
          { code: "IP-304", name: "Engineering Metallurgy", ects: 7, description: "Microstructure phase diagrams, heat treatments, and mechanical failure." }
        ]
      },
      {
        number: 4,
        courses: [
          { code: "IP-401", name: "Production Planning & Scheduling (MRPII/ERP)", ects: 10, description: "Aggregate scheduling, inventory optimization algorithms, and ERP systems." },
          { code: "IP-402", name: "Operations Research II", ects: 10, description: "Integer programming, queuing matrix systems, Markov decisions." },
          { code: "IP-403", name: "Facilities Layout & Plant Logistics", ects: 10, description: "Conveyor logic, plant flow patterns, and warehousing layouts." }
        ]
      },
      {
        number: 5,
        courses: [
          { code: "IP-501", name: "Industrial Operations & Automation", ects: 10, description: "Programmable manufacturing loops, robotic pick-and-place, CNC code." },
          { code: "IP-502", name: "System Simulation & Analysis", ects: 10, description: "Monte Carlo, discrete event models, and bottleneck detection." },
          { code: "IP-503", name: "Product Development & Design Ergonomics", ects: 10, description: "Translating customer demands into physical products using digital workflows." }
        ]
      },
      {
        number: 6,
        courses: [
          { code: "IP-601", name: "Supply Chain & Logistics Engineering", ects: 10, description: "Multi-echelon inventories, carrier optimization, and smart RFID grid." },
          { code: "IP-602", name: "Maintenance & Process Reliability", ects: 10, description: "Weibull breakdown analysis, preventative, and predictive maintenance schedules." },
          { code: "IP-603", name: "Environmental Systems & Waste Management", ects: 10, description: "ISO 14001, global circular economy models, industrial emission scrubbers." }
        ]
      },
      {
        number: 7,
        courses: [
          { code: "IP-701", name: "Bachelor Thesis", ects: 20, description: "Academic research on supply chain optimization or lean transformation." },
          { code: "IP-702", name: "Industrial Internship & Case Studies", ects: 10, description: "Project deployment at regional industrial centers of Volkswagen or Bosch." }
        ]
      }
    ]
  },
  {
    id: "ae",
    name: "BSc in Automation Engineering",
    shortName: "Automation & Robotics",
    tagline: "Engage Cyber-Physical Networks, SCADA & AI Systems",
    faculty: "School of Automation Engineering",
    duration: "3.5 years (210 ECTS)",
    ects: 210,
    overview: "Become an expert in smart mechanics. Master the integration of robotic appendages, real-time microprocessors, PLC control panels, and machine-vision algorithms representing Germany's Industry 4.0 vision.",
    careerOutcomes: [
      "Robotics Control Engineer (e.g., KUKA, Siemens)",
      "PLC Systems Developer",
      "SCADA Security Architect",
      "Automation Lead for Gigafactories"
    ],
    keyCourses: ["PLC", "Robotics", "Smart Manufacturing", "Industrial Control Systems"],
    tuitionPerSemester: 4600,
    virtualLabs: [
      "KUKA Robotic Manipulator simulator",
      "Virtual PLC Programming Panel",
      "Sensor Input & Noise Filter Laboratory"
    ],
    icon: "Cpu",
    semesters: [
      {
        number: 1,
        courses: [
          { code: "AE-101", name: "Introduction to Logic & Circuitry", ects: 8, description: "Logic gates, truth tables, and fundamental circuit layout laws." },
          { code: "AE-102", name: "Applied Mathematics I: Differential Calculus", ects: 7, description: "Modeling rate of change in motors and electrical pipelines." },
          { code: "AE-103", name: "Programming in C++", ects: 8, description: "Memory pointers, data loops, and object orientation for firmware." },
          { code: "AE-104", name: "Physics: Electromagnetism", ects: 7, description: "Magnetic flux, solenoids, relays, and power coils." }
        ]
      },
      {
        number: 2,
        courses: [
          { code: "AE-201", name: "Linear Systems & Signals", ects: 8, description: "Fourier transforms, continuous signals, and Laplace domain systems." },
          { code: "AE-202", name: "Active Electronics: Analog Design", ects: 8, description: "Operational amplifiers, rectifiers, and dynamic filter cards." },
          { code: "AE-203", name: "Digital Systems Design", ects: 7, description: "FPGAs, hardware descriptive languages (VHDL), state engines." },
          { code: "AE-204", name: "Microcontrollers & Architecture", ects: 7, description: "Register operations, timers, and serial interrupts for microchips." }
        ]
      },
      {
        number: 3,
        courses: [
          { code: "AE-301", name: "Industrial Control Systems", ects: 8, description: "PID control loop design, frequency analysis, and bode graphs." },
          { code: "AE-302", name: "Sensors & Actuators Technology", ects: 7, description: "Pneumatics, hydraulic valves, optical encoders, thermal sensors." },
          { code: "AE-303", name: "PLC Programming Theory", ects: 8, description: "Ladder logic, Function Block diagrams, Structured Text according to IEC 61131-3." },
          { code: "AE-304", name: "Data Networks & Fieldbuses", ects: 7, description: "Controller Area Network (CAN), Profibus, Modbus protocols." }
        ]
      },
      {
        number: 4,
        courses: [
          { code: "AE-401", name: "Robotics Kinematics & Mechanics", ects: 10, description: "Denavit-Hartenberg matrices, forward and inverse kinematics of robotic arms." },
          { code: "AE-402", name: "SCADA & Distributed Control Systems", ects: 10, description: "Human Machine Interface layouts, telemetry polling, server alarms." },
          { code: "AE-403", name: "Smart Manufacturing & Digital Twin", ects: 10, description: "Developing simulation models that communicate with hardware in real time." }
        ]
      },
      {
        number: 5,
        courses: [
          { code: "AE-501", name: "Machine Vision & AI Processing", ects: 10, description: "Spatial convolution filters, neural networks for defect detection." },
          { code: "AE-502", name: "Non-Linear & Robust Control", ects: 10, description: "State space feedback, Kalman state prediction, Lyapunov safety." },
          { code: "AE-503", name: "Hydraulic & Pneumatic Servos", ects: 10, description: "Directional valves, proportional fluid regulators, mechanical hydraulic linkages." }
        ]
      },
      {
        number: 6,
        courses: [
          { code: "AE-601", name: "Autonomous Mobile Systems", ects: 10, description: "LIDAR mappings, SLAM algorithms, pathing calculations for autonomous haulers." },
          { code: "AE-602", name: "Cybersecurity in Automation (IEC 62443)", ects: 10, description: "Protecting plant control networks from network packet injection attacks." },
          { code: "AE-603", name: "Industrial Safety Systems (SIL/SIS)", ects: 10, description: "Safety Integrity Levels, emergency shutdowns, fail-secure states." }
        ]
      },
      {
        number: 7,
        courses: [
          { code: "AE-701", name: "Bachelor Thesis in Automation", ects: 20, description: "Design of a custom automated or robotic cell project." },
          { code: "AE-702", name: "Internship at Robotics Tech Facility", ects: 10, description: "Deployment in automation projects at BMW, Siemens, or KUKA." }
        ]
      }
    ]
  },
  {
    id: "eee",
    name: "BSc in Electrical & Electronic Engineering",
    shortName: "Electrical & Electronic",
    tagline: "Architect Silicon Microchips & Gigawatt Smart Grids",
    faculty: "School of Electrical & Electronic Engineering",
    duration: "3.5 years (210 ECTS)",
    ects: 210,
    overview: "Underlying principles of power and communications. Covers semiconductor physics, solar arrays, power converters, and high-voltage grid topologies for tomorrow's green energy architectures.",
    careerOutcomes: [
      "Power Grid Stabilization Expert",
      "Analog IC Layout Architect",
      "Power Electronics Developer",
      "RF Communications Engineer"
    ],
    keyCourses: ["Circuit Theory", "Power Systems", "Electronics", "Renewable Energy"],
    tuitionPerSemester: 4400,
    virtualLabs: [
      "High Voltage Virtual Grid Control Panel",
      "Integrated Circuit Sandbox",
      "Dynamic Frequency Spectrum Generator"
    ],
    icon: "Zap",
    semesters: [
      {
        number: 1,
        courses: [
          { code: "EE-101", name: "Circuit Theory I: DC Analysis", ects: 8, description: "Mesh/Nodal analysis, Superposition, Thevenin equivalent circuits." },
          { code: "EE-102", name: "Physics of Materials", ects: 7, description: "Atomic structure, conduction bands, dielectrics, magnetic domains." },
          { code: "EE-103", name: "Mathematical Methods for Electrical Engineers", ects: 8, description: "Integration techniques, Fourier expansions, complex algebra." },
          { code: "EE-104", name: "Introduction to Electronics Lab", ects: 7, description: "Oscilloscopes, multimeters, passive filter configurations." }
        ]
      },
      {
        number: 2,
        courses: [
          { code: "EE-201", name: "Circuit Theory II: AC Analysis", ects: 8, description: "Phasors, three-phase transformers, power factors, and resonance." },
          { code: "EE-202", name: "Applied Electromagnetics", ects: 8, description: "Maxwell Equations, waveguides, skin depth, electromagnetic wave propagation." },
          { code: "EE-203", name: "Semiconductor Physics & Devices", ects: 7, description: "PN junctions, Bipolar transistors, MOSFET physics." },
          { code: "EE-204", name: "Computational Methods in Python", ects: 7, description: "Numerical linear algebra, differential equations solver, regression." }
        ]
      },
      {
        number: 3,
        courses: [
          { code: "EE-301", name: "Analog Electronic Circuits", ects: 8, description: "Active filters, power amplifiers, differential amplifiers." },
          { code: "EE-302", name: "Electrical Machines & Transformers", ects: 7, description: "DC Motors, synchronous generators, induction motors, spatial flux fields." },
          { code: "EE-303", name: "Signals, Convolution & Filters", ects: 8, description: "Z-transform, discrete convolution, FIR and IIR digital filter cards." },
          { code: "EE-304", name: "Power Systems Foundations", ects: 7, description: "Per-unit system, admittance matrix, power flow equations." }
        ]
      },
      {
        number: 4,
        courses: [
          { code: "EE-401", name: "Power Electronics State Devices", ects: 10, description: "Thyristors, IGBTs, Buck-Boost converters, dynamic inverter modules." },
          { code: "EE-402", name: "Digital Architecture & Microchips", ects: 10, description: "ALU units, cache mappings, bus hierarchies, assembly programming." },
          { code: "EE-403", name: "Renewable Energy Integration Concepts", ects: 10, description: "Grid synchronization of solar inverters and wind turbomachineries." }
        ]
      },
      {
        number: 5,
        courses: [
          { code: "EE-501", name: "High-Voltage Grid Engineering", ects: 10, description: "Insulator breakdown, surge protect circuits, corona discharge." },
          { code: "EE-502", name: "Radio Frequency & Antennas", ects: 10, description: "Dipole antennas, Smith charts, impedance matching, RF noise fields." },
          { code: "EE-503", name: "Digital Signal Processing Algorithms", ects: 10, description: "Fast Fourier Transform (FFT), recursive digital controllers." }
        ]
      },
      {
        number: 6,
        courses: [
          { code: "EE-601", name: "Micro-electromechanical Systems (MEMS)", ects: 10, description: "Silicon etching, tiny actuators, dynamic microscopic switches." },
          { code: "EE-602", name: "Smart Grid Communication & Control", ects: 10, description: "Phasor Measurement Units, telemetry, load shed algorithms." },
          { code: "EE-603", name: "VLSI Circuit Design Schematics", ects: 10, description: "Silicon layout, transistor sizing, parasitic resistance mitigation." }
        ]
      },
      {
        number: 7,
        courses: [
          { code: "EE-701", name: "Bachelor Thesis in EEE", ects: 20, description: "Design of a microelectronics array or clean energy transformer." },
          { code: "EE-702", name: "Electronics Industry Practical Project", ects: 10, description: "Fulfillment of design tasks at BMW or Siemens Microcircuit departments." }
        ]
      }
    ]
  },
  {
    id: "cse",
    name: "BSc in Computer Science & Engineering",
    shortName: "Computer Science",
    tagline: "Build Cloud Architectures, Machine Learning & Embedded RTOS",
    faculty: "School of Computer Science & Engineering",
    duration: "3.5 years (210 ECTS)",
    ects: 210,
    overview: "A comprehensive course focusing on software scaling, data structure algorithms, distributed cloud operations, and cutting-edge artificial intelligence, built with modern standards.",
    careerOutcomes: [
      "AI/Machine Learning Architect",
      "Full Stack Cloud Systems Engineer",
      "Embedded OS Engineer",
      "Distributed Networks Security Consultant"
    ],
    keyCourses: ["Programming", "Data Structures", "Artificial Intelligence", "Web Engineering"],
    tuitionPerSemester: 4700,
    virtualLabs: [
      "Cloud Cluster Deployment Terminal",
      "Neural Network Layer Architect",
      "Operating System Kernel Simulator"
    ],
    icon: "Code",
    semesters: [
      {
        number: 1,
        courses: [
          { code: "CS-101", name: "Introduction to Computer Science", ects: 8, description: "Binary mathematics, compilation pipelines, algorithm concepts." },
          { code: "CS-102", name: "Mathematical Foundations (Discrete Math)", ects: 7, description: "Set theory, propositional logic, graph pathways, finite automata." },
          { code: "CS-103", name: "Structured Programming using Python", ects: 8, description: "Loops, functional scope, memory usage, algorithm scripting." },
          { code: "CS-104", name: "Fundamentals of Microprocessors", ects: 7, description: "Registers, address paths, machine language basics." }
        ]
      },
      {
        number: 2,
        courses: [
          { code: "CS-201", name: "Data Structures & Core Algorithms", ects: 8, description: "Linked lists, binary trees, red-black trees, hash structures." },
          { code: "CS-202", name: "Object Oriented Design (Java)", ects: 8, description: "Inheritance, encapsulation, design patterns, testing frameworks." },
          { code: "CS-203", name: "Database Engineering Theory", ects: 7, description: "Relational algebra, SQL mechanics, indexing, acid transactions." },
          { code: "CS-204", name: "Assembly & Hardware Interfaces", ects: 7, description: "Input/output interrupts, direct memory access, system timings." }
        ]
      },
      {
        number: 3,
        courses: [
          { code: "CS-301", name: "Analysis & Complexity of Algorithms", ects: 8, description: "Big O metrics, dynamic programming, NP-complete boundaries." },
          { code: "CS-302", name: "Operating System Kernels", ects: 7, description: "Scheduling, memory paging, dynamic semaphores, file tables." },
          { code: "CS-303", name: "Web Engineering Systems", ects: 8, description: "HTTP layer protocols, React/Next development, Node full-stack structures." },
          { code: "CS-304", name: "Computer Network Architecture", ects: 7, description: "TCP/IP models, routing protocols, switches, load balancers." }
        ]
      },
      {
        number: 4,
        courses: [
          { code: "CS-401", name: "Principles of Software Engineering", ects: 10, description: "Agile, UML, testing pipelines, code metrics, versioning." },
          { code: "CS-402", name: "Theory of Computation & Compilers", ects: 10, description: "Syntactic parsers, Lex/Yacc implementations, intermediate compilation." },
          { code: "CS-403", name: "Cloud Computing & DevOps Solutions", ects: 10, description: "Docker, Kubernetes clusters, scaling strategies, AWS/GCP APIs." }
        ]
      },
      {
        number: 5,
        courses: [
          { code: "CS-501", name: "Artificial Intelligence Foundations", ects: 10, description: "Heuristics, search trees, expert networks, logical inference." },
          { code: "CS-502", name: "Cryptography & Cybersecurity", ects: 10, description: "AES, RSA protocols, SHA hashing, TLS channels, firewall rules." },
          { code: "CS-503", name: "Embedded Real-Time Systems (RTOS)", ects: 10, description: "Preemptive schedulers, thread safety, low-power states." }
        ]
      },
      {
        number: 6,
        courses: [
          { code: "CS-601", name: "Machine Learning & Neural Networks", ects: 10, description: "Backpropagation, CNNs for computer vision, transformer blocks." },
          { code: "CS-602", name: "Distributed Databases & Analytics", ects: 10, description: "Sharding, NoSQL setups, MapReduce models, Spark pipelines." },
          { code: "CS-603", name: "Human-Centered Design", ects: 10, description: "User flows, accessible typography, contrast metrics, layout loops." }
        ]
      },
      {
        number: 7,
        courses: [
          { code: "CS-701", name: "Bachelor Thesis in CSE", ects: 20, description: "Scientific development of an AI, cloud, or embedded application." },
          { code: "CS-702", name: "Vite/Express Industry Practicum", ects: 10, description: "Software production tasks with SAP, Volkswagen, or local Stuttgart startups." }
        ]
      }
    ]
  },
  {
    id: "et",
    name: "BSc in Energy Technology",
    shortName: "Energy Technology",
    tagline: "Build Sustainable Futures, Hydrogen Power & Smart Grids",
    faculty: "School of Energy Technology",
    duration: "3.5 years (210 ECTS)",
    ects: 210,
    overview: "Explore clean, renewable energy systems. This program trains forward-thinking engineers in solar photovoltaic layouts, wind aerodynamic farms, bio-fuels, dynamic geothermal systems, and smart grid automation.",
    careerOutcomes: [
      "Renewable Energy Infrastructure Director",
      "Smart Grid Optimization Planner",
      "Hydrogen Fuel Cell Engineer",
      "Energy Policy Consultant"
    ],
    keyCourses: ["Solar Energy", "Smart Grid Systems", "Power Generation", "Sustainable Energy"],
    tuitionPerSemester: 4450,
    virtualLabs: [
      "Dynamic Wind Turbine Aerodynamics Simulator",
      "Solar Cell Microclimate Analyst",
      "Geothermal Reservoir Thermal Predictor"
    ],
    icon: "Sun",
    semesters: [
      {
        number: 1,
        courses: [
          { code: "ET-101", name: "Engineering Chemistry: Fuels & Oxides", ects: 8, description: "Combustion energy, hydrocarbon physics, gas physics." },
          { code: "ET-102", name: "Calculus for Power Curves", ects: 7, description: "Mathematical methods to model wind speed and solar curves." },
          { code: "ET-103", name: "Basics of Renewable Energy", ects: 8, description: "Overview of solar, wind, biomass, wave, and nuclear systems." },
          { code: "ET-104", name: "Introduction to Thermal Fluids Lab", ects: 7, description: "Measuring viscosity, heat flow, and pressure states in pumps." }
        ]
      },
      {
        number: 2,
        courses: [
          { code: "ET-201", name: "Thermodynamics of Power Plants", ects: 8, description: "Rankine cycles, Brayton loops, efficiency calculations." },
          { code: "ET-202", name: "Electrical Circuit Basics", ects: 8, description: "AC circuits, voltage transformers, and power meters." },
          { code: "ET-203", name: "Heat & Mass Transfer", ects: 7, description: "Conduction heat maps, convective currents, and thermal dissipation." },
          { code: "ET-204", name: "Environmental Impact Assessment", ects: 7, description: "Carbon budgeting, environmental metrics, green legislations." }
        ]
      },
      {
        number: 3,
        courses: [
          { code: "ET-301", name: "Solar Energy: Solar Thermal & Photovoltaic", ects: 8, description: "Silicon doping, quantum efficiency, solar tracking algorithms." },
          { code: "ET-302", name: "Wind Turbine Engineering Dynamics", ects: 7, description: "Betz limit, blade aerodynamics, dynamic generator gearboxes." },
          { code: "ET-303", name: "Bio-Energy & Alternative Fuels", ects: 8, description: "Anaerobic digesters, bio-ethanol synthesis, municipal waste-to-energy systems." },
          { code: "ET-304", name: "Hydroelectric & Geothermal Systems", ects: 7, description: "Pelton and Kaplan turbines, geothermal reservoir loops." }
        ]
      },
      {
        number: 4,
        courses: [
          { code: "ET-401", name: "Smart Grid Systems", ects: 10, description: "Bi-directional telemetries, load profiles, demand responses." },
          { code: "ET-402", name: "Electrochemical Energy Storage (Batteries)", ects: 10, description: "Lithium chemistries, solid-state designs, flow cell dynamics." },
          { code: "ET-403", name: "Hydrogen Production & Fuel Cells", ects: 10, description: "Proton Exchange Membrane electrolysis, storage challenges." }
        ]
      },
      {
        number: 5,
        courses: [
          { code: "ET-501", name: "Advanced Power Generation & Turbines", ects: 10, description: "Combined cycle gas turbine efficiency, carbon capture modules." },
          { code: "ET-502", name: "Energy Systems Auditing & Conservation", ects: 10, description: "Waste heat recovery, thermal building efficiency, ISO 50001." },
          { code: "ET-503", name: "Micro-grid System Modeling", ects: 10, description: "Islanded power operations, local energy management algorithms." }
        ]
      },
      {
        number: 6,
        courses: [
          { code: "ET-601", name: "Sustainable Energy Economics", ects: 10, description: "Levelized Cost of Energy (LCOE), green tariffs, carbon trading markets." },
          { code: "ET-602", name: "High-Voltage DC & AC Transmission", ects: 10, description: "Grid stability, reactive power mitigation, subsea cable modeling." },
          { code: "ET-603", name: "Energy Grid Policies & Risk Analytics", ects: 10, description: "German Energiewende analysis, supply insurance policies, risk matrix." }
        ]
      },
      {
        number: 7,
        courses: [
          { code: "ET-701", name: "Bachelor Thesis in Energy Technology", ects: 20, description: "Syllabus exploration of solar Arrays or localized smart grids." },
          { code: "ET-702", name: "Industry Internship in Stuttgart Clean Tech", ects: 10, description: "Cooperation on green transition audits at Bosch or Stuttgart energy hubs." }
        ]
      }
    ]
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  // Executive Leadership
  {
    name: "Prof. Dr.-Ing. Hans-Dieter Schöning",
    title: "University Rector and Executive Dean",
    department: "Executive & Administrative Department",
    education: "PhD in Mechanical Systems, Technical University of Munich",
    specialization: "Smart Factory Automation & Institutional Strategy",
    image: "https://picsum.photos/seed/rector/400/400",
    email: "h.schoening@giaet.de"
  },
  {
    name: "Dr. Birgit von Hohenzollern",
    title: "Director of International Admissions & Registrar",
    department: "Executive & Administrative Department",
    education: "Doctorate in Academic Management, Heidelberg University",
    specialization: "Strategic Global Enrollment & Multi-Lateral Scholarships",
    image: "https://picsum.photos/seed/registrar/400/400",
    email: "b.hohenzollern@giaet.de"
  },
  {
    name: "Dr. Thomas Meyer",
    title: "Chief Information Officer & Digital LMS Specialist",
    department: "Executive & Administrative Department",
    education: "PhD in Computer Networks, University of Stuttgart",
    specialization: "Virtual Laboratories Network & AI Study Interfaces",
    image: "https://picsum.photos/seed/cio/400/400",
    email: "t.meyer@giaet.de"
  },
  // ME
  {
    name: "Prof. Dr. Klaus Werner",
    title: "Head of Mechanical Engineering School",
    department: "School of Mechanical Engineering",
    education: "PhD in Fluid Modeling, ETH Zurich",
    specialization: "Aerodynamic Simulation & Classical Thermodynamics",
    image: "https://picsum.photos/seed/werner/400/400",
    email: "k.werner@giaet.de"
  },
  // IPE
  {
    name: "Dr. Ingrid Fischer",
    title: "Associate Professor in Lean Manufacturing",
    department: "School of Industrial & Production Engineering",
    education: "Doctorate in Operations Research, TU Berlin",
    specialization: "Six Sigma Management, Manufacturing Systems",
    image: "https://picsum.photos/seed/fischer/400/400",
    email: "i.fischer@giaet.de"
  },
  // AE
  {
    name: "Prof. Dr.-Ing. Marcus Becker",
    title: "Professor of Cyber-Physical Robotics",
    department: "School of Automation Engineering",
    education: "PhD in Robotics, Karlsruhe Institute of Technology",
    specialization: "SCADA Infrastructure, KUKA Robotic Kinematics",
    image: "https://picsum.photos/seed/becker/400/400",
    email: "m.becker@giaet.de"
  },
  // EEE
  {
    name: "Dr. Amara Ndibe",
    title: "Senior Lecturer in Power Electronics",
    department: "School of Electrical & Electronic Engineering",
    education: "PhD in Electrical Engineering, Imperial College London",
    specialization: "Semiconductor Physics & AC Transformer Grids",
    image: "https://picsum.photos/seed/ndibe/400/400",
    email: "a.ndibe@giaet.de"
  },
  // CSE
  {
    name: "Prof. Dr. Gerhard Schmidt",
    title: "Head of Computer Science & Software Engineering",
    department: "School of Computer Science & Engineering",
    education: "PhD in AI and Neural Networks, Stanford University",
    specialization: "Machine Learning, Compiler Theory, Cloud Operations",
    image: "https://picsum.photos/seed/schmidt/400/400",
    email: "g.schmidt@giaet.de"
  },
  // ET
  {
    name: "Dr. Fiona O'Malley",
    title: "Director of Clean Energy Technology Research",
    department: "School of Energy Technology",
    education: "PhD in Solar Solid-state Physics, University College Dublin",
    specialization: "Smart Grid Load Profiles, Wind Betz Aerodynamics",
    image: "https://picsum.photos/seed/omalley/400/400",
    email: "f.omalley@giaet.de"
  }
];

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: "smartgrid",
    title: "Decentralized German Smart Giau-Grid (Energiewende Optimization)",
    lead: "Dr. Fiona O'Malley",
    lab: "Advanced Sustainable Energy Laboratory, Stuttgart",
    description: "Developing bi-directional communication channels that optimize energy load distribution among decentralized solar arrays, avoiding grid congestion."
  },
  {
    id: "robot",
    title: "AI-Autonomous Cooperative Robotic Grippers with KUKA",
    lead: "Prof. Dr.-Ing. Marcus Becker",
    lab: "Mechatronics & Vision AI Lab",
    description: "Training neural network systems that coordinate robotic hands to perform microminiature components assembly with 99.98% accuracy."
  },
  {
    id: "cleanfuel",
    title: "High-Efficiency Clean Solid-State Hydrogen Storage Systems",
    lead: "Dr. Amara Ndibe",
    lab: "High-Voltage & Power Technologies Laboratory",
    description: "Fusing metal alloys with solid state polymer batteries to stabilize hydrogen transfer kinetics at normal atmospheric temperatures."
  }
];

export const PARTNER_LOGOS = [
  { name: "Siemens", logo: "⚡" },
  { name: "Bosch", logo: "🛠️" },
  { name: "BMW", logo: "🚗" },
  { name: "SAP", logo: "💻" },
  { name: "Volkswagen", logo: "🚙" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sardar Asifur Rahman",
    country: "Bangladesh",
    program: "BSc in Energy Technology",
    text: "The combination of top-tier German curriculum with remote accessibility allowed me to study complex power technologies from Bangladesh without interruptions. The virtual wind lab is incredible!",
    image: "https://picsum.photos/seed/sardar/300/300",
    graduationYear: 2026
  },
  {
    name: "Sofia Müller",
    country: "Germany",
    program: "BSc in Automation Engineering",
    text: "GIAET allows me to balance my working hours at a technology park in Stuttgart with deep, robust automation courses. Completing PLC ladders on their digital twin is extremely realistic.",
    image: "https://picsum.photos/seed/sofia/300/300",
    graduationYear: 2026
  },
  {
    name: "Grace Muthoni",
    country: "Kenya",
    program: "BSc in Computer Science & Engineering",
    text: "Their cloud deployment sandbox and advanced AI curricula gave me multiple offers before graduation. Learning compiler design and neural networking synchronously with German standards is amazing.",
    image: "https://picsum.photos/seed/grace/300/300",
    graduationYear: 2026
  }
];

export const FAQS = [
  {
    question: "Is GIAET registered or recognized under European Standards?",
    answer: "Yes, our programs strictly adhere to European Credit Transfer and Accumulation System (ECTS) standards. Each BSc Engineering degree features a robust 210 ECTS framework matching leading German institutions, ensuring international credential recognition for both industry and higher master degrees."
  },
  {
    question: "How do virtual laboratories operate for practical courses?",
    answer: "We utilize advanced browser-based custom simulators and graphical models. For example, in Pneumatics and PLC logic, you program using a digital replica of an industrial board with real physical sensor readings. Structural engineering uses stress-analysis models running server-side solvers."
  },
  {
    question: "Are there any physical component requirements or campus visits?",
    answer: "GIAET is built with a hybrid digital-first philosophy. All tests, classes, and simulations are completely online. However, we hold voluntary Stuttgart summer bootcamps, and students can do internships or thesis projects at physical locations of our partner companies (Bosch, BMW) worldwide."
  },
  {
    question: "What is the application timeline, selection rate, and language rules?",
    answer: "Applications are processed quarterly. English language test exemptions apply to students who have completed secondary school with English as the instruction language. Selection takes into account transcript grades in Mathematics, Physics, and IT."
  }
];
