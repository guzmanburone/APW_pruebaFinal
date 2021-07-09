// Data use for tests

export const valid_email = 'guzmanburone@mail.com';
export const valid_password = '12345';
export const invalid_email = 'guzman';
export const invalid_password = '123';

var faker = require('faker');

export const first_name_class = faker.name.firstName();
export const last_name_class = faker.name.lastName();
export const created_email_class = faker.internet.email();
export const first_name_class_2 = faker.name.firstName();
export const last_name_class_2 = faker.name.lastName();    