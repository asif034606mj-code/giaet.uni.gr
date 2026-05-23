export interface Student {
  registrationNo: string;
  name: string;
  country: string;
  degree: string;
  duration: string;
  passingYear: string;
  cgpa: number;
  status: "Passed Out" | "Active" | "Withdrawn";
  major: string;
}

export interface Course {
  code: string;
  name: string;
  ects: number;
  description: string;
}

export interface Semester {
  number: number;
  courses: Course[];
}

export interface Program {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  faculty: string;
  duration: string;
  ects: number;
  overview: string;
  careerOutcomes: string[];
  keyCourses: string[];
  semesters: Semester[];
  tuitionPerSemester: number;
  virtualLabs: string[];
  icon: string;
}

export interface FacultyMember {
  name: string;
  title: string;
  department: string;
  education: string;
  specialization: string;
  image: string;
  email: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  lead: string;
  lab: string;
  description: string;
}

export interface Testimonial {
  name: string;
  country: string;
  program: string;
  text: string;
  image: string;
  graduationYear: number;
}
