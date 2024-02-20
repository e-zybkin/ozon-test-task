class Progress {
  constructor(selector) {
    this._selector = selector;
  }

  _getTemplate() {
    const progressElement = document
      .querySelector(this._selector)
      .content.querySelector(".progress__bar")
      .cloneNode(true);

    return progressElement;
  }

  render() {
    this._element = this._getTemplate();
    this._circle = this._element.querySelector(".progress__circle");
    return this._element;
  }

  setValue(percent) {
    if (this._isAnimated) {
      return;
    }
    this._radius = this._circle.r.baseVal.value;
    this._circumference = 2 * Math.PI * this._radius;

    this._circle.style.strokeDasharray = `${this._circumference} ${this._circumference}`;
    this._circle.style.strokeDashoffset = this._circumference;

    const offset = this._circumference - (percent / 100) * this._circumference;
    this._circle.style.strokeDashoffset = offset;
  }

  setAnimated(isAnimated) {
    this._svg = this._element.querySelector(".progress__svg");
    this._isAnimated = isAnimated;
    if (isAnimated) {
      this._circle.classList.add("progress__circle_animated");
      this._svg.classList.add("progress__svg_animate");
    } else {
      this._circle.classList.remove("progress__circle_animated");
      this._svg.classList.remove("progress__svg_animate");
    }
  }

  setHidden(isHidden) {
    this._circle.style.display = isHidden ? "none" : "block";
  }
}

export default Progress;
