export default class VibhagaNode {
    caption = null;
    description = null;
    firstSloka = null;

    get chapter() {
        return 'vibhaga:' + this.firstSloka.chapter;
    }

    get sloka() {
        return this.firstSloka.sloka;
    }

    constructor(caption, description, firstSloka) {
        this.caption = caption;
        this.description = description;
        this.firstSloka = firstSloka;
    }
}