require 'ffi'

module MyLib
  extend FFI::Library

  ffi_lib 'c'
  ffi_lib 'target/release/libpoint.so'

  attach_function :point_new, [:double, :double], :pointer
  attach_function :point_get_x, [:pointer], :double
  attach_function :point_get_y, [:pointer], :double

  class Point
    def initialize(x, y)
      @p = MyLib::point_new x, y
    end

    def x
      MyLib::point_get_x @p
    end

    def y
      MyLib::point_get_y @p
    end
  end
end

p = MyLib::Point.new(6, 4)
puts "(#{p.x}, #{p.y})"
