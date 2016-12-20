#include <stdio.h>
#include "point.h"

int main() {
  void* p = point_new(6, 4);
  printf("(%lf, %lf)\n", point_get_x(p), point_get_y(p));
  point_free(p);

  return 0;
}
