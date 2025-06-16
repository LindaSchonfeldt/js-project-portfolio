import { create } from 'zustand'

const CaseStudyData = [
  {
    id: 1,
    title: 'Guiding the Product Vision and Roadmap for a Webinar Platform',
    subtitle: 'UX Design Internship at Interactive Platform Startup',
    image: '',
    video: '/assets/workshops.mp4',
    alt: '',
    description:
      'I joined a startup focused on building an interactive webinar platform, as a UX Design Intern. In a fast-moving, cross-functional team, I helped shape the product vision and roadmap while ensuring that design decisions aligned with both user needs and business goals.',
    tags: ['Workshops', 'UX Design', 'Product Design'],
    publishedDate: '2024',

    // Links
    figma: '', // Add Figma link if you have one
    github: '', // Add GitHub link if applicable

    // Detailed case study content
    fullContent: {
      overview:
        'This case study explores my role as a UX Design Intern at a startup developing an interactive webinar platform...',

      challenge:
        'The startup needed to define a clear product vision and roadmap while balancing user needs with business constraints...',

      myRole:
        'UX Design Intern working closely with product managers, developers, and stakeholders to shape the product direction.',

      duration: '3 months',
      team: [
        'Product Manager',
        'Lead Developer',
        'UX Designer (me)',
        '2 Frontend Developers'
      ],

      sections: [
        {
          title: 'Research & Discovery',
          content:
            'We started by conducting user interviews with potential webinar hosts and attendees...',
          images: ['/assets/case-study-1/research.png'] // Add images if you have them
        },
        {
          title: 'Problem Definition',
          content:
            'Through our research, we identified key pain points in existing webinar platforms...'
        },
        {
          title: 'Design Process',
          content:
            'I led the design thinking workshops and created user journey maps...'
        },
        {
          title: 'Solution & Prototyping',
          content:
            'We developed a solution that focused on interactive features and seamless user experience...'
        },
        {
          title: 'Testing & Iteration',
          content: 'We conducted usability testing sessions with 15 users...'
        },
        {
          title: 'Results & Impact',
          content:
            'The new product vision led to a 40% increase in user engagement...'
        }
      ],

      outcomes: [
        'Defined clear product roadmap for 6-month development cycle',
        'Improved user engagement by 40%',
        'Reduced user onboarding time by 60%',
        'Successfully launched MVP with 500+ early adopters'
      ],

      learnings: [
        'The importance of cross-functional collaboration in fast-paced startup environments',
        'How to balance user needs with technical constraints and business goals',
        'Effective methods for rapid prototyping and user testing'
      ]
    }
  }
  // Add more case studies here
]

export const useCaseStudyStore = create((set, get) => ({
  caseStudies: CaseStudyData,

  getCaseStudyById: (id) => {
    console.log('getCaseStudyById called with:', id, 'type:', typeof id)
    return get().caseStudies.find((caseStudy) => caseStudy.id === Number(id))
  },

  getAllCaseStudies: () => {
    return get().caseStudies
  },

  getPublishedCaseStudies: () => {
    return get().caseStudies.filter((caseStudy) => caseStudy.publishedDate)
  }
}))
