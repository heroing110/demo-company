/**
 * Created by Administrator on 2016/12/20 0020.
 */

export function responseHandler(response) {
  const json = response.json();
  return json.data || json;
}
