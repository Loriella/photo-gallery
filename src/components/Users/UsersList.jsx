import React, {useEffect} from "react";
import User from "./User";
import Loader from "../Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../redux/actions";

const UsersList = () => {

  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!users.length) {
      dispatch(fetchUsers())
    }
  }, [dispatch, users.length]);

  const loading = useSelector(state => state.usersLoading);

  return (
    <div className="row">
      {
        loading
          ? <Loader/>
          : users.map(user => {
            return (
              <div key={user.id} className="col-3 mt-4">
                <User user={user}/>
              </div>
            )
          })
      }
    </div>
  )
}

export default UsersList;
