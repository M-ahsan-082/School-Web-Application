export const MOCK_COURSES = [
  {
    id: '1',
    title: 'Advanced Mathematics',
    description: 'Calculus and Linear Algebra fundamentals for senior students.',
    teacher: 'Dr. Sarah Wilson',
    students: 45,
    thumbnail: 'https://images.unsplash.com/photo-1758685734312-5134968399a8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '2',
    title: 'Computer Science 101',
    description: 'Introduction to algorithms, data structures, and logic.',
    teacher: 'Prof. James Miller',
    students: 60,
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    title: 'English Literature',
    description: 'Deep dive into Shakespearean plays and modern classics.',
    teacher: 'Ms. Emily Blunt',
    students: 30,
    thumbnail: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '4',
    title: 'World History',
    description: 'Exploring the major events that shaped modern civilization.',
    teacher: 'Mr. David Atten',
    students: 55,
    thumbnail: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '5',
    title: 'Physics',
    description: 'Motion, energy, forces, and basic quantum concepts.',
    teacher: 'Dr. Robert Allen',
    students: 40,
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '6',
    title: 'Chemistry',
    description: 'Atoms, molecules, reactions, and laboratory safety.',
    teacher: 'Dr. Anna White',
    students: 36,
    thumbnail: 'https://images.unsplash.com/photo-1725404343886-a111bc5555c1?q=80&w=1088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '7',
    title: 'Web Development',
    description: 'HTML, CSS, JavaScript, React basics.',
    teacher: 'Mr. David Khan',
    students: 72,
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '8',
    title: 'Business Studies',
    description: 'Marketing, finance, and entrepreneurship fundamentals.',
    teacher: 'Prof. Michael Brown',
    students: 50,
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '9',
    title: 'Biology',
    description: 'Human anatomy and life sciences.',
    teacher: 'Dr. Olivia Green',
    students: 34,
    thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=400'
  }
];



export const MOCK_ASSIGNMENTS = [
  { id: '1', title: 'Calculus Problem Set 3', dueDate: '2024-05-20', course: 'Advanced Mathematics', status: 'pending' },
  { id: '2', title: 'Binary Search Tree Implementation', dueDate: '2024-05-22', course: 'Computer Science 101', status: 'submitted' },
  { id: '3', title: 'The Great Gatsby Analysis', dueDate: '2024-05-18', course: 'English Literature', status: 'graded' },
  { id: '4', title: 'Physics Lab Report', dueDate: '2024-05-25', course: 'Physics', status: 'pending' },
  { id: '5', title: 'Website Homepage Design', dueDate: '2024-05-28', course: 'Web Development', status: 'submitted' }
];


export const MOCK_EXAMS = [
  { subject: 'Advanced Mathematics', score: 88, total: 100, grade: 'A' },
  { subject: 'Computer Science 101', score: 92, total: 100, grade: 'A+' },
  { subject: 'World History', score: 75, total: 100, grade: 'B' },
  { subject: 'Physics', score: 81, total: 100, grade: 'A-' },
  { subject: 'Chemistry', score: 78, total: 100, grade: 'B+' }
];


export const MOCK_ATTENDANCE = [
  { date: '2024-05-15', status: 'present', subject: 'Advanced Mathematics' },
  { date: '2024-05-16', status: 'present', subject: 'Computer Science 101' },
  { date: '2024-05-17', status: 'absent', subject: 'World History' },
  { date: '2024-05-18', status: 'late', subject: 'English Literature' },
  { date: '2024-05-19', status: 'present', subject: 'Physics' }
];


export const MOCK_TEACHERS = [
  { name: 'Dr. Sarah Wilson', role: 'Head of Mathematics', image: 'https://i.pravatar.cc/150?u=sarah' },
  { name: 'Prof. James Miller', role: 'CS Department Lead', image: 'https://i.pravatar.cc/150?u=james' },
  { name: 'Ms. Emily Blunt', role: 'Literature Specialist', image: 'https://i.pravatar.cc/150?u=emily' },
  { name: 'Mr. David Atten', role: 'History Senior Lecturer', image: 'https://i.pravatar.cc/150?u=david' },
  { name: 'Dr. Anna White', role: 'Chemistry Professor', image: 'https://i.pravatar.cc/150?u=anna' },
  { name: 'Mr. David Khan', role: 'Web Development Instructor', image: 'https://i.pravatar.cc/150?u=khan' }
];

