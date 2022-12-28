import { Migration, BaseMigration, Schema, Table } from '@discord-factory/storage-next'

@Migration()
export default class Money_1672260006012 extends BaseMigration {
  public tableName = 'moneys'

  public async up (schema: Schema): Promise<any> {
    return schema.createTable(this.tableName, (table: Table) => {
      table.string('user_id').notNullable()
      table.string('server_id').notNullable()
      table.integer('amount').notNullable()
      table.timestamps()
      }
    )
  }

  public async down (schema: Schema): Promise<any> {
    return schema.dropTableIfExists(this.tableName)
  }
}
