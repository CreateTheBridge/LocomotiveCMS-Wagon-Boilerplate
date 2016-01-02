# LocomotiveCMS-Wagon-Boilerplate
# Note: This project is a generator.
Our standard template for building web sites with wagon.

First install Wagon's dependencies so that Wagon will run properly.
Follow the steps here: http://doc.locomotivecms.com/get-started/install-wagon#mac

When running bundle and the project and it says:

    In file included from binder.cpp:20:
    ./project.h:116:10: fatal error: 'openssl/ssl.h' file not found
    #include <openssl/ssl.h>
            ^
    1 error generated.
    make: *** [binder.o] Error 1

    make failed, exit code 2

Then try running:

    gem install eventmachine -- --with-cppflags=-I/usr/local/opt/openssl/include
