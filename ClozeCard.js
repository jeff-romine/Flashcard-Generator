function ClozeCard(text,cloze) {
  if (!(this instanceof ClozeCard)) {
    return new ClozeCard(text,cloze);
  }

  this.cloze = cloze;
  this.fullText = text;
  if (text.indexOf(cloze) === -1) {
    throw 'ERROR: cloze ("' + cloze + '") not found in text ("' + text + '")';
  }
  this.partial = text.replace(cloze,'...');
}

module.exports = ClozeCard;
