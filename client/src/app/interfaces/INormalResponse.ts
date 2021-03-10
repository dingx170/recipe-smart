import { IUser } from "./IUser";

export interface NormalResponse{
  ret_code: number;
  ret_msg: string;
  userid: number;
  user_obj: IUser
}
