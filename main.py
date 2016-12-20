from cffi import FFI

ffi = FFI()

ffi.cdef("""
void* point_new(double, double);
double point_get_x(void*);
double point_get_y(void*);
void point_free(void*);
""")

libpoint = ffi.dlopen('target/release/libpoint.so')

class Point:
    def __init__(self, x, y):
        self.p = libpoint.point_new(x, y)

    def __del__(self):
        libpoint.point_free(self.p)

    def __str__(self):
        return "({}, {})".format(self.x(), self.y())

    def x(self):
        return libpoint.point_get_x(self.p)

    def y(self):
        return libpoint.point_get_y(self.p)

if __name__ == '__main__':
    p = Point(3, 4)
    print(p)
