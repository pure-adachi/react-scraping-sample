/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /animate-ranking-part-([0-9]+)/
    }
  ],
  theme: {
    extend: {
      animation: {
        "ranking-part-10": "ranking-part-10 3s linear 0ms forwards",
        "ranking-part-9": "ranking-part-9 3s linear 500ms forwards",
        "ranking-part-8": "ranking-part-8 3s linear 800ms forwards",
        "ranking-part-7": "ranking-part-7 3s linear 1000ms forwards",
        "ranking-part-6": "ranking-part-6 3s linear 1300ms forwards",
        "ranking-part-5": "ranking-part-5 3s linear 1500ms forwards",
        "ranking-part-4": "ranking-part-4 3s linear 1800ms forwards",
        "ranking-part-3": "ranking-part-3 3s linear 2000ms forwards",
        "ranking-part-2": "ranking-part-2 3s linear 2200ms forwards",
        "ranking-part-1": "ranking-part-1 10s linear 3800ms forwards"
      },
      keyframes: {
        "fade-in-title": {
          "0%": { transform: "translateY(inherit)" },
          "100%": { transform: "translateY(0px)" }
        },
        "fade-out-title": {
          "0%": {
            opacity: 1
          },
          "100%": {
            opacity: 0
          }
        },
        "ranking-part-10": {
          "0%": {
            transform: "translate(-50%, -50%) scale(3)",
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "60%": {
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "100%": {
            transform: "translate(-50%, -50%) scale(0.3)",
            textShadow: "0 0 20px rgba(0,0,0,0)"
          }
        },
        "ranking-part-9": {
          "0%": {
            left: "-20%",
            top: "-10%",
            transform: "scale(3)",
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "60%": {
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "100%": {
            left: "40%",
            top: "40%",
            transform: "scale(0.3)",
            textShadow: "0 0 20px rgba(0,0,0,0)"
          }
        },
        "ranking-part-8": {
          "0%": {
            left: "80%",
            top: "0",
            transform: "scale(1)",
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "60%": {
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "100%": {
            left: "70%",
            top: "30%",
            transform: "scale(0.3)",
            textShadow: "0 0 20px rgba(0,0,0,0)"
          }
        },
        "ranking-part-7": {
          "0%": {
            left: "20%",
            top: "80%",
            transform: "scale(3)",
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "60%": {
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "100%": {
            left: "20%",
            top: "70%",
            transform: "scale(0.3)",
            textShadow: "0 0 20px rgba(0,0,0,0)"
          }
        },
        "ranking-part-6": {
          "0%": {
            left: "80%",
            top: "80%",
            transform: "scale(2)",
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "60%": {
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "100%": {
            left: "50%",
            top: "50%",
            transform: "scale(0.3)",
            textShadow: "0 0 20px rgba(0,0,0,0)"
          }
        },
        "ranking-part-5": {
          "0%": {
            left: "20%",
            top: "10%",
            transform: "scale(3)",
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "60%": {
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "100%": {
            left: "20%",
            top: "20%",
            transform: "scale(0.3)",
            textShadow: "0 0 20px rgba(0,0,0,0)"
          }
        },
        "ranking-part-4": {
          "0%": {
            left: "60%",
            top: "60%",
            transform: "scale(2)",
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "60%": {
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "100%": {
            left: "60%",
            top: "50%",
            transform: "scale(0.3)",
            textShadow: "0 0 20px rgba(0,0,0,0)"
          }
        },
        "ranking-part-3": {
          "0%": {
            left: "0",
            top: "70%",
            transform: "scale(1.5)",
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "60%": {
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "100%": {
            left: "10%",
            top: "60%",
            transform: "scale(0.3)",
            textShadow: "0 0 20px rgba(0,0,0,0)"
          }
        },
        "ranking-part-2": {
          "0%": {
            left: "80%",
            top: "10%",
            transform: "scale(2)",
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "60%": {
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "100%": {
            left: "50%",
            top: "20%",
            transform: "scale(0.3)",
            textShadow: "0 0 20px rgba(0,0,0,0)"
          }
        },
        "ranking-part-1": {
          "0%": {
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "90%": {
            textShadow: "0 0 0 rgba(0,0,0,1)"
          },
          "100%": {
            textShadow: "0 0 20px rgba(0,0,0,0)"
          }
        }
      }
    }
  },
  plugins: []
};
