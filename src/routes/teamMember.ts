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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TeamMember'
 *       '400':
 *         description: Bad request. Invalid data format.
 *       '500':
 *         description: Internal server error. Failed to create a new Team Member.
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
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TeamMember'
 *       '500':
 *         description: Internal server error. Failed to retrieve team members.
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TeamMember'
 *       '404':
 *         description: Team member not found. The specified team member ID does not exist.
 *       '500':
 *         description: Internal server error. Failed to retrieve the team member by ID.
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
 *         description: Team member not found. The specified team member ID does not exist.
 *       '500':
 *         description: Internal server error. Failed to delete the team member by ID.
 */
teamMembersRouter.delete('/:id', teamMemberController.deleteTeamMember)
