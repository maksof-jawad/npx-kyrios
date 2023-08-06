
// import PermissionsModel from './Permissions';
import { createModel } from 'schemix';
import cuidmixin from '../mixins/cuid.mixin';
import { datetimeParanoid } from '../mixins/datetime.mixin';
import UserModel from './User';



export default createModel((Role) => {
  Role
    .mixin(cuidmixin)
    .string("name")
    .string("description", { optional: true })
    .relation("user", UserModel, { name: 'userToRole', list: true })
    .mixin(datetimeParanoid)
    .map({ name: "roles" });
  });
  // .relation("permission", PermissionsModel, { name: 'roleToPermit', list: true })