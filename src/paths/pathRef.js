import { path1Array, path2Array, path3Array, path4Array, path5Array, path6Array, path7Array, path8Array, path9Array, path10Array, path11Array, path12Array, path13Array, path14Array, path15Array, path16Array } from './paths'

const pathColour = {
   a: '#ff0032', //all
   b: '#ffc600', //EgPe
   c: '#0016ff', //RaMaTh
   d: '#0098ff', //RaMa
   e: '#00d165', //MoNaLa
   f: '#b0ff74', //MoNaLaEgPe
   g: '#ff6e39', //MoNaLaEgPeRaMaLo
   h: '#ff4398', //R
}

export const pathReference =[
   { path: path1Array, color: pathColour.a, pause: null }, // 0
   { path: path2Array, color: pathColour.a, pause: 8 }, // 1
   { path: path3Array, color: pathColour.b, pause: 4 }, // 2
   { path: path4Array, color: pathColour.c, pause: 5 }, // 3
   { path: path5Array, color: pathColour.b, pause: 9 }, // 4
   { path: path6Array, color: pathColour.d, pause: null }, // 5
   { path: path7Array, color: pathColour.d, pause: null }, // 6
   { path: path8Array, color: pathColour.d, pause: 10 }, // 7
   { path: path9Array, color: pathColour.e, pause: null }, // 8
   { path: path10Array, color: pathColour.f, pause: null }, // 9
   { path: path11Array, color: pathColour.g, pause: null }, // 10
   { path: path12Array, color: pathColour.g, pause: null }, // 11
   { path: path13Array, color: pathColour.g, pause: 15 }, // 12
   { path: path14Array, color: pathColour.h, pause: null }, // 13
   { path: path15Array, color: pathColour.h, pause: null }, // 14
   { path: path16Array, color: pathColour.g, pause: null }, // 15
]