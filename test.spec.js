var main = require('./main');

describe('letterGrader()', function() {

  it('returns A', function() {
    expect(main.letterGrader(98)).toEqual("A");
  });
  it('returns B', function() {
    expect(main.letterGrader(88)).toEqual("B");
  });
  it('returns C', function() {
    expect(main.letterGrader(75)).toEqual("C");
  });
  it('returns D', function() {
    expect(main.letterGrader(62)).toEqual("D");
  });
  it('returns F', function() {
    expect(main.letterGrader(5)).toEqual("F");
  });
  it('returns F', function() {
    expect(main.letterGrader(-1)).toEqual("Must be a number 0-100");
  });

});

describe('main.averageScore()', function() {

  it('returns A', function() {
    expect(main.averageScore([23])).toEqual(23);
  });
  it('returns B', function() {
    expect(main.averageScore([23, 25])).toEqual(24);
  });
  it('returns C', function() {
    expect(main.averageScore([23, 25, 66])).toEqual(38);
  });
  it('returns D', function() {
    expect(main.averageScore([23, 25, 66, 100])).toEqual(53.5);
  });
  it('returns F', function() {
    expect(main.averageScore([23, 25, 66, 100, 44])).toEqual(51.6);
  });
  it('returns F', function() {
    expect(main.averageScore([23, 25, 66, 100, 34, 22])).toEqual(45);
  });

});

describe('main.medianScore()', function() {

  it('returns medianScore 23', function() {
    expect(main.medianScore([23])).toEqual(23);
  });
  it('returns medianScore 25', function() {
    expect(main.medianScore([23, 25])).toEqual(24);
  });
  it('returns medianScore 25', function() {
    expect(main.medianScore([23, 25, 66])).toEqual(25); 
  });
  it('returns medianScore 45.5', function() {
    expect(main.medianScore([23, 25, 66, 100])).toEqual(45.5);
  });
  it('returns medianScore 44', function() {
    expect(main.medianScore([23, 25, 66, 100, 44])).toEqual(44);
  });
  it('returns medianScore 24', function() {
    expect(main.medianScore([23, 25, 66, 100, 34, 22])).toEqual(29.5);
  });

});

describe('main.modeScore()', function() {

  it('returns modeScore ', function() {
    expect(main.modeScore([23])).toEqual(23);
  });
  it('returns modeScore ', function() {
    expect(main.modeScore([23, 25])).toEqual(23);
  });
  it('returns modeScore ', function() {
    expect(main.modeScore([23, 25, 66])).toEqual(23); 
  });
  it('returns modeScore ', function() {
    expect(main.modeScore([23, 25, 66, 100, 100, 100])).toEqual(100);
  });
  it('returns modeScore ', function() {
    expect(main.modeScore([23, 25, 66, 100, 44, 23, 44, 23, 44, 44])).toEqual(44);
  });
  it('returns modeScore ', function() {
    expect(main.modeScore([66, 66, 23, 25, 66, 100, 34, 22, 66, 25, 12, 23])).toEqual(66);
  });

});


// jasmine-node .