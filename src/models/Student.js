export class Student {
    constructor({
                    id,
                    name,
                    city,
                    country,
                    phoneNumber,
                    email,
                    tags,
                    pdfPath,
                    pathImage,
                    presence,
                    move,
                }) {
        this.id = id || null;
        this.name = name || "";
        this.city = city || "";
        this.country = country || "";
        this.phoneNumber = phoneNumber || "";
        this.email = email || "";

        // TODO: Revisar nombre parámetro pdfPath en API
        this.pdfPath = pdfPath || "";

        this.pathImage = pathImage || "";
        this.presence = presence || "Presencial";
        this.move = move || false;

        if (tags && typeof tags !== "string") {
            throw new Error(
                "tags property must be a string with values separated by commas"
            );
        }

        this.tags = (tags || []) && tags.split(",");
    }
}
