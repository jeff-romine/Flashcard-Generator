var assert = require('assert');
var BasicCard=require('../BasicCard.js');
var ClozeCard=require('../ClozeCard.js');

describe ('BasicCard', function() {
  const front = "Who was the first president of the United States?";
  const back = "George Washington";

  describe('new BasicCard()',function() {
    it('Should set the front and back properties when called with new', function() {
      var firstPresident = new BasicCard(front,back);
      assert.equal(front,firstPresident.front);
      assert.equal(back,firstPresident.back);
    });
  });

  describe('BasicCard()',function() {
    it('Should set the front and back properties when called without new', function() {
      var firstPresident = BasicCard(front,back);

      assert.equal(front,firstPresident.front);
      assert.equal(back,firstPresident.back);
    });
  });
});

describe ('ClozeCard', function() {
  const text =   "George Washington was the first president of the United States.";
  const cloze = "George Washington";
  const partial = "... was the first president of the United States.";

  describe('new ClozeCard()',function() {
    it('Should set the cloze, partial, and fullText properties when called with new', function() {

      var firstPresidentCloze = new ClozeCard(text,cloze);

      assert.equal(cloze,firstPresidentCloze.cloze);
      assert.equal(text, firstPresidentCloze.fullText);

      assert.equal(partial, firstPresidentCloze.partial);
    });
  });;
  describe('ClozeCard()',function() {
    it('Should set the cloze, partial, and fullText properties when called without new', function() {
      var firstPresidentCloze = ClozeCard(text,cloze);

      assert.equal(cloze,firstPresidentCloze.cloze);
      assert.equal(text, firstPresidentCloze.fullText);

      assert.equal(partial, firstPresidentCloze.partial);
    });
  });;
});
