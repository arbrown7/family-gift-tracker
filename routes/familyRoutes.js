import express from 'express';
import { body, validationResult } from 'express-validator';
import FamilyMember from '../models/FamilyMember.js';

const router = express.Router();

/**
 * @swagger
 * /api/family:
 *   get:
 *     summary: Get all family members
 *     responses:
 *       200:
 *         description: List of family members
 */
// GET all family members
router.get('/', async (req, res) => {
  try {
    const members = await FamilyMember.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @swagger
 * /api/family:
 *   post:
 *     summary: Add a new family member
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FamilyMember'
 *     responses:
 *       201:
 *         description: Family member created
 */
// POST a new family member
router.post(
  '/',
  body('name').notEmpty(), // validate that name exists
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const member = new FamilyMember(req.body);
      const savedMember = await member.save();
      res.status(201).json(savedMember);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

/**
 * @swagger
 * /api/family/{id}:
 *   get:
 *     summary: Get a family member by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single family member
 */
// GET a single family member by ID
router.get('/:id', async (req, res) => {
  try {
    const familyMember = await FamilyMember.findById(req.params.id);
    if (!familyMember) {
      return res.status(404).json({ message: 'Family member not found' });
    }
    res.json(familyMember);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @swagger
 * /api/family/{id}:
 *   put:
 *     summary: Update a family member
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FamilyMember'
 *     responses:
 *       200:
 *         description: Family member updated
 */
// PUT: update a family member by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedMember = await FamilyMember.findByIdAndUpdate(
      req.params.id,
      req.body,       // new data from request body
      { new: true, runValidators: true } // return the updated document, run schema validation
    );

    if (!updatedMember) {
      return res.status(404).json({ message: 'Family member not found' });
    }

    res.json(updatedMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @swagger
 * /api/family/{id}:
 *   delete:
 *     summary: Delete a family member
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Family member deleted
 */
// DELETE: remove a family member by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedMember = await FamilyMember.findByIdAndDelete(req.params.id);

    if (!deletedMember) {
      return res.status(404).json({ message: 'Family member not found' });
    }

    res.json({ message: 'Family member deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


export default router;
