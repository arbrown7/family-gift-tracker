const express = require('express');
const giftController = require('../controllers/giftController');
const { validateGift } = require('../helpers/validateGift');

const router = express.Router();

/**
 * @swagger
 * /api/gifts:
 *   get:
 *     summary: Get all gifts
 *     security:
 *       - googleAuth: []
 *     responses:
 *       200:
 *         description: List of gifts
 *       401:
 *         description: Unauthorized
 */
router.get('/', giftController.getAll);

/**
 * @swagger
 * /api/gifts/{id}:
 *   get:
 *     summary: Get a single gift
 *     security:
 *       - googleAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Gift found
 *       400:
 *         description: Invalid ID
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Gift not found
 */
router.get('/:id', giftController.getSingle);

/**
 * @swagger
 * /api/gifts:
 *   post:
 *     summary: Create a new gift
 *     security:
 *       - googleAuth: []
 *     responses:
 *       201:
 *         description: Gift created
 *       400:
 *         description: Validation failed / bad request
 *       401:
 *         description: Unauthorized
 */
router.post('/', validateGift, giftController.create);

/**
 * @swagger
 * /api/gifts/{id}:
 *   put:
 *     summary: Update a gift
 *     security:
 *       - googleAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       204:
 *         description: Gift updated successfully
 *       400:
 *         description: Validation failed / bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Gift not found
 */
router.put('/:id', validateGift, giftController.update);

/**
 * @swagger
 * /api/gifts/{id}:
 *   delete:
 *     summary: Delete a gift
 *     security:
 *       - googleAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Gift deleted successfully
 *       400:
 *         description: Invalid ID
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Gift not found
 */
router.delete('/:id', giftController.delete);

module.exports = router;
