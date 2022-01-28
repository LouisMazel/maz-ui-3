.PHONY: lint build install reinstall lint-staged

VERSION=`node -pe "require('./package.json').version"`

lint:
	npm run lint

build:
	make clean-build && npm run build

clean-build:
	npm run clean

build-watch:
	npm run build:watch

install:
	npm i

reinstall:
	rm -rf ./node_modules
	rm package-lock.json
	npm i

lint-staged: ## lint-staged
	npm run pre-commit

define bump-version
	VERSION=`node -pe "require('./package.json').version"` && \
	NEXT_VERSION=`node -pe "require('semver').inc(\"$$VERSION\", '$(1)')"` && \
	npm version $$NEXT_VERSION
endef

define bump-version-tag
	VERSION=`node -pe "require('./package.json').version"` && \
	NEXT_VERSION=`node -pe "require('semver').inc(\"$$VERSION\", 'prerelease', '$(1)')"` && \
	npm version $$NEXT_VERSION
endef

define bump-version
	@$(call bump-version,$(1))
endef

bump-version-tag:
	@$(call bump-version-tag,$(tag))

bump-version:
	@$(call bump-version,patch)

bump-version-minor:
	@$(call bump-version,minor)

bump-version-major:
	@$(call bump-version,major)