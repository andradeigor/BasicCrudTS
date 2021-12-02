import FakerData from "./utils/fakerdata";
import UserService from "../database/service/user";
import axios from "axios";
interface UserInterface {
  email: string;
  name: string;
  password: string;
}

test.only("Should Create an User", async (): Promise<void> => {
  const data: UserInterface = await FakerData.FakeUser();

  const user = await axios.post("http://localhost:8000/user/", data);
  const userdata = await axios.get(
    `http://localhost:8000/user/${user.data.user._id}`
  );
  expect(user.data.user).toEqual(userdata.data.user);

  await UserService.DeleteUser(user.data);
});

test("Should Get an User", async (): Promise<void> => {
  const data: UserInterface = await FakerData.FakeUser();

  UserService.createUser(data);
});
