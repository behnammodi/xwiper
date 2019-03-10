"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var defaults = {
  threshold: 50,
  passive: false
};

var Xwiper =
/*#__PURE__*/
function () {
  function Xwiper(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Xwiper);

    this.options = Object.assign({}, defaults, options);
    this.element = null;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchEndX = 0;
    this.touchEndY = 0;
    this.onSwipeLeftAgent = null;
    this.onSwipeRightAgent = null;
    this.onSwipeUpAgent = null;
    this.onSwipeDownAgent = null;
    this.onTapAgent = null;
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onSwipeLeft = this.onSwipeLeft.bind(this);
    this.onSwipeRight = this.onSwipeRight.bind(this);
    this.onSwipeUp = this.onSwipeUp.bind(this);
    this.onSwipeDown = this.onSwipeDown.bind(this);
    this.onTap = this.onTap.bind(this);
    this.destroy = this.destroy.bind(this);
    this.handleGesture = this.handleGesture.bind(this);
    var eventOptions = this.options.passive ? {
      passive: true
    } : false;
    this.element = document.querySelector(element);
    this.element.addEventListener('touchstart', this.onTouchStart, eventOptions);
    this.element.addEventListener('touchend', this.onTouchEnd, eventOptions);
  }

  _createClass(Xwiper, [{
    key: "onTouchStart",
    value: function onTouchStart(event) {
      this.touchStartX = event.changedTouches[0].screenX;
      this.touchStartY = event.changedTouches[0].screenY;
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(event) {
      this.touchEndX = event.changedTouches[0].screenX;
      this.touchEndY = event.changedTouches[0].screenY;
      this.handleGesture();
    }
  }, {
    key: "onSwipeLeft",
    value: function onSwipeLeft(func) {
      this.onSwipeLeftAgent = func;
    }
  }, {
    key: "onSwipeRight",
    value: function onSwipeRight(func) {
      this.onSwipeRightAgent = func;
    }
  }, {
    key: "onSwipeUp",
    value: function onSwipeUp(func) {
      this.onSwipeUpAgent = func;
    }
  }, {
    key: "onSwipeDown",
    value: function onSwipeDown(func) {
      this.onSwipeDownAgent = func;
    }
  }, {
    key: "onTap",
    value: function onTap(func) {
      this.onTapAgent = func;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.element.removeEventListener('touchstart', this.onTouchStart);
      this.element.removeEventListener('touchend', this.onTouchEnd);
    }
  }, {
    key: "handleGesture",
    value: function handleGesture() {
      /**
       * swiped left
       */
      if (this.touchEndX + this.options.threshold <= this.touchStartX) {
        this.onSwipeLeftAgent && this.onSwipeLeftAgent();
        return 'swiped left';
      }
      /**
       * swiped right
       */


      if (this.touchEndX - this.options.threshold >= this.touchStartX) {
        this.onSwipeRightAgent && this.onSwipeRightAgent();
        return 'swiped right';
      }
      /**
       * swiped up
       */


      if (this.touchEndY + this.options.threshold <= this.touchStartY) {
        this.onSwipeUpAgent && this.onSwipeUpAgent();
        return 'swiped up';
      }
      /**
       * swiped down
       */


      if (this.touchEndY - this.options.threshold >= this.touchStartY) {
        this.onSwipeDownAgent && this.onSwipeDownAgent();
        return 'swiped down';
      }
      /**
       * tap
       */


      if (this.touchEndY === this.touchStartY) {
        this.onTapAgent && this.onTapAgent();
        return 'tap';
      }
    }
  }]);

  return Xwiper;
}();

module.exports = Xwiper;
