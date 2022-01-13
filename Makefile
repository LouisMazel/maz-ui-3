serve:
	make --directory=packages/testing serve

storybook:
	make --directory=packages/storybook storybook

lint-testing:
	make --directory=packages/testing lint

lint-lib:
	make --directory=packages/testing lint

build-testing:
	make --directory=packages/testing build

build-lib:
	make --directory=packages/lib build

reinstall:
	make reinstall-lib reinstall-testing

reinstall-lib:
	make --directory=packages/lib reinstall

reinstall-testing:
	make --directory=packages/testing reinstall

install:
	make install-lib install-testing

install-lib:
	make --directory=packages/lib install

install-testing:
	make --directory=packages/testing install

lint-staged: ## lint-staged
	npm run pre-commit

lint-staged-lib: ## install lint api packages
	make --directory=packages/lib lint-staged

lint-staged-testing: ## install lint app packages
	make --directory=packages/testing lint-staged
