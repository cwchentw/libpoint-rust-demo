#ifndef __POINT_H__
#define __POINT_H__

#ifdef __cplusplus
extern "C" {
#endif
  
  void* point_new(double, double);
  double point_get_x(void*);
  double point_get_y(void*);
  void point_free(void*);

#ifdef __cplusplus
}
#endif

#endif  // __POINT_H__
