const router = require('express').Router();
/**
 * @swagger
 * /api/users:
 *  get:
 *    tags:
 *    - User
 *    summary: get all users
 *    description: Get all users
 *    responses:
 *      200:
 *        description: successful.
 *  post:
 *    tags:
 *    - User
 *    summary: create new user
 *    description: Create new user
 *    parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      schema:
 *        $ref: "#/definitions/User"
 *    responses:
 *      200:
 *        description: successful.
 */
module.exports = (function () {
  const Items = [];

  router.get('/', (req, res) => {
    res.send(Items);
  });

  router.post('/', (req, res) => {
    const item = {
      id: Math.random(),
      name: req.body.name,
      old: req.body.old
    };
    Items.push(item);
    res.send(item);
  });

  return router;

}());