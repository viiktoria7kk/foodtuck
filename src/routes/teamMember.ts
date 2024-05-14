import { Router } from 'express'
import { TeamMemberController } from '../controllers/teamMember'

export const teamMembersRouter = Router()
const teamMemberController = new TeamMemberController()

/**
 * @openapi
 * tags:
 *   name: TeamMembers
 *   description: Operations related to Team Members
 */

/**
 * @openapi
 * /team-members:
 *   post:
 *     tags:
 *       - TeamMembers
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
teamMembersRouter.post('/', teamMemberController.createTeamMember)

/**
 * @openapi
 * /team-members:
 *   get:
 *     tags:
 *       - TeamMembers
 *     summary: Get all team members
 *     responses:
 *       '200':
 *         description: A list of team members
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
teamMembersRouter.get('/', teamMemberController.getTeamMember)

/**
 * @openapi
 * /team-members/{id}:
 *   get:
 *     tags:
 *       - TeamMembers
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
teamMembersRouter.get('/:id', teamMemberController.getTeamMemberById)

/**
 * @openapi
 * /team-members/{id}:
 *   delete:
 *     tags:
 *       - TeamMembers
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
teamMembersRouter.delete('/:id', teamMemberController.deleteTeamMember)

/**
 * @openapi
 * /team-members/name/{name}:
 *   get:
 *     tags:
 *       - TeamMembers
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
teamMembersRouter.get('/name/:name', teamMemberController.getTeamMemberByName)
