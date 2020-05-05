import Task from '../models/Task';

export default {
  async index(req, res) {
    const tasks = [];
    return res.status(200).json(tasks);
  },

  async add(req, res) {
    return Task
      .create(req.body)
      .then((task) => res.status(201).send(task));
  }
}