import { Schema, model } from 'mongoose'

export interface ITeamMember {
  name: string
  avatar: string
  status: string
}

/**
 * @openapi
 * components:
 *   schemas:
 *     TeamMember:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the team member
 *           example: 'John Smith'
 *         avatar:
 *           type: string
 *           description: The URL of the team member's avatar
 *           example: 'https://example.com/avatar.jpg'
 *         status:
 *           type: string
 *           description: The status of the team member
 *           example: 'Chef'
 */

export const TeamMemberSchema = new Schema<ITeamMember>({
  name: { type: String, required: true },
  avatar: { type: String, required: false },
  status: { type: String, required: false },
})

export const TeamMember = model<ITeamMember>('TeamMember', TeamMemberSchema)
