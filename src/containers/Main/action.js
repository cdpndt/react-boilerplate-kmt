import { httpRequest, findApiConfigByName } from '../../utils/request';
export const testAction = (cb) => {
    return (dispatch) => {
      const topupApiConfig = findApiConfigByName("test");
      httpRequest("https://reqres.in/api/users?page=2", {method: 'GET'}, { data: {} })
        .then((data) => {
        //   dispatch({ type: TopupAction.MakeTopup.Success, data: data });
        //   if (callback) {
        //     callback();
        //   }
        console.log("Success Response data", data)
        //   dispatch({ type: UiActions.Loader.Hide });
        })
        .catch(error => {
        console.log("Error Response data", error)

        //   dispatch({ type: TopupAction.MakeTopup.Failure, error: error });
          // dispatch({ type: UiActions.ApiError.Show });
        })
    }
  }; 