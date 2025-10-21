import express from 'express';
import * as familyController from '../controllers/familyController.js';
import { validateFamilyMember } from '../middleware/validate.js';

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
router.get('/', familyController.getAll);

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
router.get('/:id', familyController.getSingle);

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
router.post('/', validateFamilyMember, familyController.createFamilyMember);

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
router.put('/:id', validateFamilyMember, familyController.updateFamilyMember);

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
router.delete('/:id', familyController.deleteFamilyMember);

export default router;
