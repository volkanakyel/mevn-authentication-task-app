const express = require('express');
const router = express.Router();
const Tasks = require('../models/Tasks');

router.get('/', async (req, res) => {
  try {
    const tasks = await Tasks.find();
    res.json(tasks);
  } catch(err) {
    console.log(err);
  }
})

router.post('/', async (req, res) => {
  const task = new Tasks({
    title: req.body.title,
    completed: req.body.completed,
  });
  try {
    const savedTask = await task.save()
    res.json(savedTask);
  } catch (err) {
    res.json({message: err});
  }
})

router.put(':taskId', (req, res) => {
  Tasks.findById(req.params.id, 'title completed', (error, task) => {
    if (error) { console.log(error);}
    task.title = req.body.title;
    task.completed = req.body.completed;
    task.save((error) => {
      if(error) {console.log(error);}
      res.send({
        success: true
      })
    })
  })
})

router.get('/:taskId', async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.taskId);
    res.json(task);
  } catch (err) {
    res.json(err);
  }
})

router.delete('/:taskId', async (req, res) => {
  try {
    const removeTask = await Tasks.remove({ _id: req.params.taskId});
    res.json(removeTask);
  } catch(err) {
    console.log(err);
  }
})

module.exports = router;