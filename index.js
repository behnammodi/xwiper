class Xwiper {
    element = null;
    touchStartX = 0;
    touchStartY = 0;
    touchEndX = 0;
    touchEndY = 0;
    sensitive = 50;
    onSwipeLeftAgent = null;
    onSwipeRightAgent = null;
    onSwipeUpAgent = null;
    onSwipeDownAgent = null;
    onTapAgent = null;

    constructor(element) {
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

    onTouchStart = event => {
        this.touchStartX = event.changedTouches[0].screenX;
        this.touchStartY = event.changedTouches[0].screenY;
    }

    onTouchEnd = event => {
        this.touchEndX = event.changedTouches[0].screenX;
        this.touchEndY = event.changedTouches[0].screenY;
        handleGesture();
    }

    onSwipeLeft = func => this.onSwipeLeftAgent = func;
    onSwipeRight = func => this.onSwipeRightAgent = func;
    onSwipeUp = func => this.onSwipeUpAgent = func;
    onSwipeDown = func => this.onSwipeDownAgent = func;
    onTap = func => this.onTapAgent = func;

    destroy = () => {
        this.element.removeEventListener('touchstart', this.onTouchStart);
        this.element.removeEventListener('touchend', this.onTouchEnd);
    }

    handleGesture = () => {
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

export default Xwiper;