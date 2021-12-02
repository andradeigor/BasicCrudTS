import FakerData from "./utils/fakerdata";
import axios from "axios";
interface UserInterface {
  email: string;
  name: string;
  password: string;
}

test("Should Create,Read,Update and Delete an User", async (): Promise<void> => {
  const data: UserInterface = await FakerData.FakeUser();

  const user = await axios.post("http://localhost:8000/user/", data);
  const userdata = await axios.get(
    `http://localhost:8000/user/${user.data.user._id}`
  );
  expect(user.data).toEqual(userdata.data);
  const newdata: UserInterface = await FakerData.FakeUser();
  const newUser = await axios.put(
    `http://localhost:8000/user/${user.data.user._id}`,
    { email: newdata.email, name: newdata.name }
  );
  expect(newUser.data).not.toEqual(user.data);
  const newuserdata = await axios.get(
    `http://localhost:8000/user/${user.data.user._id}`
  );

  expect(newUser.data).toEqual(newuserdata.data.user);
  await axios.delete(`http://localhost:8000/user/${user.data.user._id}`);
});
