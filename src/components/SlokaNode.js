export default class SlokaNode {
  chapter = null;
  sloka = null;
  devanagari = null;
  translation = null;
  next = null;
  branch = null; // Vibhaga, Haribol

  constructor(chapter, sloka, devanagari, translation, next) {
    this.chapter = chapter;
    this.sloka = sloka;
    this.devanagari = devanagari;
    this.translation = translation;
    this.next = next;
  }
}
