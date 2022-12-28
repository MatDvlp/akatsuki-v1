import { Model, BaseModel, Uuid, beforeCreate } from '@discord-factory/storage-next'

@Model('money')
export default class Money extends BaseModel<any> {
  public user_id: string
  
  public server_id: string
  
  public amount: number

  @beforeCreate()
  public async beforeCreate (): Promise<void> {
    this.amount = 0
  }
}
