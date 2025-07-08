export default class SlokaNode {
  chapter = null;
  sloka = null;
  devanagari = null;
  translation = null;
  speaker = null;
  next = null;

  constructor(chapter, sloka, devanagari, translation, speaker, next) {
    this.chapter = chapter;
    this.sloka = sloka;
    this.devanagari = devanagari;
    this.translation = translation;
    this.speaker = speaker;
    this.next = next;
  }
}
