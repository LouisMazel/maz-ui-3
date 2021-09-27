serve:
	make --directory=testing serve

lint-doc:
	make --directory=testing lint

lint-lib:
	make --directory=testing lint

build-doc:
	make --directory=testing build

build-lib:
	make --directory=lib build

reinstall:
	make reinstall-lib reinstall-doc

reinstall-lib:
	make --directory=lib reinstall

reinstall-doc:
	make --directory=testing reinstall

install:
	make install-lib install-doc

install-lib:
	make --directory=lib install

install-doc:
	make --directory=testing install