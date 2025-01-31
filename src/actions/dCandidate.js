import api from "./api";

/*export const create=data=>{
    return{
        type:'create',
        payload:data
    }
}*/
//dispatch(create({fullname: ''}))

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

/*export const fectchAll=()=>
{
    return dispatch=>
    {

    }
}
    */

//OR
export const fetchAll = () => (dispatch) => {
  api
    .dCandidate()
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};
