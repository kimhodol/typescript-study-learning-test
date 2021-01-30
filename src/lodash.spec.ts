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

  describe('전개연산자로 복사하면', () => {
    let hodolClone: Profile;
    beforeEach(() => {
      hodolClone = { ...hodol };
    });

    it('name을 바꿔도 원본은 변하지 않는다.', () => {
      hodolClone.name = 'roonjang';
      expect(hodolClone.name).toBe('roonjang');
      expect(hodol.name).toBe('woonjang');
    });

    it('teammates의 name을 바꾸면 원본도 변한다.', () => {
      hodolClone.teammates[0].name = 'siyoung';
      expect(hodolClone.teammates[0].name).toBe('siyoung');
      expect(hodol.teammates[0].name).toBe('siyoung');
    });
  });

  describe('_.cloneDeep으로 복사하면', () => {
    let hodolDeepClone: Profile;
    beforeEach(() => {
      hodolDeepClone = _.cloneDeep(hodol);
    });
    it('name을 바꿔도 원본은 변하지 않는다.', () => {
      hodolDeepClone.name = 'poonjang';
      expect(hodolDeepClone.name).toBe('poonjang');
      expect(hodol.name).toBe('woonjang');
    });

    it('teammates의 name을 바꿔도 원본은 변하지 않는다.', () => {
      hodolDeepClone.teammates[0].name = 'siyoung';
      expect(hodolDeepClone.teammates[0].name).toBe('siyoung');
      expect(hodol.teammates[0].name).toBe('kyle');
    });
  });
});
