CC=gcc
RM=rm
RMFLAG=-f
SOURCE=main.c
TARGET=point
LIB_PATH=-Ltarget/release
LIB=-lpoint

all: rust
	$(CC) -o $(TARGET) $(SOURCE) $(LIB_PATH) $(LIB)

rust:
	cargo build --release

clean:
	cargo clean
	$(RM) $(RMFLAG) $(TARGET)
