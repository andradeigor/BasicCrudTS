import faker from "faker/locale/pt_BR";

export default {
  async FakeUser() {
    return {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(8),
    };
  },
};
