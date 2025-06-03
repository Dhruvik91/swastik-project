export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon: 'Heart' | 'Lightbulb' | 'Shield' | 'Users' | 'Target' | 'Award';
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  address: string;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface AboutHero {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats: {
    value: string;
    label: string;
  }[];
} 