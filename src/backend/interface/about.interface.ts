export interface TSortDescription {
   intro: string;
   about: string;
   skills: string;
   projects: string;
   services: string;
   blogs: string;
   testimonial: string;
   contact: string;
}

export type TAboutImages = {
   intro: string;
   about: string;
};

export interface TAboutSocialMedia {
   name: string;
   logo: string;
   url: string;
   order: number;
}

export interface TAbout {
   name: string;
   title: string[];
   email: string;
   phone: string;
   resume: string;
   sortDescriptions: TSortDescription;
   description: string;
   speech: string;
   images: TAboutImages;
   socialMedia: TAboutSocialMedia[];
}
