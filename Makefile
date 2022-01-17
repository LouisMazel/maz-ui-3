serve:
	make --directory=packages/docs serve

lint-lib:
	make --directory=packages/lib lint

build-docs:
	make --directory=packages/docs build

build-lib:
	make --directory=packages/lib build

reinstall:
	make reinstall-lib reinstall-docs

reinstall-lib:
	make --directory=packages/lib reinstall

reinstall-docs:
	make --directory=packages/docs reinstall

install:
	npm i && make install-lib install-docs

install-lib:
	make --directory=packages/lib install

install-docs:
	make --directory=packages/docs install

lint-staged: ## lint-staged
	npm run pre-commit

lint-staged-lib: ## install lint api packages
	make --directory=packages/lib lint-staged

lint-staged-docs: ## install lint app packages
	make --directory=packages/docs lint-staged
