export class Project {
    title: string;
    description: string;
    logoPath: string;
    githubLink: string;
    googlePlayLink?: string;
    screenshots: Array<string>;

    constructor(title: string, description: string, logoPath: string, githubLink: string, googlePlayLink: string, screenshots: Array<string>) {
        this.title = title;
        this.description = description;
        this.logoPath = logoPath;
        this.githubLink = githubLink;
        this.googlePlayLink = googlePlayLink;
        this.screenshots = screenshots;
    }
}
