import { Router } from 'express'
import { TeamMemberController } from '../controllers/teamMember'

export const teamMemberRouter = Router()
const teamMemberController = new TeamMemberController()

/**
 * @openapi
 * tags:
 *   name: TeamMember
 *   description: Operations related to Team Member
 */

/**
 * @openapi
 * /team-member:
 *   post:
 *     tags:
 *       - TeamMember
 *     summary: Create a new Team Member
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TeamMember'
 *     responses:
 *       '201':
 *         description: Created
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
teamMemberRouter.post('/', teamMemberController.createTeamMember)

/**
 * @openapi
 * /team-member:
 *   get:
 *     tags:
 *       - TeamMember
 *     summary: Get all team members
 *     responses:
 *       '200':
 *         description: A list of team members
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
teamMemberRouter.get('/', teamMemberController.getTeamMember)

/**
 * @openapi
 * /team-member/{id}:
 *   get:
 *     tags:
 *       - TeamMember
 *     summary: Get a team member by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A team member object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Team member not found
 *       '500':
 *         description: Internal server error
 */
teamMemberRouter.get('/:id', teamMemberController.getTeamMemberById)

/**
 * @openapi
 * /team-member/{id}:
 *   delete:
 *     tags:
 *       - TeamMember
 *     summary: Delete a team member by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Team member deleted
 *       '404':
 *         description: Team member not found
 *       '500':
 *         description: Internal server error
 */
teamMemberRouter.delete('/:id', teamMemberController.deleteTeamMember)

/**
 * @openapi
 * /team-member/name/{name}:
 *   get:
 *     tags:
 *       - TeamMember
 *     summary: Get a team member by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A team member object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Team member not found
 *       '500':
 *         description: Internal server error
 */
teamMemberRouter.get('/name/:name', teamMemberController.getTeamMemberByName)
