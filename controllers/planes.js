const Plane = require('../models/plane');

const getPlanes = async (req, res) => {
  try {
    const planes = await Plane.findAll();

    res.status(200).json(planes);
  } catch (error) {
    res.status(500).json({
      messsage: 'Не удалось получить список самолетов, повторите попытку',
    });
  }
};

const getPlane = async (req, res) => {
  try {
    let id = req.params.id;
    const plane = await Plane.findOne({ where: { id: id } });

    res.status(200).json(plane);
  } catch (error) {
    res.status(400).json({ message: 'Самолет не найден' });
  }
};

const createPlane = async (req, res) => {
  const errors = {};

  if (!req.body.name) {
    errors.name = { messsage: 'Укажите название' };
  }
  if (!req.body.price) {
    errors.price = { messsage: 'Укажите цену' };
  }
  if (!req.body.description) {
    errors.description = { messsage: 'Укажите описание' };
  }
  if (req.body.description && req.body.description.length > 700) {
    errors.description = { messsage: 'Слишком длинное описание' };
  }
  if (!req.body.opacity) {
    errors.opacity = { messsage: 'Укажите вместимость' };
  }
  if (!req.file) {
    errors.planeImage = { message: 'Пожалуйста, добавьте фото самолёта' };
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const { name, price, description, opacity } = req.body;

    const plane = await Plane.create({
      name,
      price,
      description,
      opacity,
      planeImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`,
    });

    res.status(201).json(plane);
  } catch (error) {
    res.status(500).json({
      messsage: 'Не удалось создать самолет',
    });
  }
};
module.exports = {
  getPlanes,
  createPlane,
  getPlane,
};
