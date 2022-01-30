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
    this.tags = tags;
  }
}
