export class Student {
  name = "";
  city = "";
  country = "";
  phoneNumber = "";
  email = "";
  tags = [];

  constructor(name, city, country, phoneNumber, email, tags) {
    this.name = name;
    this.city = city;
    this.country = country;
    this.phoneNumber = phoneNumber;
    this.email = email;

    if (tags && typeof tags !== "string") {
      throw new Error(
        "tags property must be a string with values separated by commas"
      );
    }

    this.tags = tags.split(",");
  }
}
