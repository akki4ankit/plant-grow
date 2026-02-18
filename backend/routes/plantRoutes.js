const express = require('express');
const Plant = require('../models/Plant');

const router = express.Router();

/**
 * GET all plants
 */
router.get('/', async (req, res) => {
  try {
    const plants = await Plant.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: plants.length,
      data: plants,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});

/**
 * POST add new plant
 */
router.post('/', async (req, res) => {
  try {
    const { name, type, price, image } = req.body;

    if (!name || !type || !price) {
      return res.status(400).json({
        success: false,
        message: 'Name, type and price are required',
      });
    }

    const plant = await Plant.create({
      name,
      type,
      price,
      image,
    });

    res.status(201).json({
      success: true,
      message: 'Plant added successfully',
      data: plant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});

module.exports = router;