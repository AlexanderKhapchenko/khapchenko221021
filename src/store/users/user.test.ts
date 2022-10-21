import data from '../../assets/data/initData.json';
import { reducer, setUsers } from './users';

describe('userReducer', () => {
  test('reducer should change state after setUsers', () => {
    expect(reducer({ list: data }, setUsers(data))).toEqual({
      list: data,
    });
  });
});
