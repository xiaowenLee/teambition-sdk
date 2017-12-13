import { SchemaDef, RDBType } from 'reactivedb/interface'
import { MemberId, OrganizationId, ProjectId, RoleId, TeamId, UserId } from 'teambition-types'
import { ProjectSchema } from './Project'
import { schemas } from '../SDK'

export interface MemberProfileSchema {
  birthday: string
  city: string
  country: string
  email: string
  entryTime: string
  name: string
  phone: string
  position: string
  province: string
  staffType: string
  teamIds: TeamId[]
}

export interface MemberSchema {
  _boundToObjectId: ProjectId | OrganizationId
  _id: String // 兼容新（MemberId）和旧（UserId），当完成迁移，换为更准确的 MemberId
  _memberId: MemberId
  _roleId: RoleId
  _userId: UserId
  avatarUrl: string
  boundToObjectType: 'project' | 'organization'
  email: string
  hasVisited: boolean
  isActive: boolean
  isDisabled: boolean
  invited: string
  joined: string
  latestActived: string
  location: string
  name: string
  nickname: string
  nicknamePinyin: string
  nicknamePy: string
  phone: string
  pinyin: string
  profile: MemberProfileSchema
  projectExperience: ProjectSchema[]
  projectExperienceIds: ProjectId[]
  pushStatus: boolean
  py: string
  teams: TeamId[]
  title: string
  visited: string | null
  website: string
}

export interface LegacyMemberSchema extends MemberSchema {
  _id: UserId
}

const Schema: SchemaDef<MemberSchema> = {
  _boundToObjectId: { type: RDBType.STRING },
  _id: { type: RDBType.STRING, primaryKey: true },
  _memberId: { type: RDBType.STRING },
  _roleId: { type: RDBType.STRING },
  _userId: { type: RDBType.STRING },
  avatarUrl: { type: RDBType.STRING },
  boundToObjectType: { type: RDBType.STRING },
  email: { type: RDBType.STRING },
  hasVisited: { type: RDBType.BOOLEAN },
  invited: { type: RDBType.DATE_TIME },
  isActive: { type: RDBType.BOOLEAN },
  isDisabled: { type: RDBType.BOOLEAN },
  joined: { type: RDBType.DATE_TIME },
  latestActived: { type: RDBType.DATE_TIME },
  location: { type: RDBType.STRING },
  name: { type: RDBType.STRING },
  nickname: { type: RDBType.STRING },
  nicknamePinyin: { type: RDBType.STRING },
  nicknamePy: { type: RDBType.STRING },
  phone: { type: RDBType.STRING },
  pinyin: { type: RDBType.STRING },
  profile: { type: RDBType.OBJECT },
  projectExperience: { type: RDBType.OBJECT }, // 需要被重新定义, 没有找到 manyToMany 的查询条件
  projectExperienceIds: { type: RDBType.OBJECT }, // 需要被重新定义, 没有找到 manyToMany 的查询条件
  pushStatus: { type: RDBType.STRING },
  py: { type: RDBType.STRING },
  teams: { type: RDBType.OBJECT }, // 需要被重新定义, 没有找到 manyToMany 的查询条件
  title: { type: RDBType.STRING },
  visited: { type: RDBType.DATE_TIME },
  website: { type: RDBType.STRING },
}

schemas.push({ schema: Schema, name: 'Member' })
