import { TeamMemberService } from '../services/teamMember'
import { validateTeamMember } from '../utils/validation/validation'
import { ITeamMember } from '../models/TeamMember'

export class TeamMemberController {
  constructor(private teamMemberService: TeamMemberService = new TeamMemberService()) {}

  public async createTeamMember(teamMember: ITeamMember): Promise<ITeamMember> {
    const { error } = validateTeamMember(teamMember)
    if (error) throw new Error(error.details[0].message)
    return await this.teamMemberService.createTeamMember(teamMember)
  }

  public async getTeamMember(): Promise<ITeamMember[]> {
    return await this.teamMemberService.getTeamMember()
  }

  public async getTeamMemberById(id: string): Promise<ITeamMember> {
    return await this.teamMemberService.getTeamMemberById(id)
  }

  public async deleteTeamMember(id: string): Promise<string> {
    return await this.teamMemberService.deleteTeamMember(id)
  }

  public async getTeamMemberByName(name: string): Promise<ITeamMember[]> {
    return await this.teamMemberService.getTeamMemberByName(name)
  }
}
