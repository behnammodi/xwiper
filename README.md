# Xwiper

[![NPM](https://nodei.co/npm/xwiper.png)](https://nodei.co/npm/xwiper/)

[![install size](https://packagephobia.now.sh/badge?p=xwiper)](https://packagephobia.now.sh/result?p=keal) [![dependencies](https://david-dm.org/uxitten/xwiper.svg)](https://david-dm.org/uxitten/xwiper.svg)

swipe handler

# Install

```npm
npm install xwiper --save
```

# How to use

```javascript
import Xwiper from 'xwiper';

const xwiper = new Xwiper('.slider');

xwiper.onSwipeLeft(()=> console.log('swipe left'));

xwiper.onSwipeRight(()=> console.log('swipe right'));

xwiper.onSwipeUp(()=> console.log('swipe up'));

xwiper.onSwipeDown(()=> console.log('swipe down'));

xwiper.onTap(()=> console.log('tap'));

// remove listener
xwiper.destroy(); 

```

