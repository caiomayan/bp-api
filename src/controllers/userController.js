import * as userService from "../services/userService.js";

export async function listUserID(req, res) {
  try {
    const { id } = req.params;
    const listedUser = await userService.getUserID(id);

    if (!listedUser) {
      return res.status(404).json({
        message: `O usuário de ID ${id} não existe`,
      });
    }

    return res.status(200).json(listedUser);
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      message: "Erro ao listar usuário desejado",
    });
  }
}

export async function listUserUsername(req, res) {
  try {
    const { username } = req.params;
    const listedUser = await userService.getUserUsername(username);

    if (!listedUser) {
      return res.status(404).json({
        message: `O usuário ${username} não existe`,
      });
    }

    return res.status(200).json(listedUser);
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      message: "Erro ao listar usuário desejado",
    });
  }
}

export async function listUsers(req, res) {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Erro ao buscar lista de usuários",
    });
  }
}

export async function createUser(req, res) {
  try {
    const newUser = await userService.addUser(req.body);
    res.status(201).json(newUser);
  } catch (e) {
    if (e.code === "23505") {
      return res.status(400).json({
        message: "Nome de usuário ou email já estão em uso",
      });
    }
    console.error(e);
    res.status(500).json({
      message: "Erro ao criar usuário",
    });
  }
}

export async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const updatedUser = await userService.updateUser(id, req.body);

    if (!updatedUser) {
      return res.status(404).json({
        message: "Usuário não encontrado ou nada para alterar",
      });
    }

    res.status(200).json(updatedUser);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Erro ao atualizar o usuário",
    });
  }
}

export async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const deletedUser = await userService.deleteUser(id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "O usuário a ser removido não existe",
      });
    }

    return res.status(200).json({
      message: `Usuário ${deletedUser.username} foi removido com sucesso`,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      message: "Erro ao remover usuário",
    });
  }
}
