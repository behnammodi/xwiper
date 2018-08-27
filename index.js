class Xwiper {
    constructor(element) {
        this.element = null;
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchEndX = 0;
        this.touchEndY = 0;
        this.sensitive = 50;
        this.onSwipeLeftAgent = null;
        this.onSwipeRightAgent = null;
        this.onSwipeUpAgent = null;
        this.onSwipeDownAgent = null;
        this.onTapAgent = null;

        this.element = document.querySelector(element);
        this.element
            .addEventListener(
                'touchstart',
                this.onTouchStart,
                false
            );

        this.element
            .addEventListener('touchend', this.onTouchEnd, false);
    }

    onTouchStart(event) {
        this.touchStartX = event.changedTouches[0].screenX;
        this.touchStartY = event.changedTouches[0].screenY;
    }

    onTouchEnd(event) {
        this.touchEndX = event.changedTouches[0].screenX;
        this.touchEndY = event.changedTouches[0].screenY;
        this.handleGesture();
    }

    onSwipeLeft(func) {
        this.onSwipeLeftAgent = func;
    }
    onSwipeRight(func) {
        this.onSwipeRightAgent = func;
    }
    onSwipeUp(func) {
        this.onSwipeUpAgent = func;
    }
    onSwipeDown(func) {
        this.onSwipeDownAgent = func;
    }
    onTap(func) {
        this.onTapAgent = func;
    }

    destroy() {
        this.element.removeEventListener('touchstart', this.onTouchStart);
        this.element.removeEventListener('touchend', this.onTouchEnd);
    }

    handleGesture() {
        /**
         * swiped left
         */
        if (this.touchEndX + this.sensitive <= this.touchStartX) {
            this.onSwipeLeftAgent &&
                this.onSwipeLeftAgent();
            return 'swiped left';
        }

        /**
         * swiped right
         */
        if (this.touchEndX - this.sensitive >= this.touchStartX) {
            this.onSwipeRightAgent &&
                this.onSwipeRightAgent();
            return 'swiped right';
        }

        /**
         * swiped up
         */
        if (this.touchEndY + this.sensitive <= this.touchStartY) {
            this.onSwipeUpAgent &&
                this.onSwipeUpAgent();
            return 'swiped up';
        }

        /**
         * swiped down
         */
        if (this.touchEndY - this.sensitive >= this.touchStartY) {
            this.onSwipeDownAgent &&
                this.onSwipeDownAgent();
            return 'swiped down';
        }

        /**
         * tap
         */
        if (this.touchEndY === this.touchStartY) {
            this.onTapAgent &&
                this.onTapAgent();
            return 'tap';
        }
    }
}

module.exports = Xwiper;