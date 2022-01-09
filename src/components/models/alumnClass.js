export class Student {
  name = "";
  city = "";
  country = "";
  phoneNumber = "";
  email = "";
  tags = [];

  constructor(name, city, country, phone, email, tags) {
    this.name = name;
    this.city = city;
    this.country = country;
    this.phone = phone;
    this.email = email;
    this.tags = tags;
  }
}
