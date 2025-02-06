import { Chivo_Mono } from "next/font/google";
import localFont from "next/font/local";

export const uncutSans = localFont({
  src: "./UncutSans-Variable.ttf",
  display: "swap",
});

export const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  display: "swap",
});
