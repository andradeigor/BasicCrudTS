import FakerData from "./utils/fakerdata";
import axios from "axios";
interface UserInterface {
  name: string;
  email: string;
  password: string;
}

test("Should Create a User", async (): Promise<void> => {
  const data1: UserInterface = await FakerData.FakeUser();
  const data2: UserInterface = await FakerData.FakeUser();
  const data3: UserInterface = await FakerData.FakeUser();

  const user1 = await axios.post("http://localhost:8000/user/", data1);
  const user2 = await axios.post("http://localhost:8000/user/", data2);
  const user3 = await axios.post("http://localhost:8000/user/", data3);
  const user1data = {
    name: user1.data.user.name,
    email: user1.data.user.email,
  };
  const user2data = {
    name: user2.data.user.name,
    email: user2.data.user.email,
  };
  const user3data = {
    name: user3.data.user.name,
    email: user3.data.user.email,
  };
  expect(user1data.name).toEqual(data1.name);
  expect(user1data.email).toEqual(data1.email);
  expect(user2data.name).toEqual(data2.name);
  expect(user2data.email).toEqual(data2.email);
  expect(user3data.name).toEqual(data3.name);
  expect(user3data.email).toEqual(data3.email);
});
