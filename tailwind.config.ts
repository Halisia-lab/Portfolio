import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1840px',


      '4xl': '2000px',

      'landscape': {
        'raw': '(orientation: landscape)'
      },

    },

    extend: {

      animation: {
        'fadein': 'fade-in 1s ease-in-out 0.25s 1',
        fadeout: 'fade-out 1s ease-out 0.25s 1',
        fadeindown: 'fade-in-down 1s ease-in 0.25s 1',
        fadeintopleft: 'fade-in-top-left 1s ease-out 0.25s 1',
        fadeintopright: 'fade-in-top-right 1s ease-out 0.25s 1',
        fadeinbottomleft: 'fade-in-bottom-left 1s ease-out 0.25s 1',
        fadeinbottomright: 'fade-in-bottom-right 1s ease-out 0.25s 1',
        'fadeinleft': 'fade-in-left 0.4s ease-in-out 0s 1',
        fadeinbouncedown: 'fade-in-bouncedown 1s ease-in-out 0.25s 1',
        fadeinbounceup: 'fade-in-bounceup 1s ease-in-out 0.25s 1',
        fadeinbounceright: 'fade-in-bounce-right 1s ease-in-out 0.25s 1',
        fadeinbounceleft: 'fade-in-bounce-left 1s ease-in-out 0.25s 1',
        'fadeinright': 'fade-in-right 0.4s ease-in-out 0s 1',
        fadeinup: 'fade-in-up 1s ease-in-out 0.25s 1',
        fadeoutdown: 'fade-out-down 1s ease-in-out 0.25s 1',
        fadeouttopleft: 'fade-out-top-left 1s ease-in-out 0.25s 1',
        fadeouttopright: 'fade-out-top-right 1s ease-in-out 0.25s 1',
        fadeoutleft: 'fade-out-left 1s ease-in-out 0.25s 1',
        fadeoutright: 'fade-out-right 1s ease-in-out 0.25s 1',
        fadeoutup: 'fade-out-up 1s ease-in-out 0.25s 1',
        'slideindown': 'slide-in-down 1s ease-in-out 0.25s 1',
        slideinleft: 'slide-in-left 1s ease-in-out 0.25s 1',
        slideinright: 'slide-in-right 1s ease-in-out 0.25s 1',
        slideinup: 'slide-in-up 1s ease-in-out 0.25s 1',
        slideoutdown: 'slide-out-down 1s ease-in-out 0.25s 1',
        slideoutleft: 'slide-out-left 1s ease-in-out 0.25s 1',
        slideoutright: 'slide-out-right 1s ease-in-out 0.25s 1',
        slideoutup: 'slide-out-up 1s ease-in-out 0.25s 1',
        slidedown: 'slide-down 0.3s ease-out',
        slideleft: 'slide-left 1s ease-in-out 0.25s 1',
        slideright: 'slide-right 1s ease-in-out 0.25s 1',
        slideup: 'slide-up 1s ease-in-out 0.25s 1',
        'zoomin': 'zoom-in 0.2s ease-in forwards',
        zoomout: 'zoom-out 1s ease-in-out 0.25s 1',
        tada: 'tada 1s ease-in-out 0.25s 1',
        spinnergrow: 'spinner-grow 1s ease-in-out 0.25s 1',
        placeholderwave: 'placeholder-wave 1s ease-in-out 0.25s 1',
        showupclock: 'show-up-clock 1s ease-in-out 0.25s 1',
        dropin: 'drop-in 0.5s ease-in-out 0.25s 1',
        dropout: 'drop-out 0.5s ease-in-out 0.25s 1',
        flyin: 'fly-in 0.6s ease-in-out 0.25s 1',
        flyinup: 'fly-in-up 0.6s ease-in-out 0.25s 1',
        flyindown: 'fly-in-down 0.6s ease-in-out 0.25s 1',
        flyinleft: 'fly-in-left 0.6s ease-in-out 0.25s 1',
        flyinright: 'fly-in-right 0.6s ease-in-out 0.25s 1',
        flyout: 'fly-out 0.6s ease-in-out 0.25s 1',
        flyoutup: 'fly-out-up 0.6s ease-in-out 0.25s 1',
        flyoutdown: 'fly-out-down 0.6s ease-in-out 0.25s 1',
        flyoutleft: 'fly-out-left 0.6s ease-in-out 0.25s 1',
        flyoutright: 'fly-out-right 0.6s ease-in-out 0.25s 1',
        browsein: 'browse-in 0.4s ease-in-out 0.25s 1',
        browseout: 'browse-out 0.4s ease-in-out 0.25s 1',
        browseoutleft: 'browse-out-left 0.4s ease-in-out 0.25s 1',
        browseoutright: 'browse-out-right 0.4s ease-in-out 0.25s 1',
        jiggle: 'jiggle 0.6s ease-in-out 0.25s 1',
        flash: 'flash 0.6s ease-in-out 0.25s 1',
        shake: 'shake 0.6s ease-in-out 0.25s 1',
        glow: 'glow 0.6s ease-in-out 0.25s 1',
        zoomOut: 'zoom-out 1s ease-out 0.25s 1',
        zoomOutLeft: 'zoom-out-left 1s ease-out 0.25s 1',
        zoomOutRight: 'zoom-out-right 1s ease-out 0.25s 1',
        zoomOutUp: 'zoom-out-up 1s ease-out 0.25s 1',
        zoomOutDown: 'zoom-out-down 1s ease-out 0.25s 1',
        zoomInUp: 'zoom-in-up 1s ease-out 0.25s 1',
        zoomInBotoomRight: 'zoom-in-bottom-right 1s ease-out 0.25s 1',
        zoomInBotoomLeft: 'zoom-in-bottom-left 1s ease-out 0.25s 1',
        zoomInTopRight: 'zoom-in-top-right 1s ease-out 0.25s 1',
        zoomInTopLeft: 'zoom-in-top-left 1s ease-out 0.25s 1',
        zoomInDown: 'zoom-in-down 1s ease-out 0.25s 1',
        zoomInRight: 'zoom-in-right 1s ease-out 0.25s 1',
        zoomInLeft: 'zoom-in-left 1s ease-out 0.25s 1',
        flipx: 'flipx 2s 0.25s 1',
        flipxRight: 'flipx-right 1s ease 0.25s 1',
        flipxLeft: 'flipx-left 1s ease 0.25s 1',
        flipxTopLeft: 'flipx-top-left 1s ease 0.25s 1',
        flipxTopRight: 'flipx-top-right 1s ease 0.25s 1',
        flipxBottomLeft: 'flipx-bottom-left 1s ease 0.25s 1',
        flipxBottomRight: 'flipx-bottom-right 1s ease 0.25s 1',
        flipxUp: 'flipx-up 1s ease 0.25s 1',
        flipxDown: 'flipx-down 1s ease 0.25s 1',
        flipRight: 'flip-right 1s ease 0.25s 1',
        flipLeft: 'flip-left 1s ease 0.25s 1',
        flipTopLeft: 'flip-top-left 1s ease 0.25s 1',
        flipTopRight: 'flip-top-right 1s ease 0.25s 1',
        flipBottomLeft: 'flip-bottom-left 1s ease 0.25s 1',
        flipBottomRight: 'flip-bottom-right 1s ease 0.25s 1',
        flipUp: 'flip-up 1s ease 0.25s 1',
        flipDown: 'flip-down 1s ease 0.25s 1',
        flip: 'flip 2s 0.25s 1',
        wiggle: 'wiggle 0.8s ease 0.25s 2',
      },
      keyframes: {
        'fade-in-left': {
          '0%': { opacity: '1', transform: 'translateX(0%)' },
          '100%': { opacity: '0', transform: 'translateX(100%)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-down ': {
          '0%': { opacity: '0', transform: 'translateY(-100px)', },
          '10%': { opacity: '0.1', transform: 'translateY(-90px)', },
          '20%': { opacity: '0.2', transform: 'translateY(-80px)', },
          '30%': { opacity: '0.3', transform: 'translateY(-70px)', },
          '40%': { opacity: '1', transform: 'translateY(-60px)', },
          '50%': { opacity: '1', transform: 'translateY(-50px)', },
          '60%': { opacity: '1', transform: 'translateY(-40px)', },
          '70%': { opacity: '1', transform: 'translateY(-30px)', },
          '80%': { opacity: '1', transform: 'translateY(-20px)', },
          '90%': { opacity: '1', transform: 'translateY(-10px)', },
          '100%': { opacity: '1', transform: 'translateY(0)', },
        },
        'zoom-in': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1.5)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
