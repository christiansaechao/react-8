import { dbUsersFetch } from "../services/users.services.js";

export const UsersController = () => ({
  getUser: (req, res) => {
    const token = req.authHeader;
    const users = dbUsersFetch();

    if (!users) {
      return res.status(404).send({ msg: "AHhhhh" });
    }

    return res.send(users);
  },
});
