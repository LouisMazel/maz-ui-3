.PHONY: lint build install reinstall lint-staged

lint:
	npm run lint

build:
	npm run build

install:
	npm i

reinstall:
	rm -rf ./node_modules
	rm package-lock.json
	npm i

lint-staged: ## lint-staged
	npm run pre-commit