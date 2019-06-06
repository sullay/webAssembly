#include <emscripten/emscripten.h>
int EMSCRIPTEN_KEEPALIVE add(int a,int b){
  return a+b;
}
int EMSCRIPTEN_KEEPALIVE sub(int a,int b){
  return a-b;
}