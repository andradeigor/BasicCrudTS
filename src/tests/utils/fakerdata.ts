import faker from "faker/locale/pt_BR";
export default {
  async FakeUser() {
    return {
      email: faker.internet.email(),
      name: faker.name.findName(),
      password: faker.internet.password(8),
    };
  },
};
