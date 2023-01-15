
export class Book {
    constructor(public title: string, public authors: string[], public coverImage: string) {
        this.previewMode = true;
    }
    previewMode: boolean;
    getAuthorsList() : string {
        return this.authors.join(", ");
    }
}