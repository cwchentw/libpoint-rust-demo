#include <stdio.h>

void* point_new(double, double);
double point_get_x(void*);
double point_get_y(void*);

int main() {
  void* p = point_new(6, 4);
  printf("(%lf, %lf)\n", point_get_x(p), point_get_y(p));

  return 0;
}