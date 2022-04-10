export interface Experience {
    id: number
    category: string
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    description: string
    highlights: highlight[]
}

export interface highlight {
    title: string
    description: string
}

export const experience: Experience[] = [
    {
        id: 1,
        category: 'it',
        title: 'Software Engineer',
        company: 'Groep DS',
        location: 'Menen, Belgium',
        startDate: '2019-01-01',
        endDate: '2020-01-01',
        description: 'I am a software engineer at Groep DS. I am responsible for the development of the web application. I am also responsible for the development of the mobile application. I am also responsible for the development of the desktop application.',
        highlights: [
            { title: 'frontend', description: 'I am responsible for the development of the web application.' },
            { title: 'backend', description: 'I am responsible for the development of the mobile application.' },
            { title: 'desktop', description: 'I am responsible for the development of the desktop application.' }
        ]
    },
    {
        id: 2,
        category: 'it',
        title: 'Software Engineer',
        company: 'Groep DS',
        location: 'Menen, Belgium',
        startDate: '2019-01-01',
        endDate: '2020-01-01',
        description: 'I am a software engineer at Groep DS. I am responsible for the development of the web application. I am also responsible for the development of the mobile application. I am also responsible for the development of the desktop application.',
        highlights: [
            { title: 'frontend', description: 'I am responsible for the development of the web application.' },
            { title: 'backend', description: 'I am responsible for the development of the mobile application.' },
            { title: 'desktop', description: 'I am responsible for the development of the desktop application.' }
        ]
    },
    {
        id: 3,
        category: 'sales',
        title: 'Sales Manager',
        company: 'Groep DS',
        location: 'Menen, Belgium',
        startDate: '2019-01-01',
        endDate: '2020-01-01',
        description: 'I am a sales manager at Groep DS. I am responsible for the development of the web application. I am also responsible for the development of the mobile application. I am also responsible for the development of the desktop application.',
        highlights: [
            { title: 'frontend', description: 'I am responsible for the development of the web application.' },
            { title: 'backend', description: 'I am responsible for the development of the mobile application.' },
            { title: 'desktop', description: 'I am responsible for the development of the desktop application.' }
        ]
    }
]
