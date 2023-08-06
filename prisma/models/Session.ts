import UserModel from './User';
import { createModel } from 'schemix';
import cuidmixin from '../mixins/cuid.mixin';
import { datetimemixin } from '../mixins/datetime.mixin';



export default createModel((Session) => {
  Session
    .mixin(cuidmixin)
    .string("userId", { unique: true })
    .string("token", { raw: "@database.Text" })
    .dateTime("expiresIn")
    .relation("user", UserModel, { name: "sessionToUser", fields: ["userId"], references: ["id"], onDelete: 'Cascade' })
    .mixin(datetimemixin)
    .map({ name: "sessions" });
});