import _ from 'lodash';

interface Profile {
  name: string;
  age: number;
  teammates: Profile[];
}

describe('프로필을 만들고', () => {
  let hodol: Profile;
  beforeEach(() => {
    hodol = {
      name: 'woonjang',
      age: 28,
      teammates: [
        {
          name: 'kyle',
          age: 28,
          teammates: [],
        },
      ],
    };
  });
});
